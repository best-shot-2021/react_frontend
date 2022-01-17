import React, { Component} from 'react';
import Cookies from 'universal-cookie';
import styles from '../index.css'

const cookies = new Cookies();

var vocieEmo = cookies.get('voice_emo');
var vocieMood = cookies.get('voice_mood');

class VocieResult extends Component{
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div style={{ width: '100%' }}>
                <p></p>
                <p>{vocieEmo}</p>
                <div>
                    <b>{vocieMood}</b>이구나!
                </div>
            </div>
        );
    }
}
export default VocieResult;
