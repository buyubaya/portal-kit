import React, { Component } from "react";
import PropTypes from "prop-types";

import withStyles from "isomorphic-style-loader/lib/withStyles";

import Pagination from "../../elements/Pagination/";

import { Col, Modal } from "react-bootstrap";

import { fromJS } from "immutable";

import s from "./AssetPicker.less";
import globalStyle from "../../resources/style.less";

import AssetComponent from "../../elements/AssetComponent";
import SimpleButtonComponent from "../../elements/SimpleButtonComponent";
import SimpleButtonGroupComponent from "../../elements/SimpleButtonGroupComponent";
import SimpleCheckBoxComponent from "../../elements/SimpleCheckBoxComponent";
import LoadingComponent from "../../elements/LoadingComponent";

import SearchBox from "../SearchBox";

import UserMentionComponent from "./UserMentionComponent";
import JobMentionComponent from "./JobMentionComponent";
import LabelMentionComponent from "./LabelMentionComponent";

export const MENTION_SIGN = {
  JOB_SIGN: "!",
  LABEL_SIGN: "#",
  USER_SIGN: "@",
};

const REQUEST_HEADERS = {
  "X-Parse-Application-Id": "vangogh-service",
  "X-Parse-Javascript-Key": "wpA8J9tAC81qrFYG3ykZ",
  Accept: "application/json",
  "Content-Type": "application/json",
};

const cacheMentions = {};

function getEntityIdsFromSearchEntity(entities, fieldName = "key") {
  const results = [];
  Object.values(entities).forEach(
    entity => {
      if (entity && entity.get && typeof entity.get === "function") {
        results.push(entity.get(fieldName));
      }
    },
    this,
  );
  return results;
}

class AssetPicker extends Component {
  static defaultProps = {
    bsButtonStyle: "success",
    bsSize: "lg",
    cancelText: "Cancel",
    successText: "Import",
    titleText: "Import Assets",
    itemPerPage: 50,
    multiple: false,
  };

  static propTypes = {
    bsSize: PropTypes.string,
    backdrop: PropTypes.string,
    cancelText: PropTypes.string,
    successText: PropTypes.string,
    titleText: PropTypes.string,
    bsButtonStyle: PropTypes.string,
    className: PropTypes.string,
    multiple: PropTypes.bool,
    itemPerPage: PropTypes.number,
    fetch: PropTypes.func.isRequired,
    filterAssets: PropTypes.func.isRequired,
    onImport: PropTypes.func.isRequired,
    onHide: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    const options = [];
    options.push({
      trigger: MENTION_SIGN.USER_SIGN,
      theme: s,
      component: UserMentionComponent,
      onSearchChange: this.onSearchChangeWrapper(
        MENTION_SIGN.USER_SIGN,
        this.getUserMentions.bind(this),
      ),
    });
    options.push({
      trigger: MENTION_SIGN.JOB_SIGN,
      theme: s,
      component: JobMentionComponent,
      onSearchChange: this.onSearchChangeWrapper(
        MENTION_SIGN.JOB_SIGN,
        this.getJobMentions.bind(this),
      ),
    });
    options.push({
      trigger: MENTION_SIGN.LABEL_SIGN,
      theme: s,
      component: LabelMentionComponent,
      onSearchChange: this.onSearchChangeWrapper(
        MENTION_SIGN.LABEL_SIGN,
        this.getLabelMentions.bind(this),
      ),
    });

    this.state = {
      show_modal: false,
      assets: [],
      isProcessing: false,
      totalItems: 0,
      currentPage: 1,
      selectedAssets: {},
      filterParams: {},
      searchBoxOptions: options,
    };
  }

  onAssetItemClick = asset => {
    // console.log(index)
    const { selectedAssets } = this.state;
    const { multiple } = this.props;

    let selected = selectedAssets;
    // if (assets[index]) {
    //   const asset = assets[index];

    const objectId = asset.objectId;
    if (multiple) {
      if (!selectedAssets[objectId]) {
        selected[objectId] = asset;
      } else {
        delete selected[objectId];
      }
    } else {
      selected = {};
      selected[objectId] = asset;
    }
    // }

    this.setState({
      selectedAssets: selected,
    });
  };

  onSearchChangeWrapper = (trigger, getMentionsList) => async function({ value }) {
    if (!cacheMentions[trigger]) {
      cacheMentions[trigger] = await getMentionsList();
    }

    // console.log("onSearchChangeWrapper ", cacheMentions[trigger]);

    if (!cacheMentions[trigger]) {
      return fromJS([]);
    }

    const value1 = value.toLowerCase();

    const filteredSuggestions = cacheMentions[trigger].filter(
      suggestion => !value1 || suggestion.get("meta").indexOf(value1) > -1,
    );

    const size = Math.min(filteredSuggestions.size, 10);
    // console.log("onSearchChangeWrapper ", filteredSuggestions);
    return filteredSuggestions.setSize(size);
  };

