import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import '../index.css';
import background from '../assets/images/original.jpg';
import chatbotimage from '../assets/images/chatbot.png';
import axios from 'axios';
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';

// all available props
const theme = {
  background: '#00a0fe',
  fontFamily: 'GodoM',
  headerBgColor: '#79ccfe',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#ffd74b',
  botFontColor: '#000',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

var faceResult=null;

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      gender: '',
      age: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, gender, age } = steps;

    this.setState({ name, gender, age });
  }

  render() {
    const { name, gender, age } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>이름</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>성별</td>
              <td>{gender.value}</td>
            </tr>
            <tr>
              <td>나이</td>
              <td>{age.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

class InputBox extends Component{
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.state = {
      files: [],
    };
  }

  onChange(e) {
    var files = e.target.files;
    console.log(files);
    var filesArr = Array.prototype.slice.call(files);
    console.log(filesArr);
    this.setState({ files: [...this.state.files, ...filesArr] });
  }
  
  removeFile(f) {
       this.setState({ files: this.state.files.filter(x => x !== f) }); 
  }

  render() {
    return (
      <div>
        <label className="custom-file-upload">
          <input type="file" multiple onChange={this.onChange} />
          <i className="fa fa-cloud-upload" /> Attach
        </label>
        {this.state.files.map(x => 
           <div className="file-preview" onClick={this.removeFile.bind(this, x)}>{x.name}</div>
         )}
      </div>
    );
  }
}


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

  onClick = async() =>{
    const formData = new FormData();
    formData.append('img_file', this.state.send_image);
    axios.post('http://192.249.18.213:80/face_classifier', formData)
    // .then((res)=>JSON.stringify(res))
    .then((res)=>{
      console.log(res);
      faceResult = res['data'];
      console.log(faceResult);
    })  

  }
  render() {
    return (
      <div>
        <div>
          <div>
            <img src={this.state.image} />
            <h1>Select Image</h1>
            <input type="file" name="myImage" onChange={this.onImageChange} />
            <button onClick={this.onClick}>Upload </button>
          </div>
        </div>
      </div>
    );
  }
}


class InfoForm extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot id="chat"
          botAvatar={chatbotimage}
          placeholder=""
          hideUserAvatar="True"
          enableSmoothScroll="True"
          customDelay= "50"
          //avatarStyle={}
        
          steps={[
            {
              id: '1',
              message: '이름이 뭐야?',
              trigger: 'name',
              
            },
            {
              id: 'name',
              user: true,
              trigger: '3',
              placeholder:"이름을 입력해줘"
            },
            {
              id: '3',
              message: '안녕 {previousValue}! 세포마을에 온걸 환영해! 성별은?',
              trigger: 'gender',
            },
            {
              id: 'gender',
              options: [
                { value: '남자', label: '남자', trigger: '5' },
                { value: '여자', label: '여자', trigger: '5' },
              ],
            },
            {
              id: '5',
              message: '나이는?',
              trigger: 'age',
            },
            {
              id: 'age',
              user: true,
              trigger: '7',
              placeholder:"나이를 입력해줘",
              validator: (value) => {
                if (isNaN(value)) {
                  return 'value must be a number';
                } else if (value < 0) {
                  return 'value must be positive';
                } else if (value > 120) {
                  return `${value}? Come on!`;
                }

                return true;
              },
            },
            {
              id: '7',
              message: '좋아!',
              trigger: '8',
            },
            {
              id: '8',
              message: '너의 정보를 확인해줄래?',
              trigger: 'review',
            },
            {
              id: 'review',
              component: <Review />,
              asMessage: true,
              trigger: 'update',
            },
            {
              id: 'update',
              message: '정보가 맞아?',
              trigger: 'update-question',
            },
            {
              id: 'update-question',
              options: [
                { value: '응 맞아!', label: '응 맞아!', trigger: '9' },
                { value: '아니 고쳐줄래?', label: '아니 고쳐줄래?', trigger: 'update-yes' },
              ],
            },
            {
              id: 'update-yes',
              message: '무슨 정보를 고쳐줄까?',
              trigger: 'update-fields',
            },
            {
              id: 'update-fields',
              options: [
                { value: '이름', label: '이름', trigger: 'update-name'},
                { value: '성별', label: '성별', trigger: 'update-gender'},
                { value: '나이', label: '나이', trigger: 'update-age' },
              ],
            },
            {
              id: 'update-name',
              update: 'name',
              trigger: '8',
            },
            {
              id: 'update-gender',
              update: 'gender',
              trigger: '8',
            },
            {
              id: 'update-age',
              update: 'age',
              trigger: '8',
            },
            {
              id: '9',
              message: '좋았어! 이제 너의 얼굴을 보여주면 최고의 포토스팟을 찾아볼께!',
              trigger: '10',
            },
            {
                id: '10',
                component:<FaceImageSend/>,
                trigger: 'end-message',
            },
            {
              id: 'end-message',
              message: 'hi',
              end: true,
            },
          ]}
        />
    </ThemeProvider>
    );
  }
}

export default InfoForm;