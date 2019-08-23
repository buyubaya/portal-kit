/* eslint max-len: "off" */

import Helmet from "react-helmet";
import React, { Component } from "react";

import withStyles from "isomorphic-style-loader/lib/withStyles";

import s from "./sample.less";
import PropsTableComponent from "../../../../samples/PropsTableComponent";

import SelectComponent from "../index";

const getOptions = (input, callback) => {
  setTimeout(
    () => {
      callback(null, {
        options: [
          { value: "one", label: "One" },
          { value: "two", label: "Two" },
          { value: "three", label: "Three" },
        ],
        // CAREFUL! Only set this to true when there are no more options,
        // or more specific queries will not be sent to the server.
        complete: true,
      });
    },
    500,
  );
};

class SelectSample extends Component {
  getOptions(optionSource = []) {
    const options = Object.assign([], optionSource);
    return options;
  }
  options = [
    { value: "one", label: "One" },
    { value: "two", label: "Two" },
    { value: "three", label: "Three" },
  ];

  render() {
    const tableData = {
      rows: [
        ["allowCreate", "boolean", "false", "Allow to create addition value"],
        [
          "valueRenderLabelStyle",
          "boolean",
          "undefined",
          "Change options rendered style to bootstrap label",
        ],
        [
          "controlFullHeght",
          "boolean",
          "undefined",
          "input control full height",
        ],
        [
          "addLabelText",
          "string",
          " 'Add {label}?' ",
          "Text to display when allowCreate is true",
        ],
        [
          "arrowRenderer",
          "func",
          "undefined",
          "Renders a custom drop-down arrow to be shown in the right-hand side of the select: arrowRenderer({ onMouseDown })",
        ],
        [
          "autoBlur",
          "bool",
          "false",
          "Blurs the input element after a selection has been made. Handy for lowering the keyboard on mobile devices",
        ],
        ["autofocus", "bool", "undefined", "autofocus the component on mount"],
        [
          "autoload",
          "bool",
          "true",
          "whether to auto-load the default async options set",
        ],
        [
          "autosize",
          "bool",
          "true",
          "If enabled, the input will expand as the length of its value increases",
        ],
        [
          "backspaceRemoves",
          "bool",
          "true",
          "whether pressing backspace removes the last item when there is no input value",
        ],
        [
          "backspaceToRemoveMessage",
          "string",
          "'Press backspace to remove {last label}'",
          "prompt shown in input when at least one option in a multiselect is shown, set to '' to clear",
        ],
        [
          "cache",
          "bool",
          "true",
          "enables the options cache for asyncOptions (default: true)",
        ],
        ["className", "string", "undefined", "className for the outer element"],
        ["clearable", "bool", "true", "should it be possible to reset value"],
        [
          "clearAllText",
          "string",
          "'Clear all'",
          "title for the 'clear' control when multi is true",
        ],
        [
          "clearValueText",
          "string",
          "'Clear value'",
          "title for the 'clear' control",
        ],
        [
          "resetValue",
          "any",
          "null",
          "value to use when you clear the control",
        ],
        [
          "deleteRemoves",
          "bool",
          "true",
          "whether pressing delete key removes the last item when there is no input value",
        ],
        [
          "delimiter",
          "string",
          "','",
          "delimiter to use to join multiple values",
        ],
        ["disabled", "bool", "false", "whether the Select is disabled or not"],
        [
          "filterOption",
          "func",
          "undefined",
          "method to filter a single option: function(option, filterString)",
        ],
        [
          "filterOptions",
          "func",
          "undefined",
          "method to filter the options array: function([options],, filterString, [values],)",
        ],
        [
          "ignoreCase",
          "bool",
          "true",
          "whether to perform case-insensitive filtering",
        ],
        [
          "inputProps",
          "object",
          "{}",
          "custom attributes for the Input (in the Select-control) e.g: {'data-foo': 'bar'}",
        ],
        [
          "isLoading",
          "bool",
          "false",
          "whether the Select is loading externally or not (such as options being loaded)",
        ],
        [
          "joinValues",
          "bool",
          "false",
          "join multiple values into a single hidden input using the delimiter",
        ],
        [
          "labelKey",
          "string",
          "'label'",
          "the option property to use for the label",
        ],
        [
          "loadOptions",
          "func",
          "undefined",
          "function that returns a promise or calls a callback with the options: function(input, [callback],)",
        ],
        [
          "matchPos",
          "string",
          "'any'",
          "(any, start) match the start or entire string when filtering",
        ],
        [
          "matchProp",
          "string",
          "'any'",
          "(any, label, value) which option property to filter on",
        ],
        [
          "menuBuffer",
          "number",
          "0",
          "buffer of px between the base of the dropdown and the viewport to shift if menu doesnt fit in viewport",
        ],
        [
          "menuRenderer",
          "func",
          "undefined",
          "Renders a custom menu with options; accepts the following named parameters: menuRenderer({ focusedOption, focusOption, options, selectValue, valueArray })",
        ],
        ["multi", "bool", "undefined", "multi-value input"],
        ["name", "string", "undefined", "field name, for hidden input tag"],
        [
          "noResultsText",
          "string",
          "'No results found'",
          "placeholder displayed when there are no matching search results or a falsy value to hide it",
        ],
        ["onBlur", "func", "undefined", "onBlur handler: function(event) {}"],
        [
          "onBlurResetsInput",
          "bool",
          "true",
          "whether to clear input on blur or not",
        ],
        [
          "onChange",
          "func",
          "undefined",
          "onChange handler: function(newValue) {}",
        ],
        [
          "onClose",
          "func",
          "undefined",
          "handler for when the menu closes: function () {}",
        ],
        [
          "onCloseResetsInput",
          "bool",
          "true",
          "whether to clear input when closing the menu through the arrow",
        ],
        ["onFocus", "func", "undefined", "onFocus handler: function(event) {}"],
        [
          "onInputChange",
          "func",
          "undefined",
          "onInputChange handler: function(inputValue) {}",
        ],
        [
          "onInputKeyDown",
          "func",
          "undefined",
          "input keyDown handler; call event.preventDefault() to override default Select behavior: function(event) {}",
        ],
        [
          "onOpen",
          "func",
          "undefined",
          "handler for when the menu opens: function () {}",
        ],
        [
          "onValueClick",
          "func",
          "undefined",
          "onClick handler for value labels: function (value, event) {}",
        ],
        [
          "openOnFocus",
          "bool",
          "false",
          "open the options menu when the input gets focus (requires searchable = true)",
        ],
        [
          "optionRenderer",
          "func",
          "undefined",
          "function which returns a custom way to render the options in the menu",
        ],
        ["options", "array", "undefined", "array of options"],
        [
          "placeholder",
          "string|node",
          "'Select ...'",
          "field placeholder, displayed when there's no value",
        ],
        [
          "scrollMenuIntoView",
          "bool",
          "true",
          "whether the viewport will shift to display the entire menu when engaged",
        ],
        [
          "searchable",
          "bool",
          "true",
          "whether to enable searching feature or not",
        ],
        [
          "searchPromptText",
          "string|node",
          "'Type to search'",
          "label to prompt for search input",
        ],
        [
          "tabSelectsValue",
          "bool",
          "true",
          "whether to select the currently focused value when the [tab], key is pressed",
        ],
        ["value", "any", "undefined", "initial field value"],
        [
          "valueKey",
          "string",
          "'value'",
          "the option property to use for the value",
        ],
        [
          "valueRenderer",
          "func",
          "undefined",
          "function which returns a custom way to render the value selected function (option) {}",
        ],
      ],
    };

    return (
      <div>
        <Helmet title="Select Component" />
        <h1>Information</h1><br />
        <p>
          Simple form input in NAB portal. Some element utilise bootstrap default and other are our customised version.
        </p>
        <br />
        <h1>Single Select</h1><br />
        <div>
          <SelectComponent options={this.getOptions(this.options)} />
        </div>
        <div>
          example code:<br />
          <code>
            {
              "let options = [{ value: 'one', label: 'One' },{ value: 'two', label: 'Two' },{ value: 'three', label: 'Three' },];"
            }
            <br />
            {"<SelectComponent options={options}/>"}<br />
          </code>
          <br />
        </div>

        <h1>Multi Select</h1><br />
        <div>
          <SelectComponent options={this.getOptions(this.options)} multi />
        </div>
        <div>
          example code:<br />
          <code>
            {
              "let options = [{ value: 'one', label: 'One' },{ value: 'two', label: 'Two' },{ value: 'three', label: 'Three' },];"
            }
            <br />
            {"<SelectComponent options={options} multi/>"}<br />
          </code>
          <br />
        </div>

        <h1>Creatable Select</h1><br />
        <div>
          <SelectComponent
            options={this.getOptions(this.options)}
            allowCreate
          />
        </div>
        <div>
          example code:<br />
          <code>
            {
              "let options = [{ value: 'one', label: 'One' },{ value: 'two', label: 'Two' },{ value: 'three', label: 'Three' },];"
            }
            <br />
            {"<SelectComponent options={options} allowCreate/>"}<br />
          </code>
          <br />
        </div>

        <h1>Asynchronous Select</h1><br />
        <div>
          <SelectComponent loadOptions={getOptions} />
        </div>
        <div>
          example code:<br />
          <code>
            {
              `let getOptions = function(input, callback) {
                setTimeout(function() {
                    callback(null, {
                        options: [
                            { value: 'one', label: 'One' },
                            { value: 'two', label: 'Two' },
                            { value: 'three', label: 'Three' },
                        ],
                    });
                }, 500);
            };`
            }<br />
            {"<SelectComponent options={options} allowCreate/>"}<br />
          </code>
          <br />
        </div>

        <h1>Props:</h1>
        <PropsTableComponent table_data={tableData} />
      </div>
    );
  }
}

export default withStyles(s)(SelectSample);
