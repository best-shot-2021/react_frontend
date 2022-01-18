import React, { Component} from 'react';
import Cookies from 'universal-cookie';
import styles from '../index.css'

const cookies = new Cookies();

class FaceResult extends Component{
    constructor(props){
        super(props);
    }
    state = {
        faceType: cookies.get('face_type'),
        faceMsg: cookies.get('face_msg'),
    };
    render() {
        // if(this.state.faceType===null || this.state.faceType===undefined){
        //     console.log("cookie error");
        // this.setState({
        //     faceType: cookies.get('face_type'),
        //     faceMsg: cookies.get('face_msg'),    
        // })
        // }
        return (
            <div style={{ width: '100%' }}>
                <p></p>
                <div>
                    너의 얼굴형은 <b>{this.state.faceType}</b>이야.
                </div>
                <p>{this.state.faceMsg}</p>
            </div>
        );
        // const { faceType, faceMsg } = this.state;
    }
}
export default FaceResult;
