import React, { Component} from 'react';
import axios from 'axios';
import styles from '../index.css'
import { faceImageSend } from '../styles/theme';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

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

        if(faceResult===0){
          var faceType = "각진형";
          var faceMsg = "매력적인 귀족턱을 가졌네!";
          var faceResult = (0).toString();
        }
        else if(faceResult===1){
          var faceType = "하트형";
          var faceMsg = "사랑스러운 하트형 얼굴이네!!";
          var faceResult = (1).toString();
        }
        else if(faceResult===2){
          var faceType = "계란형";
          var faceMsg = "이상적인 계란형 얼굴을 가졌네!";
          var faceResult = (2).toString();
        }

        cookies.set('face_type', faceType, {path: '/'});
        cookies.set('face_msg', faceMsg, {path: '/'});
        cookies.set('face', faceResult, {path: '/'});
        this.props.setFaceFunc(faceResult);
        console.log(faceResult);
        console.log(cookies.get('face_type'));
        console.log(cookies.get('face_msg'));
        console.log(cookies.get('face'));        
      }) 
    }
    render() {
      return (
            <div style={{ textAlign:'center'}}>
              <img src={this.state.image} style={{width:225}} />
              
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
