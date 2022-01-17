import React, { Component,  useEffect,  useState } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import '../index.css';
import chatbotimage from '../assets/images/chatbot.png';
import FaceImageSend from './FaceImageSend';
import VoiceSend from './VoiceSend';
import {theme, avatarStyle} from '../styles/theme'
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import imgA from '../assets/images/button.png';
import AudioRecord from './AudioRecord';
import Cookies from 'universal-cookie';
import FaceResult from './FaceResult';
import VocieResult from './VoiceResult';

const cookies = new Cookies();

var img_cookie = String(cookies.get('img'));

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
        <h3>분석노트</h3>
        <table>
          <tbody>
            <tr>
              <td>이름 : </td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>성별 : </td>
              <td>{gender.value}</td>
            </tr>
            <tr>
              <td>나이 : </td>
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

class ResultButton extends Component{
  render(){
    return (
      <div>
        <img src={imgA} style={{width:240}}></img>
      </div>
    );
  }
}


// class ChatForm extends Component {

const ChatForm = () => {   
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          botAvatar={chatbotimage}
          placeholder=""
          hideUserAvatar="True"
          enableSmoothScroll="True"
          customDelay= "50"
          headerTitle="명탐정 세포"
          avatarStyle={avatarStyle}
          style={{}}
          
        
          steps={[
            {
              id: '0',
              message: '안녕 나는 명탐정 세포!!',
              trigger: '10',
            },
            {
              id: '18',
              message: '너의 분위기를 분석해서 최고의 포토스팟을 찾아주고 있지',
              trigger: '1',
            },
            {
              id: '1',
              message: '이름이 뭐야?',
              trigger: 'name',
              
            },
            {
              id: 'name',
              user: true,
              trigger: '3',
              placeholder:"이름을 입력해주세요"
            },
            {
              id: '3',
              message: '안녕 {previousValue}! 세포마을에 온 걸 환영해! 성별은?',
              trigger: 'gender',
            },
            {
              id: 'gender',
              options: [
                { value: '남자', label: '남자', trigger: '5' },
                { value: '여자', label: '여자', trigger: '5' },
              ]
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
              placeholder:"나이를 입력해주세요",
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
              message: '좋았어! 이제 너의 얼굴을 보여주면 최고의 포토스팟을 찾아보지!',
              trigger: '10',
            },
            {
              id: '10',
              component:<FaceImageSend />,
              trigger: '19',
            },
            {
              id: '19',
              message: '이미지를 업로드하고 보내기 버튼을 눌러봐',
              trigger: 'send',
            },
            {
              id: 'send',
              user: true,
              trigger: '11',
              //placeholder:"이름을 입력해줘"
            },
            {
              id: '11',
              message: '얼굴형을 분석중이야',
              trigger: '12',
            },
            {
              id: '12',
              component: <FaceResult />,
              asMessage: true,
              // message: '너의 얼굴형은 '+ img_cookie + '이야',
              trigger: '13',
              delay: 1000
            },
            {
              id: '13',
              message: '이제 목소리를 들려줘!',
              trigger: '14',
            },
            {
              id: '14',
              component:<AudioRecord />,
              trigger: '21',
            },
            {
              id: '21',
              message: '목소리를 업로드하고 보내기 버튼을 눌러봐',
              trigger: 'sendvoice',
            },
            {
              id: 'sendvoice',
              user: true,
              delay:2000,
              trigger: '15',
              //placeholder:"이름을 입력해줘"
            },
            {
              id: '15',
              message: '목소리를 분석중이야',
              delay:2000,
              trigger: '24',
            },
            // {
            //   id: '24',
            //   message: '너의 목소리는 '+voice+ ' 편인걸!',
            //   trigger: '16',
            // },
            {
              id: '24',
              component:<VocieResult />,
              asMessage: true,
              trigger: '16',
            },
            {
              id: '16',
              message: '너만을 위한 포토스팟 분석을 완료했다!',
              delay:5000,
              trigger: '22',
            },
            {
              id: '22',
              message: '이제 확인하러 가볼까?',
              trigger: '23',
            },
            {
              id: '23',
              component: <ResultButton/>,
              end: true,
            },
          ]}
        />
    </ThemeProvider>
    );
  }


export default ChatForm;