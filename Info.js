import React from 'react';
import{CardBody,Card,Button,Label,Input,FormGroup} from "reactstrap";


const Info = () => (
<div>

<Card className="mb-xlg border-0">
          <CardBody>
           
            <FormGroup>
        <Label for="exampleText">Obs:</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
            
            <Button className="btn-rounded-f" color="success">Escreva sua Observação</Button>
          </CardBody>
        </Card>
</div>

);

export default Info;