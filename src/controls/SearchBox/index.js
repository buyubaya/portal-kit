import React, { Component } from "react";
import PropTypes from "prop-types";
import { EditorState, convertToRaw } from "draft-js";

import Editor from "draft-js-plugins-editor"; // eslint-disable-line import/no-unresolved
// import createMentionPlugin from "@naytev/draft-js-mention-plugin"; // eslint-disable-line import/no-unresolved
import createMentionPlugin from "draft-js-mention-plugin"; // eslint-disable-line import/no-unresolved

import withStyles from "isomorphic-style-loader/lib/withStyles";

import { fromJS } from "immutable";

import { Glyphicon } from "react-bootstrap";

// import s from './SearchBox.less';
// import pluginStyles from "./styles/plugin.keepOriginalLess";
// import editorStyles from "./style.less";
// import mentionEntryStyles from './styles/mentionEntry.less'

import s from "./style.less";
import globalStyle from "../../resources/style.less";
// import mentions from './mentions';
// import { multipleClassName } from "../../helper/commonHelper";

import SimpleButtonComponent from "../../elements/SimpleButtonComponent";

// const mentionLabelPlugin = createMentionPlugin({
//   mentions,
//   entityMutability: 'IMMUTABLE',
//   mentionTrigger: LabelSign,
//   mentionComponent: LabelMentionComponent
// });
// // const { MentionSuggestions } = mentionPlugin;
// const plugins = [mentionLabelPlugin, mentionUserPlugin, mentionJobPlugin];

function getEntityData(entityMap, type = "@") {
  const data = [];

  if (Object.keys(entityMap).length <= 0) {
    return data;
  }

  Object.keys(entityMap).forEach(
    key => {
      const item = entityMap[key] || {};
      const mention = (item.data && item.data.mention) || {};
      const itemType = item.type || "";

      if (!itemType) return;
      if (Object.keys(mention).length === 0) return;

      if (itemType === "mention" && type === "@") {
        data.push(mention);
        return;
      }

      if (type !== "" && itemType.indexOf(type) >= 0) {
        data.push(mention);
      }
    },
    this,
  );

  return data;
}

function getBlockKeyword(blockKeyword = []) {
  let keywords = [];

  if (blockKeyword.length === 0) {
    return keywords;
  }

  const blockItem = blockKeyword[0]; // for temporary case
  let text = blockItem.text || "";
  const entityRanges = blockItem.entityRanges || [];

  //   const originalText = text;
  text = text.split("");

  entityRanges.forEach(item => {
    if (Object.keys(item).length === 0) {
      return;
    }
    const length = item.length;
    const offset = item.offset;
    for (let i = offset; i < offset + length; i++) {
      text[i] = " ";
    }
  });
  text = text.join("").trim();

  if (text.trim() !== "") {
    keywords = text.split(/ +/);
  }
  return keywords;
}

const Entry = props => {
  const {
    mention, // eslint-disable-line react/prop-types
    theme, // eslint-disable-line react/prop-types
    ...parentProps
  } = props;
  return (
    <div {...parentProps} key={mention.get("key")}>
      <div className={theme.mentionSuggestionsEntryContainer}>
        {mention.get("avatar")
          ? <div className={theme.mentionSuggestionsEntryContainerLeft}>
            <img
              src={mention.get("avatar")}
              className={theme.mentionSuggestionsEntryAvatar}
              role="presentation"
              alt=""
            />
          </div>
          : null}

        <div className={theme.mentionSuggestionsEntryContainerRight}>
          <div className={theme.mentionSuggestionsEntryText}>
            {mention.get("icon") ? <Glyphicon glyph={mention.get("icon")} /> : null}
            &nbsp;
            {mention.get("name")}
          </div>

          {mention.get("subtitle")
            ? <div className={theme.mentionSuggestionsEntryTitle}>
              {mention.get("subtitle")}
            </div>
            : null}
        </div>
      </div>
    </div>
  );
};

class SearchBox extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    onSearch: PropTypes.func,
    placeholder: PropTypes.string,
  };
  constructor(props) {
    super(props);
    const editorPlugins = [];
    const state = {
      editorState: EditorState.createEmpty(),
      isMentionOpen: false,
    };
    const options = this.props.options;

    const mentionOptions = [];

    if (options && options.length > 0) {
      options.forEach(
        opt => {
          const plugin = createMentionPlugin({
            mentions: fromJS([]),
            entityMutability: "IMMUTABLE",
            mentionTrigger: opt.trigger,
            mentionComponent: opt.component,
            theme: opt.theme,
          });
          mentionOptions.push({
            plugin,
            onSearchChange: opt.onSearchChange,
            trigger: opt.trigger,
          });
          editorPlugins.push(plugin);
          state[`suggestions-${opt.trigger}`] = fromJS([]);
        },
        this,
      );
    }

    state.editorPlugins = editorPlugins;
    state.mentionOptions = mentionOptions;
    this.state = state;
  }

  onChange = editorState => {
    this.setState({
      editorState,
    });
  };

  onSearchHandle = () => {
    this.props.onSearch(this.extractEntitiesData());
  };

  handleReturn = () => {

    if (this.state.isMentionOpen) {
      return;
    }

    this.props.onSearch(this.extractEntitiesData());

    return "handled";
  }

  extractEntitiesData = () => {
    const {
      editorState,
    } = this.state;
    const currentContent = editorState.getCurrentContent();

    const rawContent = convertToRaw(currentContent);
    const entityMap = rawContent.entityMap || {};
    const blocks = rawContent.blocks || [];

    // let rawEntity       = JSON.parse(JSON.stringify(entityMap))
    const entities = {};
    this.props.options.forEach(
      opt => {
        entities[opt.trigger] = getEntityData(entityMap, opt.trigger) || [];
      },
      this,
    );

    entities.text = getBlockKeyword(blocks) || [];
    return entities;
  };

  focus = () => {
    this.editor.focus();
  };

  render = () => {
    const { editorPlugins, mentionOptions, editorState } = this.state;
    return (
      <div>
        <div className={globalStyle["flex-center"]}>
          <div className={`${s.editor} ${s["search-box-input"]}`} onClick={this.focus}>
            <Editor
              placeholder={this.props.placeholder}
              editorState={editorState}
              onChange={this.onChange}
              plugins={editorPlugins}
              defaultKeyBindings
              ref={element => {
                this.editor = element;
              }}
              handleReturn={this.handleReturn}
            />

            {mentionOptions.map(
              option => {
                const stateKey = `suggestions-${option.trigger}`;

                return (
                  <option.plugin.MentionSuggestions
                    key={stateKey}
                    onSearchChange={values => option.onSearchChange(values).then(results => {
                      const state = {};
                      state[stateKey] = results;
                      this.setState(state);
                    })}
                    suggestions={this.state[stateKey]}
                    entryComponent={Entry}
                    onOpen={() => this.setState({ isMentionOpen: true })}
                    onClose={() => this.setState({ isMentionOpen: false })}
                  />
                );
              },
              this,
            )}
          </div>
          <SimpleButtonComponent
            onClick={this.onSearchHandle}
            style={{
              minHeight: 43,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            }}
            className={s["btn-search"]}
            icon="search"
          />
        </div>
        <span className="text-muted">{"\"@\" for users, \"!\"\" for jobs, \"#\"\" for labels"}</span>
      </div>
    );
  };
}

SearchBox.defaultProps = {
  onSearch: () => {},
};

export default withStyles(s, globalStyle)(SearchBox);
