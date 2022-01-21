import React, { Component } from "react";
import axios from "axios";
import { Avatar, Button, Chip } from "@material-ui/core";

export default class MultipleImageUploadComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      types: [],
      imagesPreviewUrls: [],
      names: [],
      fileInfo: [],
      allFiles: []
    };
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete = (name) => {
    const newState = [...this.state.names].filter((data) => !(data === name));
    this.setState({ names: newState });
  };

  handleSubmit(e) {
    //Sumbit handler
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", this.state.allFiles);

    axios
      .post("https://jsonplaceholder.typicode.com/users", this.state.allFiles)
      .then((response) => {
        console.log(response.data);
      });
  }

  handleImageChange(e) {
    e.preventDefault();
    let files = Array.from(e.target.files);
    let file1 = e.target.files[0];
    console.log(files.length);
    if (file1.size > 10e6) {
      alert("Big size");
    } else if (files.length > 4) {
      alert("More");
    } else {
      files.forEach((file) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          let base64 = reader.result.search(",");
          let base = reader.result.slice(base64 + 1);
          this.state.fileInfo = {
            name: file.name,
            type: file.type,
            value: base
          };
          this.state.allFiles.push(this.state.fileInfo);
          // console.log(this.state.fileInfo)
          this.setState({
            files: [...this.state.files, file],
            names: [...this.state.names, file.name],
            imagesPreviewUrls: [...this.state.imagesPreviewUrls, reader.result]
          });
        };
      });
    }
  }

  render() {
    return (
      <div>
        <div class="upload-btn-wrapper">
          <input type="file" name="myfile" onChange={this.handleImageChange} />
        </div>
        {this.state.names.map((name) => {
          return (
            <Chip   color="primary" style={{marginTop:7}}
              avatar={
                <Avatar
                  alt="pre"
                  src={this.state.imagesPreviewUrls.map((imagePreviewUrl) => {
                    return <img alt="previewImg" src={imagePreviewUrl}/>;
                  })}
               />
              }
              label={name}
              onDelete={() => this.handleDelete(name)}
            />
          );
        })}
      </div>
    );
  }
}
