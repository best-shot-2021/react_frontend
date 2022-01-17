import React, { Component} from 'react';
import Cookies from 'universal-cookie';
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
    
    render() {
        if(this.state.voiceEmo===null || this.state.voiceEmo===undefined){
            console.log("cookie error");
            this.setState({
                voiceEmo: cookies.get('voice_emo'),
                voiceMood: cookies.get('voice_mood'),
            })
        }
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
