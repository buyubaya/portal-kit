import React, {Component} from 'react';

import {Table} from 'react-bootstrap';
import COSNTANT from '../src/constant';
export default class PropsTable extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }

    renderCell = (cell_data=[])=>{
        let cell = [];

        cell_data.forEach( (item, i)=>{
            cell.push(<td key={i}>{item}</td>)
        } )

        return cell;
    }

    renderRow = (row_data=[])=>{
        let row = [];
        row_data.forEach( (item, i) => {
            row.push(<tr key={i}>{this.renderCell(item)}</tr>)
        })
        return row;
    }

    renderHeader = (headers=[])=>{
        let header_cell = [];
        headers.forEach( (item, i) => {
            header_cell.push(<th key={i}>{item}</th>)
        })
        return header_cell;
    }

    render(){
        let {table_data = {}, ...other} = this.props
        let {header=[], rows=[]} = table_data;
        return (
            <Table {...other}>
                <thead>
                    <tr>
                    {this.renderHeader(COSNTANT.PROPS_TABLE_HEADER)}
                    </tr>
                </thead>
                <tbody>
                    {this.renderRow(rows)}
                </tbody>
            </Table>
        )        
    }    
}
