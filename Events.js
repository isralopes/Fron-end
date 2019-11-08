import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import {
    Input,
    Label,
    Form,
    FormGroup,
    Col,
    Collapse,
    Button,
    ButtonToolbar,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Popover,
    PopoverHeader,
    Row,
    PopoverBody
} from "reactstrap";
import moment from 'moment';
import 'moment/locale/pt-br';

import {
  BootstrapTable,
  TableHeaderColumn,
} from 'react-bootstrap-table';
import ReactTable from 'react-table';

class Events extends Component {
  state = {
    accordion: [false, false, false],
    readOnly: true,
  };

  render() {
    const { data } = this.props;

 const options = {
      sizePerPage: 20,
      paginationSize: 5,
      sizePerPageDropDown: this.renderSizePerPageDropDown,
      onRowDoubleClick: this.onRowDoubleClick,
    };

    return (
    <div>
      <BootstrapTable data={this.props.data.Events} version="4" keyField="RecordTimestamp" pagination options=
      {options} onRowDoubleClick={this.onRowDoubleClick} search tableContainerClass={`table-striped table-hover`}>
            
            <TableHeaderColumn width="10%" dataField="RecordTimestamp" dataSort>
              <span className="fs-sm">Date</span>
            </TableHeaderColumn>

            <TableHeaderColumn width="10%" dataField="Event" dataSort>
              <span className="fs-sm">Evento</span>
            </TableHeaderColumn>

            <TableHeaderColumn width="10%" dataField="Order" dataSort>
              <span className="fs-sm">Pedido</span>
            </TableHeaderColumn>

            <TableHeaderColumn width="10%" dataField="NfeNumber" dataAlign="right" dataSort>
              <span className="fs-sm">NF</span>
            </TableHeaderColumn>

          </BootstrapTable>

    </div>

    );
  }
}

Events.propTypes = {
  data: PropTypes.any.isRequired,
};

export default Events;