  onSelectAllAsset = checked => {
    // console.log(checked)
    const { assets, selectedAssets } = this.state;
    Object.values(assets).forEach(asset => {
      const objectId = asset.objectId;
      if (checked) {
        selectedAssets[objectId] = asset;
      } else {
        delete selectedAssets[objectId];
      }
    });

    this.setState({
      selectedAssets,
    });
  };

  onSearchAsset = searchEntities => {
    // console.log("onSearchAsset", searchEntities);
    // this.setState({assets: assets})
    const userEntities = searchEntities[MENTION_SIGN.USER_SIGN] || [];
    const jobEntities = searchEntities[MENTION_SIGN.JOB_SIGN] || [];
    const labelEntities = searchEntities[MENTION_SIGN.LABEL_SIGN] || [];
    let keywords = searchEntities.text || [];

    const jobs = getEntityIdsFromSearchEntity(jobEntities);
    const people = getEntityIdsFromSearchEntity(userEntities);
    const labels = getEntityIdsFromSearchEntity(labelEntities, "key");
    keywords = keywords.join(" ");
    // console.log(jobs, people, labels, keywords)
    let { currentPage, totalItems } = this.state;
    this.setState({ isProcessing: true });
    this.props.filterAssets(keywords, jobs, people, labels, 1, this.props.itemPerPage, true).then(
      filterResults => {
        if (filterResults.pagination) {
          const pagination = filterResults.pagination || {};

          currentPage = pagination.page || 1;
          totalItems = pagination.rowCount || 0;
        }

        this.setState({
          assets: filterResults && filterResults.assets,
          isProcessing: false,
          currentPage,
          totalItems,
          filterParams: { keywords, jobs, people, labels },
          selectedAssets: {},
        });
      },
      err => {
        console.log(err);
        return err;
      },
    );
  };

  onHandleChangePage = pageNumber => {
    // console.log(pageNumber)
    const { filterParams } = this.state;
    const { keywords, jobs, people, labels } = filterParams;
    this.setState({ isProcessing: true });
    this.props
      .filterAssets(keywords, jobs, people, labels, pageNumber, this.props.itemPerPage, true)
      .then(
        filterResults => {
          let currentPage = pageNumber;

          if (filterResults.pagination) {
            const pagination = filterResults.pagination || {};
            currentPage = pagination.page || 1;
          }

          this.setState({
            assets: filterResults && filterResults.assets,
            isProcessing: false,
            currentPage,
          });
        },
        err => {
          console.log(err);
          return err;
        },
      );
  };

  onImportClicked = () => {
    const { selectedAssets } = this.state;
    if (Object.keys(selectedAssets).length <= 0) return;

    if (this.props.onImport) {
      this.props.onImport(Object.values(selectedAssets));
    }
  };

  getUserMentions = () => // console.log(this);
  this.fetchVangoghJson("https://vgservice.nabstudio.com/parse/functions/quickSearchUser", {
    keyword: " ",
  }).then(
    results => {
      if (!results || !results.result || results.result.length <= 0) {
        return [];
      }

      const objects = results.result;
      const userData = [];

      if (objects && objects.length > 0) {
        objects.forEach(item => {
          const user = {
            name: item.fullName,
            subtitle: item.email,
            meta: `${item.objectId}|${item.fullName}|${item.email}`.toLowerCase(),
            avatar: item.avatar || "https://files.nabstudio.com/images/anonymouse.png",
            key: item.objectId,
          };
          userData.push(user);
        });
      }
      return fromJS(userData);
    },
    err => {
      console.log(err);
      return err;
    },
  );

  getJobMentions = () => // console.log(this);
  this.fetchVangoghJson("https://vgservice.nabstudio.com/parse/functions/quickSearchJob", {
    keyword: " ",
  }).then(
    results => {
      if (!results || !results.result || results.result.length <= 0) {
        return [];
      }

      const objects = results.result;
      const jobData = [];

      if (objects && objects.length > 0) {
        objects.forEach(item => {
          const job = {
            name: item.name,
            meta: `${item.objectId}|${item.name}`.toLowerCase(),
            icon: "briefcase",
            key: item.objectId,
          };
          jobData.push(job);
        });
      }
      return fromJS(jobData);
    },
    err => {
      console.log(err);
      return err;
    },
  );

