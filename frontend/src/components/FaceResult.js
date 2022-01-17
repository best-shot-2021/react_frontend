import React, { Component} from 'react';
import Cookies from 'universal-cookie';
import styles from '../index.css'

const cookies = new Cookies();

var faceType = cookies.get('face_type');
var faceMsg = cookies.get('face_msg');

class FaceResult extends Component{
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div style={{ width: '100%' }}>
                <p></p>
                <div>
                    너의 얼굴형은 <b>{faceType}</b>이야.
                </div>
                <p>{faceMsg}</p>
            </div>
        );
    }
}
export default FaceResult;
