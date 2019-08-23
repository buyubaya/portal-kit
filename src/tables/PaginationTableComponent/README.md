# Pagination Table Component
## Props

|Name|Type|Default|Description|
|--|--|--|--|
|headers(required) |array||Header component items|
|rowsData(required) |array||Table data|
|rowRenderer(required) |function||Define row render from table data|
|paginator|object|undefined|Pagination info (optional)|
|itemPerPage|number||Items for a page|
|onSelectPage|function||On page click handle|