  getLabelMentions = () => // console.log(this);
  this.fetchVangoghJson("https://vgservice.nabstudio.com/parse/functions/quickSearchLabel", {
    keyword: " ",
  }).then(
    results => {
      if (!results || !results.result || results.result.length <= 0) {
        return [];
      }

      const objects = results.result;
      const labelData = [];

      if (objects && objects.length > 0) {
        objects.forEach(item => {
          const label = {
            name: item,
            meta: item.toLowerCase(),
            icon: "tag",
            key: item,
          };
          labelData.push(label);
        });
      }
      return fromJS(labelData);
    },
    err => {
      console.log(err);
      return err;
    },
  );

  getTotalPageNumber = (totalItem, itemPerPage) =>
    Math.floor(totalItem / itemPerPage) + (totalItem % itemPerPage > 0 ? 1 : 0);

  fetchVangoghJson = (url, body) => this.props
    .fetch(url, {
      method: "post",
      headers: REQUEST_HEADERS,
      body: JSON.stringify(body),
    })
    .then(response => response.json());

  render = () => {
    const { itemPerPage, className, multiple } = this.props;
    const {
      assets,
      isProcessing,
      totalItems,
      currentPage,
      selectedAssets,
    } = this.state;

    const disableImport = Object.keys(selectedAssets).length <= 0;
    const totalItemsPage = this.getTotalPageNumber(totalItems, itemPerPage);
    // console.log("render ", assets);

    let markCheckAll = assets && assets.length > 0;
    if (multiple) {
      assets.forEach(
        ({ objectId }) => {
          if (!markCheckAll) {
            return;
          }

          markCheckAll = markCheckAll && !!selectedAssets[objectId];
        },
        this,
      );
    }
    //

    return (
      <div className={className}>

        <Modal.Header>
          <Modal.Title>{this.props.titleText}</Modal.Title>
          <br />
          <SearchBox onSearch={this.onSearchAsset} options={this.state.searchBoxOptions} />
        </Modal.Header>
        {isProcessing
          ? <LoadingComponent />
          : <Modal.Body className={s["asset-list-container"]}>
            {assets.length > 0
                ? <Col md={12} className={globalStyle["flex-center"]}>
                  {` Showing ${assets.length || 0} of ${totalItems} assets found`}
                  {multiple
                      ? <SimpleCheckBoxComponent
                        className={globalStyle["margin-auto-left"]}
                        checked={markCheckAll}
                        value={`${markCheckAll ? "Deselect" : "Select"} all on this page`}
                        onChange={this.onSelectAllAsset}
                      />
                      : null}
                </Col>
                : <div>No assets found</div>}

            {assets.map(
                asset => {
                  const objectId = asset.objectId;
                  const selected = !!selectedAssets[objectId];
                  return (
                    <AssetComponent
                      className={s["asset-item"]}
                      key={`asset-${objectId}`}
                      url={asset.file && asset.file.previewUrl}
                      title={asset.name}
                      allowSelect={multiple || asset.disabled}
                      selected={selected}
                      disabled={asset.disabled}
                      imageClassName={globalStyle["flex-center"]}
                      onClick={() => {
                        if (!asset.disabled) return this.onAssetItemClick(asset);
                        return null;
                      }}
                    >
                      <div style={{ paddingLeft: 6, paddingRight: 6 }}>
                        {" "}{asset.job && asset.job.name}{" "}
                      </div>
                    </AssetComponent>
                  );
                },
                this,
              )}

            <div className={globalStyle["text-center"]}>
              {totalItemsPage > 1
                  ? <Pagination
                    prev
                    next
                    first
                    last
                    ellipsis
                    boundaryLinks
                    items={totalItemsPage}
                    maxButtons={5}
                    activePage={currentPage}
                    onSelect={this.onHandleChangePage}
                  />
                  : null}
            </div>
          </Modal.Body>}

        <Modal.Footer>
          <SimpleButtonGroupComponent className={globalStyle["margin-auto-left"]}>
            <SimpleButtonComponent onClick={this.props.onHide}>
              {`${this.props.cancelText} `}
            </SimpleButtonComponent>
            <SimpleButtonComponent
              disabled={disableImport}
              onClick={this.onImportClicked}
              bsStyle="success"
            >
              {`${this.props.successText} `}
            </SimpleButtonComponent>
          </SimpleButtonGroupComponent>

        </Modal.Footer>
      </div>
    );
  };
}

export default withStyles(globalStyle, s)(AssetPicker);
