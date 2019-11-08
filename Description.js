import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Widget from '../../components/Widget';

import {
  Input,
  Label,
  FormText,
  Form,
  CustomInput,
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

class Description extends Component {
  state = {
    accordion: [false, false, false],
    readOnly: true,
  };

  render() {
    const { data } = this.props;
    return (
      <div>
        <div className={Description}>
          <div className={cx(Description)}>
            <br></br>
           
           <Row>
            <Form>
          
          <Col lg={20} lg={14}>
          <Widget   title={<h3> Dados Do Pedido
        </h3>} close collapse>
      <Row form>
      <Col md={6}>
          <FormGroup>
            <Label for="examplePassword" style={{fontSize: 20}}>IDOrder</Label>
            <Input id="ConsumerCpfCnpj" type="text"
                    readOnly={this.readOnly} defaultValue={data.IDOrder} />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword" style={{fontSize: 20}}>Número Do Pedido</Label>
            <Input id="ConsumerEmail" type="text"
                    readOnly={this.readOnly} defaultValue={data.Order} type="text" />
          </FormGroup>
        </Col>
        </Row>
      <Row form>
      <Col md={6}>
        <FormGroup>
        <Label for="exampleCustomSelect" style={{fontSize: 20}}>Plataforma</Label>
        <Input type="select" id="exampleCustomSelect" name="select">
        <option value="1">Mercado Pago</option>
                          <option value="2">B2B</option>
                          <option value="3">Clube</option>
                          <option value="4">Mercado Pago</option>
                          <option value="5">Compre Junto</option>
                          <option value="6">MarketPlace</option>
                          <option value="7">Reenvio</option>
                          <option value="8">Corporativo</option>
                          <option value="9">BeerFlakes</option>
                          <option value="10">WhatsApp</option>
                          <option value="11">Fulfilment</option>
                          <option value="12">Outros</option>
        </Input>
      </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleCity" style={{fontSize: 20}}>Status</Label>
            <Input id="ConsumerCpfCnpj" type="text"
                    readOnly={this.readOnly} defaultValue={data.StatusOrder}/>
          </FormGroup>
        </Col>
        </Row>
        <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleCity" style={{fontSize: 20}}>Situação</Label>
            <Input id="ConsumerEmail" type="text"
                    readOnly={this.readOnly} defaultValue={data.OrderNumber} />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="examplePassword" style={{fontSize: 20}}>Data</Label>
            <Input id="ConsumerEmail" type="text"
                    readOnly={this.readOnly} defaultValue={data.Datas} type="text" />
          </FormGroup>
        </Col>
        </Row>
        
        
        </Widget>
        </Col>
        </Form>

        <Form>
        < Col xs={5} lg={6} />
          <Col lg={14} md={18}>
          <Widget   title={<h3> Dados Do Cliente
        </h3>} close collapse>
      <Row form>
      <Col md={4}>
          <FormGroup>
            <Label for="examplePassword" style={{fontSize: 20}}>Nome</Label>
            <Input id="ConsumerNameCorporateName" type="text"
                    readOnly={this.readOnly} defaultValue={data.ConsumerNameCorporateName}/>
          </FormGroup>
        </Col>
        <Col md={4}>
        <FormGroup>
        <Label for="exampleCustomSelect" style={{fontSize: 20}}> Consumidor</Label>
        <Input type="select" id="exampleCustomSelect" name="select">
        <option value="1">Pessoa Física</option>
                          <option value="2">Pessoa Jurídica</option>
                         
                          
        </Input>
      </FormGroup>
        </Col>
        </Row>
      <Row form>
      <Col md={4}>
          <FormGroup>
            <Label for="exampleCity" style={{fontSize: 20}}>CPF/CNPJ</Label>
            <Input id="ConsumerCpfCnpj" type="text"
                    readOnly={this.readOnly} defaultValue={data.ConsumerCpfCnpj}/>
          </FormGroup>
        </Col>
        
        <Col md={4}>
          <FormGroup>
            <Label for="exampleCity" style={{fontSize: 20}}>Endereço</Label>
            <Input id="ConsumerEmail" type="text"
                    readOnly={this.readOnly} defaultValue={data.ShippingStreet} />
          </FormGroup>
        </Col>
        </Row>
        
        <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleCity" style={{fontSize: 20}}>Email</Label>
            <Input id="ConsumerEmail" type="text"
                    readOnly={this.readOnly} defaultValue={data.ConsumerEmail} />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleCity" style={{fontSize: 20}}>Número</Label>
            <Input id="ConsumerEmail" type="text"
                    readOnly={this.readOnly} defaultValue={data.ShippingNumber} />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="exampleCity" style={{fontSize: 20}}>Complemento</Label>
            <Input id="ConsumerEmail" type="text"
                    readOnly={this.readOnly} defaultValue={data.ShippingComplement} />
          </FormGroup>
        </Col>
        </Row>
        <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleCity" style={{fontSize: 20}}>Telefone</Label>
            <Input id="ConsumerEmail" type="text"
                    readOnly={this.readOnly} defaultValue={data.ConsumerTelephone} />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleCity" style={{fontSize: 20}} >Bairro</Label>
            <Input id="ConsumerCpfCnpj" type="text"
                    readOnly={this.readOnly} defaultValue={data.ShippingNeighborhood} />
          </FormGroup>
        </Col>
        </Row>
        <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleCity" style={{fontSize: 20}}>Cep</Label>
            <Input id="ConsumerEmail" type="text"
                    readOnly={this.readOnly} defaultValue={data.ShippingPostalCode} />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleCity" style={{fontSize: 20}}>Cidade</Label>
            <Input id="ConsumerEmail" type="text"
                    readOnly={this.readOnly} defaultValue={data.ShippingCity} />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleCity" style={{fontSize: 20}}>UF</Label>
            <Input id="ConsumerEmail" type="text"
                    readOnly={this.readOnly} defaultValue={data.ShippingState} />
          </FormGroup>
        </Col>

        </Row>
        </Widget>
        </Col>
        </Form>
        </Row>

            

          </div>
        </div>
      </div>
    );
  }
}

Description.propTypes = {
  data: PropTypes.any.isRequired,
};

export default Description;