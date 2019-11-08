import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Input, Label, FormGroup, Col, Form, Row, Button , UncontrolledCarousel } from "reactstrap";
import Widget from '../../components/Widget';
import Dropzone from 'react-dropzone';

import axios from 'axios'
import DropZone from 'react-dropzone';
import InputValidation from '../../components/InputValidation';
import Formsy from 'formsy-react';








class Ecommerce extends Component {

    
    constructor(props){
        super(props);
        this.state = {users:[]}
    }

    state = {
        accordion: [false, false, false],
        readOnly: true,
        
    };
   
    
    componentDidMount() {

        this.setState({url:  "https://s3.amazonaws.com/rockitsystem/Image/1.jpg"})
    }



    render() {

        const { data } = this.props;
        return (

            <div>
                <div className={Ecommerce}>
                    <div className={cx(Ecommerce)}>
                       

                       
                        <br></br>
                        <Row>
                            <Col xs={0} lg={1} />
                            <Col lg={8} xs={1}>
                                <Widget

                                >
                                    <Formsy.Form>
                                        <Row form>

                                            <Col md={3}>
                                                <FormGroup>
                                                    <Label for="number" style={{ fontSize: 20 }}><b>IDSKU</b></Label>
                                                    <Input
                                                        type="text"
                                                        id="IDSku"
                                                        name="number"
                                                        readOnly={this.readOnly} defaultValue={data.IDSku}
                                                        required
                                                        validations="isNumeric"
                                                        validationError={{ isNumeric: 'Esse valor não é valído.' }}
                                                    />
                                                </FormGroup>
                                            </Col>

                                            <Col md={3}>
                                                <FormGroup>
                                                    <Label for="basic-change" style={{ fontSize: 20 }}><b>Status Atual Vtex </b></Label>
                                                    <InputValidation
                                                       type="text" id="basic-change"
                                                       name="basic-change"
                                                       trigger="change"
                                                       validations={{ maxLength: 100 }}
                                                       validationError={{
                                                           maxLength: 'O valor é muito longo, maxímo 10 caracteres.',
                                                       }}
                                                        required
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md={3}>
                                                <FormGroup>
                                                    <Label for="basic-change" style={{ fontSize: 20 }}><b>Vísivel</b></Label>
                                                    <InputValidation
                                                       type="text" id="basic-change"
                                                       name="basic-change"
                                                       trigger="change"
                                                       validations={{ maxLength: 100 }}
                                                       validationError={{
                                                           maxLength: 'O valor é muito longo, maxímo 100 caracteres.',
                                                       }}
                                                        required
                                                    />
                                                </FormGroup>
                                            </Col>

                                            <Col md={3}>
                                                <FormGroup>
                                                 <img src={this.state.url} height= "1%" width= "55%" />
                                                </FormGroup>
                                            </Col>

                                        </Row>
                                        <Row form>

                                            <Col md={9}>
                                                <FormGroup>
                                                    <Label for="basic-change" style={{ fontSize: 20 }}><b>Descrição *</b></Label>
                                                    <Input
                                                        type="text" id="basic-change"
                                                        name="basic-change"
                                                        trigger="change"
                                                        readOnly={this.readOnly} defaultValue={data.SkuName}
                                                            validations={{ maxLength: 100 }}
                                                            validationError={{
                                                                maxLength: 'O valor é muito longo, maxímo 100 caracteres.',
                                                            }}
                                                            required
                                                    />
                                                </FormGroup>
                                            </Col>

                                        </Row>

                                        <Row form>
                                            <Col md={5}>
                                                <FormGroup>
                                                    <Label for="exampleCustomSelect" style={{ fontSize: 20 }}></Label>
                                                    <Input type="select" id="exampleCustomSelect" name="select">
                                                        <option value="1">HB</option>

                                                    </Input>
                                                </FormGroup>
                                            </Col>

                                            <Col md={5}>
                                                <FormGroup>
                                                    <Label for="exampleCustomSelect" style={{ fontSize: 20 }}></Label>
                                                    <Input type="select" id="exampleCustomSelect" name="select">
                                                        <option value="1">Normal</option>

                                                    </Input>
                                                </FormGroup>
                                            </Col>

                                        </Row>
                                       
                                    </Formsy.Form>
                                </Widget>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={0} lg={1} />
                            <Col lg={8} xs={12}>

                                <Widget>
                                    <Formsy.Form>
                                        <Row form>

                                        <Col md={4}>
                                                <FormGroup>
                                                    <Label for="exampleCustomSelect" style={{ fontSize: 20 }}> <b>Categoria</b></Label>
                                                    <Input type="select" id="exampleCustomSelect" name="select">
                                                        <option value="1">Estilos -> Light Lager</option>

                                                    </Input>
                                                </FormGroup>
                                            </Col>

                                            <Col md={4}>
                                                <FormGroup>
                                                    <Label for="exampleCustomSelect" style={{ fontSize: 20 }}> <b>Esta Ativo ?* </b></Label>
                                                    <Input type="select" id="exampleCustomSelect" name="select"  readOnly={this.readOnly} defaultValue={data.EcommerceIsActive}>
                                                        <option value="1">True</option>
                                                        <option value="2">False</option>

                                                    </Input>
                                                </FormGroup>
                                            </Col>

                                            <Col md={4}>
                                                <FormGroup>
                                                    <Label for="exampleCustomSelect" style={{ fontSize: 20 }}> <b> Mostrar sem Estoque *</b></Label>
                                                    <Input type="select" id="exampleCustomSelect" name="select">
                                                        <option value="1">True</option>
                                                        <option value="2">False</option>

                                                    </Input>
                                                </FormGroup>
                                            </Col>
                                           

                                        </Row>
                                        
                                        <Row form>
                                        <Col lg={9} lg ={12}>
                                        
                                        <FormGroup>
        <Label for="exampleText" style={{ fontSize: 20 }}> <b>Ecommerce Description </b></Label>
       
          <Input type="textarea" name="text"   rows="5" cols="33" id="exampleText"   readOnly={this.readOnly} defaultValue={data.EcommerceDescription} />
    
      </FormGroup>
      </Col>
      </Row>

          <Row form>
      
     
      <Col lg={9} lg ={12}>
                                    
                                        <FormGroup>
        <Label for="exampleText" style={{ fontSize: 20 }}><b>Ecommerce Description Short</b></Label>
       
          <Input type="textarea" name="text" rows="5" cols="33" id="exampleText"  readOnly={this.readOnly} defaultValue={data.EcommerceDescriptionShort} />
    
      </FormGroup>
      </Col>
      </Row>
<Row form>

      <Col lg={9} lg ={12}>
                                    
                                        <FormGroup >
        <Label for="exampleText" style={{ fontSize: 20 }}><b>Meta Tag Description</b></Label>
       
          <Input type="textarea" name="text" id="exampleText" />
    
      </FormGroup>
      </Col>
   
      </Row>
                                        

                                        <Row form>

                                        <Col md={6}>
                                                <FormGroup>
                                                    <Label for="basic-change" style={{ fontSize: 20 }}><b>Ecommerce Title</b></Label>
                                                    <Input
                                                        type="text" id="basic-change"
                                                        name="basic-change"
                                                        trigger="change"
                                                        readOnly={this.readOnly} defaultValue={data.EcommerceTitle}
                                                        validations={{ maxLength: 100 }}
                                                        validationError={{
                                                            maxLength: 'O valor é muito longo, maxímo 100 caracteres.',
                                                        }}
                                                        required
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="basic-change" style={{ fontSize: 20 }}><b>Ecommerce Linked</b></Label>
                                                    <Input
                                                        type="text" id="basic-change"
                                                        name="basic-change"
                                                        trigger="change"
                                                        readOnly={this.readOnly} defaultValue={data.EcommerceLinkId}
                                                        validations={{ maxLength: 100 }}
                                                        validationError={{
                                                            maxLength: 'O valor é muito longo, maxímo 100 caracteres.',
                                                        }}
                                                        required
                                                    />
                                                </FormGroup>
                                            </Col>
                                              </Row>

                                              <Row form>

                                              <Col md={6}>
                                                <FormGroup>
                                                    <Label for="basic-change" style={{ fontSize: 20 }}><b>Video Url</b></Label>
                                                    <InputValidation
                                                        type="text" id="basic-change"
                                                        name="basic-change"
                                                        trigger="change"
                                                        validations={{ maxLength: 100 }}
                                                        validationError={{
                                                            maxLength: 'O valor é muito longo, maxímo 100 caracteres.',
                                                        }}
                                                        required
                                                    />
                                                </FormGroup>
                                            </Col>

                                            

                                              </Row>
                                          

                                    </Formsy.Form>
                                </Widget>

                            </Col>

                        </Row>

                        <Row >

<Col xs={0} lg={1} />
    <Col lg={8} xs={12}>

       
            <Formsy.Form>
                <Row form className="float-right">
                    
                <div  className="float-right">
    
    <Button  type="back" color="gray" className="mr-xs" >Voltar </Button>
    <Button  type="save" color="warning" className="mr-xs">Salvar</Button>
    </div>

                </Row>
                </Formsy.Form>
                
                </Col>

</Row>




                    </div>
                </div>
            </div>
        );
    }
}



Ecommerce.propTypes = {
    data: PropTypes.any.isRequired,
};



export default Ecommerce;