import Helmet from 'react-helmet';
import React, {PropTypes} from 'react';
var classNames = require('classnames');

import DateTimeComponent from '../index';
import MasterLayout   from '../../../layouts/MasterLayout'
import constant from '../../../constant'
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './sample.less';
import {Row, Col, InputGroup} from 'react-bootstrap';

import PropsTableComponent from '../../../../samples/PropsTableComponent';

var DateTimeSample =  React.createClass({
  render: function(){
    let table_data = { 
      // header: [ "Name","Type","Default","Description"],
      rows : [
        [" value " , " `Date` " , " `new Date()` " , " Represents the selected date by the component, in order to use it as a [controlled component](https://facebook.github.io/react/docs/forms.html#controlled-components). This prop is parsed by Moment.js, so it is possible to use a date `string` or a `moment` object. " ],

        [" defaultValue " , " `Date` " , " `new Date()` " , " Represents the selected date for the component to use it as a [uncontrolled component](https://facebook.github.io/react/docs/forms.html#uncontrolled-components). This prop is parsed by Moment.js, so it is possible to use a date `string` or a `moment` object. " ],

        [" dateFormat   " , " `boolean` or `string`  " , " `true` " , " Defines the format for the date. It accepts any [Moment.js date format](http://momentjs.com/docs/#/displaying/format/) (not in localized format). If `true` the date will be displayed using the defaults for the current locale. If `false` the datepicker is disabled and the component can be used as timepicker. "],

        [" timeFormat   " , " `boolean` or `string`  " , " `true` " , " Defines the format for the time. It accepts any [Moment.js time format](http://momentjs.com/docs/#/displaying/format/) (not in localized format). If `true` the time will be displayed using the defaults for the current locale. If `false` the timepicker is disabled and the component can be used as datepicker. "] ,

        [" input " , " `boolean` " , " `true` " , " Whether to show an input field to edit the date manually. " ],

        [" open " , " `boolean` " , " `null` " , " Whether to open or close the picker. If not set react-datetime will open the datepicker on input focus and close it on click outside. " ],

        [" locale " , " `string` " , " `null` " , " Manually set the locale for the react-datetime instance. Moment.js locale needs to be loaded to be used, see [i18n docs](#i18n)."], 
        [" utc " , " `boolean` " , " `false` " , " When true, input time values will be interpreted as UTC (Zulu time) by Moment.js. Otherwise they will default to the user's local timezone."] , 
        [" onChange " , " `function` " , " empty function " , " Callback trigger when the date changes. The callback receives the selected `moment` object as only parameter, if the date in the input is valid. If the date in the input is not valid, the callback receives the value of the input (a string). " ],

        [" onFocus " , " `function` " , " empty function " , " Callback trigger for when the user opens the datepicker. " ],

        [" onBlur " , " `function` " , " empty function " , " Callback trigger for when the user clicks outside of the input, simulating a regular onBlur. The callback receives the selected `moment` object as only parameter, if the date in the input is valid. If the date in the input is not valid, the callback returned. " ],

        [" viewMode " , " `string` or `number` " , " `'days'` " , " The default view to display when the picker is shown (`'years'`, `'months'`, `'days'`, `'time'`). " ],

        [" className " , " `string` or `string array` " , " `''` " , " Extra class name for the outermost markup element. " ],

        [" inputProps " , " `object` " , " `undefined` " , " Defines additional attributes for the input element of the component. For example: `placeholder`, `disabled`, `required` and `name`. " ]

        [" isValidDate " , " `function` " , " `() => true` " , " Define the dates that can be selected. The function receives `(currentDate, selectedDate)` and should return a `true` or `false` whether the `currentDate` is valid or not. See [selectable dates](#selectable-dates)." ], 
        [" renderDay " , " `function` " , " `DOM.td(day)` " , " Customize the way that the days are shown in the daypicker. The accepted function has the `selectedDate`, the current date and the default calculated `props` for the cell, and must return a React component. See [appearance customization](#appearance-customization). " ],

        [" renderMonth " , " `function` " , " `DOM.td(month)` " , " Customize the way that the months are shown in the monthpicker. The accepted function has the `selectedDate`, the current date and the default calculated `props` for the cell, the `month` and the `year` to be shown, and must return a React component. See [appearance customization](#appearance-customization). "] ,

        [" renderYear " , " `function` " , " `DOM.td(year)` " , " Customize the way that the years are shown in the year picker. The accepted function has the `selectedDate`, the current date and the default calculated `props` for the cell, the `year` to be shown, and must return a React component. See [appearance customization](#appearance-customization). " ],

        [" strictParsing " , " `boolean` " , " `false` " , " Whether to use Moment.js's [strict parsing](http://momentjs.com/docs/#/parsing/string-format/) when parsing input." ],
        [" closeOnSelect " , " `boolean` " , " `false` " , " When `true`, once the day has been selected, the datepicker will be automatically closed."] ,
        [" closeOnTab " , " `boolean` " , " `true` " , " When `true` and the input is focused, pressing the `tab` key will close the datepicker." ], 
        [" timeConstraints " , " `object` " , " `null` " , " Add some constraints to the timepicker. It accepts an `object` with the format `{ hours: { min: 9, max: 15, step: 2 }}`, this example means the hours can't be lower than `9` and higher than `15`, and it will change adding or subtracting `2` hours everytime the buttons are clicked. The constraints can be added to the `hours`, `minutes`, `seconds` and `milliseconds`." ],
        [" disableOnClickOutside " , " `boolean` " , " `false` " , " When `true`, keep the datepicker open when click event is triggered outside of component. When `false`, close it. " ],
      ]
    }
    return (
      <div>
      <Helmet title="Date Time Picker"/>
        <h1> Information </h1><br/>
        <p> Date Time picker in NAB Portal. Use Bootrap material ui.</p> <br/>
        <h1> Sample </h1><br/>

        <Row>
              <h4 className={s['align-top']}> Disable with text</h4>
              example :<br/>
              <code> {"<DateTimeComponent disabled={true} value='11/09/2016 12:00 AM'/>"} </code>
              <br/>
              <br/>
          <Col md={6} >
              <DateTimeComponent disabled={true} value='11/09/2016 12:00 AM'/>  
          </Col>
        </Row>
        <br/>
        <br/>
        <Row style={{ marginBottom: 260 }}>
              <h4 className={s['align-top']}> Open Automatically and Close when Select </h4>        
            example :<br/>
              <code> {"<DateTimeComponent defaultValue='11/09/2016 12:00 AM' open={true} closeOnSelect={true} />"} </code>
              <br/>
              <br/>
          <Col md={6}>
            <DateTimeComponent defaultValue='11/09/2016 12:00 AM' open={true} closeOnSelect={true} />
          </Col>
        </Row>
        <Row style={{ marginBottom: 260 }}>
              <h4 className={s['align-top']}> Enable</h4>        
              example :<br/>
              <code> {"<DateTimeComponent defaultValue='11/09/2016 12:00 AM'/>"} </code>
              <br/>
              <br/>
          <Col md={6}>
              <DateTimeComponent defaultValue='11/09/2016 12:00 AM'/>
          </Col>
        </Row>
       
        
      <PropsTableComponent table_data={table_data}/>
      </div>
    )  
  }
})

export default withStyles(s)(DateTimeSample);