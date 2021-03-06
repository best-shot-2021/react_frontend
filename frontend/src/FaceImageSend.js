import React, { Component} from 'react';
import axios from 'axios';

var faceResult=null;

class FaceImageSend extends Component {
    constructor(props) {
      super(props);
      this.state = {
        image: null,
        send_image: null
      };
  
      this.onImageChange = this.onImageChange.bind(this);
    }
  
    onImageChange = event => {
      if (event.target.files && event.target.files[0]) {
        let img = event.target.files[0];
        this.setState({
          image: URL.createObjectURL(img),
          send_image: img
        });
      }
    };
  
    onClick = async() => {
      const formData = new FormData();
      formData.append('img_file', this.state.send_image);
      axios.post('http://192.249.18.213:80/face_classifier', formData)
      .then((res)=>{
        console.log(res);
        faceResult = res['data'];
        console.log(faceResult);
      }) 
    }
    render() {
      return (
            <div style={{ textAlign:'center'}}>
              <img src={this.state.image} style={{width:225}} alt="img1" />
              
              <div style={{marginTop:10}}>
                <label className='select-file-button' for="select-file">이곳을 클릭해서 사진을 가져오세요</label>
                <input type="file" name="Image" id="select-file" onChange={this.onImageChange} style={{fontFamily:'GodoM', display:"none"}} />
                
                <div class="wrap">
                    <button class="button" onClick={this.onClick}>upload </button>
                </div>
              </div>
             
            </div>
      );
    }
  }
  export default FaceImageSend;