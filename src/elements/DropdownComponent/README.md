# Dropdown Component
## Props

## Dropdown button
|Name|Type|Default|Description|
|--|--|--|--|
|buttonType|string ('default|split')||Dropdown button type|
|bsSize|string||Component size variations.|
|bsStyle|string||Component visual or contextual style variants.|
|componentClass|elementType|ButtonGroup|You can use a custom element type for this component.|
|disabled|boolean||Whether or not component is disabled.|
|dropup|boolean||The menu will open above the dropdown button, instead of below it.|
|id (required)|string\|number||An html id attribute, necessary for assistive technologies, such as screen readers.|
|noCaret|boolean|||
|onClose|function||A callback fired when the Dropdown closes.|
|onSelect|function||A callback fired when a menu item is selected. (eventKey: any, event: Object) => any|
|onToggle|function|| (open requied) A callback fired when the Dropdown wishes to change visibility. Called with the requested open value. function(Boolean isOpen) {}|
|open|boolean||controlled by: onToggle, initial prop: defaultOpen .Whether or not the Dropdown is visible.|
|pullRight|boolean||Align the menu to the right side of the Dropdown toggle|
|role|string||If 'menuitem', causes the dropdown to behave like a menu item rather than a menu button.|
|rootCloseEvent|one of: 'click', 'mousedown'||Which event when fired outside the component will cause it to be closed|
|title (required)|node|||
|toggleLabel (split tyle)|string||Accessible label for the toggle; the value of title if not specified.|