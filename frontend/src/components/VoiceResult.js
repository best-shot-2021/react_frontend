import React, { Component} from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import styles from '../index.css'

const cookies = new Cookies();


class VoiceResult extends Component{
    constructor(props){
        super(props);
    }
    
    state = {
        voiceEmo: cookies.get('voice_emo'),
        voiceMood: cookies.get('voice_mood'),
    };

    componentWillMount() {
        let sendResult = {
            face: cookies.get('face'),    
            voice: cookies.get('voice'),
        }
        axios
        .post('http://192.249.18.213:80/mood_finder', JSON.stringify(sendResult), {
          headers: {
            "Content-Type": `application/json`,
          },
        })
        .then((res) => {
          console.log(res);
          var result = res['data'].toString();
          cookies.set('final_result', result, {path: '/'});
          console.log("final_result cookie:   " + cookies.get('final_result'));
        });

    }

    render() {
        // if(this.state.voiceEmo===null || this.state.voiceEmo===undefined){
        //     console.log("cookie error");
        //     this.setState({
        //         voiceEmo: cookies.get('voice_emo'),
        //         voiceMood: cookies.get('voice_mood'),
        //     })
        // }  
        
        return (
            <div style={{ width: '100%' }}>
                <p></p>
                <p>{this.state.voiceEmo}</p>
                <div>
                    <b>{this.state.voiceMood}</b>이구나!
                </div>
                <p></p>
            </div>
        );
    }
}
export default VoiceResult;
