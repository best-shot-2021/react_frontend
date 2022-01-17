import React, { Component} from 'react';
import axios from 'axios';

var voiceResult=null;

class VoiceSend extends Component {
    constructor(props) {
      super(props);
      this.state = {
        voice: null,
        send_voice: null
      };
  
      this.onVoiceChange = this.onVoiceChange.bind(this);
    }
  
    onVoiceChange = event => {
      if (event.target.files && event.target.files[0]) {
        let voice = event.target.files[0];
        let send_voice = null;
        
        this.setState({
          voice: URL.createObjectURL(voice),
          send_voice: voice
        });
        console.log(voice);
        console.log(send_voice);
      }
    };
  
    onClick = async() => {
      const formData = new FormData();
      formData.append('voice_file', this.state.send_voice);
      axios.post('http://192.249.18.213:80/voice_analyzer', formData)
      .then((res)=>{
        console.log(res);
        voiceResult = res['data'];
        console.log(voiceResult);
      }) 
    }
    render() {
      return (
            <div>
              {/* <label className='select-file-button' for="select-file">파일 선택</label> */}
              <input type="file" name="voice" id="select-file" onChange={this.onVoiceChange}/>
              
              <button onClick={this.onClick}> 업로드 </button>
            </div>
      );
    }
  }
  export default VoiceSend;