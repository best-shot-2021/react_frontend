import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import Cookies from 'universal-cookie';
import { toast, ToastContainer } from "react-toastify";

const cookies = new Cookies();

var temp = null;

const AudioRecord = (props) => {

  const [stream, setStream] = useState();
  const [media, setMedia] = useState();
  const [onRec, setOnRec] = useState(true);
  const [source, setSource] = useState();
  const [analyser, setAnalyser] = useState();
  const [audioUrl, setAudioUrl] = useState();

  const onRecAudio = () => {
    toast("녹음시작!");
    // 음원정보를 담은 노드를 생성하거나 음원을 실행또는 디코딩 시키는 일을 한다
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    // 자바스크립트를 통해 음원의 진행상태에 직접접근에 사용된다.
    const analyser = audioCtx.createScriptProcessor(0, 1, 1);
    setAnalyser(analyser);

    function makeSound(stream) {
      // 내 컴퓨터의 마이크나 다른 소스를 통해 발생한 오디오 스트림의 정보를 보여준다.
      const source = audioCtx.createMediaStreamSource(stream);
      setSource(source);
      source.connect(analyser);
      analyser.connect(audioCtx.destination);
    }
    // 마이크 사용 권한 획득
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      setStream(stream);
      setMedia(mediaRecorder);
      makeSound(stream);

      analyser.onaudioprocess = function (e) {
        // 3분(180초) 지나면 자동으로 음성 저장 및 녹음 중지
        if (e.playbackTime > 180) {
          stream.getAudioTracks().forEach(function (track) {
            track.stop();
          });
          mediaRecorder.stop();
          // 메서드가 호출 된 노드 연결 해제
          analyser.disconnect();
          audioCtx.createMediaStreamSource(stream).disconnect();

          mediaRecorder.ondataavailable = function (e) {
            setAudioUrl(e.data);
            setOnRec(true);
          };
        } else {
          setOnRec(false);
        }
      };
    });
  };

  // 사용자가 음성 녹음을 중지했을 때
  const offRecAudio = () => {
    toast("녹음완료!");
    // dataavailable 이벤트로 Blob 데이터에 대한 응답을 받을 수 있음
    media.ondataavailable = function (e) {
      setAudioUrl(e.data);
      setOnRec(true);
    };

    // 모든 트랙에서 stop()을 호출해 오디오 스트림을 정지
    stream.getAudioTracks().forEach(function (track) {
      track.stop();
    });

    // 미디어 캡처 중지
    media.stop();
    // 메서드가 호출 된 노드 연결 해제
    analyser.disconnect();
    source.disconnect();
  };

  const onSubmitAudioFile = useCallback(async() => {
    if (audioUrl) {
      console.log(URL.createObjectURL(audioUrl)); // 출력된 링크에서 녹음된 오디오 확인 가능
    }
    toast("녹음 파일 업로드중!");
    // File 생성자를 사용해 파일로 변환
    const sound = new File([audioUrl], "soundBlob", { lastModified: new Date().getTime(), type: "audio" });
    console.log(sound); // File 정보 출력

    const formData = new FormData();

    formData.append('voice_file', audioUrl);
    await axios.post('http://192.249.18.213:80/voice_analyzer', formData)
      .then((res)=>{
        console.log(res);
        temp = res['data'];
        console.log(typeof(temp)+ temp);

        if(temp===0){
          var voiceEmo = "지금 좀 흥분해있네";
          var voiceMood = "발랄한 성격";
          var voiceResult = (1).toString();
         }
         else if(temp===1){
          var voiceEmo = "너 지금 되게 침착하다";
          var voiceMood = "차분한 성격";
          var voiceResult = (0).toString();
         }
         else if(temp===2){
          var voiceEmo = "너 지금 좀 긴장해보이네";
          var voiceMood = "차분한 성격";
          var voiceResult = (0).toString();
         }
         else if(temp===3){
          var voiceEmo = "너 지금 엄청 행복해보이네~";
          var voiceMood = "발랄한 성격";
          var voiceResult = (1).toString();
         }
         else if(temp===4){
          var voiceEmo = "너 지금 생각에 잠겨있네";
          var voiceMood = "차분한 성격";
          var voiceResult = (0).toString();
         }

         cookies.set('voice_emo', voiceEmo, {path: '/'});
         cookies.set('voice_mood', voiceMood, {path: '/'});
         cookies.set('voice', voiceResult, {path: '/'});

         console.log(cookies.get('voice_emo'));
         console.log(cookies.get('voice_mood'));
         console.log(cookies.get('voice'));
      })

  }, [audioUrl]);

  return (
    <>
      <button onClick={onRec ? onRecAudio : offRecAudio} style={{fontFamily:'GodoM'}}>REC</button>
      <button onClick={onSubmitAudioFile}>결과 확인</button>
    </>
  );
}
export default AudioRecord;
