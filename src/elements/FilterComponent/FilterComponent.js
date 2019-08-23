import React, { Component } from "react";
import cn from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import { Row, Col, FormGroup, ControlLabel } from "react-bootstrap";
import PropTypes from "prop-types";

import s from "./FilterComponent.less";

let filterTimeout = null;

class FilterComponent extends Component {
  static propTypes = {
    filterItems: PropTypes.array.isRequired,
    onApplyFilter: PropTypes.func,
    className: PropTypes.string,
    autoApplyFilter: PropTypes.bool,
    dontUpdate: PropTypes.bool,
    storedFilter: PropTypes.object,
  };

  static defaultProps = {
    onApplyFilter: () => {},
    className: null,
    autoApplyFilter: false,
  };

  autoApplyEnabled = false;

  state = {
    isShowMore: false,
    filters: {},
  };

  componentDidMount() {
    this.setState({ filters: this.props.storedFilter })
  }

  componentDidUpdate(prevProps, prevState) {
    const { autoApplyFilter } = this.props;
    if (JSON.stringify(this.state.filters) !== JSON.stringify(prevState.filters)) {
      if (this.autoApplyEnabled && autoApplyFilter) {
        if (filterTimeout != null) {
          clearTimeout(filterTimeout);
        }

        filterTimeout = setTimeout(() => {
          this.props.onApplyFilter(this.state.filters);
        }, 500);
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.storedFilter !== this.state.filters){
      this.setState({ filters: nextProps.storedFilter })
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !nextProps.dontUpdate
  }

  onShowMore = () => {
    this.setState({
      isShowMore: true,
    });
  };

  onKeyPress = event => {
    if (event.key === "Enter" || event.charCode === 13) {
      this.props.onApplyFilter(this.state.filters);
    }
  };

  setFilter = filter => {
    this.autoApplyEnabled = true; // needed to prevent needless reloading when stored filter already set in parent
    this.setState({
      filters: Object.assign({}, this.state.filters, filter),
    });
  }

  render() {
    const { className, filterItems, autoApplyFilter, onApplyFilter, storedFilter, ...other } = this.props;
    const { isShowMore } = this.state;

    const showMoreStyle = isShowMore ? { display: "block" } : { display: "none" };
    let itemCount = 0;

    return (
      <div className={cn(s.root, className, "clearfix")} {...other}>
        <div className="clearfix">
          {filterItems.map((item, index) => {
            if (!item || item === null || (item && item.component(this.state.filters, this) === null)) {
              return null;
            }

            itemCount++;

            return (
              <Col key={item.name} xs={6} md={3} lg={2} style={index > 5 ? showMoreStyle : null}>
                <div onKeyPress={this.onKeyPress}>
                  <FormGroup>
                    <ControlLabel>{item && item.name}</ControlLabel>
                    {item.component(this.state.filters, this)}
                  </FormGroup>
                </div>
              </Col>
            );
          })}
        </div>
        { itemCount > 6 && !isShowMore &&
          <a className={s.moreBtn} href="#" onClick={this.onShowMore}>
            Show more
            <i className={cn("glyphicon glyphicon-triangle-bottom", s.icon)} />
          </a>
        }
      </div>
    );
  }
}

export default withStyles(s)(FilterComponent);
