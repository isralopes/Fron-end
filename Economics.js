import React from 'react';
import { Input, Label, FormGroup, Col, Form, Row } from "reactstrap";

class Economics extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }


    render() {
        return (

            <div>
                <br></br>
                <Form >
                   
                    <FormGroup row>
                        <Label for="Produtos" sm={2} size="lg">(+) Produtos</Label>
                        <Col sm={1}>
                            <Input type="soma" name="soma" id="Produtos" bsSize="md" />
                        </Col>
                    </FormGroup>
                  
                    <FormGroup row>
                        <Label for="Frete" sm={2} size="lg">(+) Frete </Label>
                        <Col sm={1}>
                            <Input type="soma" name="soma" id="Frete" bsSize="md" />
                        </Col>
                    </FormGroup>
                    
                    <FormGroup row>
                        <Label for="Pedido" sm={2} size="lg">(=) Total Pedido</Label>
                        <Col sm={1}>
                            <Input type="soma" name="soma" id="Pedido" bsSize="md" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="Cpv" sm={2} size="lg">(-) Cpv </Label>
                        <Col sm={1}>
                            <Input type="soma" name="soma" id="Cpv" bsSize="md" />
                        </Col>
                       
                        <Col sm={1}>
                            <Input type="soma" name="soma" id="Cpv" bsSize="md" />
                        </Col>
                    </FormGroup>
                    
                    <FormGroup row>
                        <Label for="MargemBruta" sm={2} size="lg">(=) Margem Bruta</Label>
                        <Col sm={1}>
                            <Input type="soma" name="soma" id="MargemBruta" bsSize="md" />
                        </Col>
                        <Col sm={1}>
                            <Input type="soma" name="soma" id="Pedido" bsSize="md" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="Embalagem" sm={2} size="lg">(-) Embalagem</Label>
                        <Col sm={1}>
                            <Input type="soma" name="soma" id="Embalagem" bsSize="md" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="Frete" sm={2} size="lg">(-) Frete</Label>
                        <Col sm={1}>
                            <Input type="soma" name="soma" id="Frete" bsSize="md" />
                        </Col>
                        <Col sm={1}>
                            <Input type="soma" name="soma" id="Pedido" bsSize="md" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="MargemContrib" sm={2} size="lg">(=) Margem Contrib.</Label>
                        <Col sm={1}>
                            <Input type="soma" name= "soma" id="margemCntrib" bsSize="md" />
                        </Col>
                        <Col sm={1}>
                            <Input type="soma" name="soma" id="Pedido" bsSize="md" />
                        </Col>
                        <Col sm={1}>
                            <Input type="soma" name="soma" id="Pedido" bsSize="md" />
                        </Col>
                    </FormGroup>

                </Form>


            </div>

        );
    }
}

export default Economics;