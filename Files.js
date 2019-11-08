import React from 'react';

import axios, { post } from 'axios';
import {Button,Input} from "reactstrap";

class Files extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      file:null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }
  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
    })
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }
  fileUpload(file){
    const url = 'http://example.com/file-upload';
    const formData = new FormData();
    formData.append('file',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
       <br></br>
       <h3>Fazer Upload </h3>
        <Input type="file" onChange={this.onChange} style={{fontSize: 20}}/>
        <Button color="primary" className="width-100 mb-xs mr-xs">Upload</Button>
      </form>
   )
  }
}
export default Files;