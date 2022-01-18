// https://play-lh.googleusercontent.com/-nZBG493ds4aEZDKjquDlXjR4cMDu3KRP72tSpSiiIXPd3rGZOLocGfUWCnpsunWHaYd
// http://www.reelworldtheology.com/wp-content/uploads/2015/06/The-Empire-Strikes-Back-Art.jpg
import React from "react";
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import Typography from '@mui/material/Typography';
import ModalOpening from "./ModalOpening"
import "./Result.css";
import Cookies from 'universal-cookie';

const cookies = new Cookies();
var result = cookies.get('final_result');
console.log(result);
console.log(typeof(result));

var name = "";
var address = "";
var imgurl = "";
var mango="";

switch(result) {
  case "0":
    name = "랑골로(이탈리안)";
    mango="http://www.mangoplate.com/restaurants/T4szR6Xoe4";
    address="	대전광역시 유성구 엑스포로151번길 19";
    imgurl="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcCW34c%2Fbtrq22ziMAA%2FyzbnIJOqQ6uZwiwkL6ES20%2Fimg.jpg";
    break;
  case "1":
    name = "어화(이자카야)";
    mango="http://www.mangoplate.com/restaurants/KwNMtQdIxa";
    address="대전광역시 유성구 온천서로 55";
    imgurl="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbVHtoJ%2Fbtrq22ziMMb%2FqhCVkAbPxOdm8dY91zxJ70%2Fimg.jpg";
    break;
  case "2":
    name = "모루(브런치)";
    mango="http://www.mangoplate.com/restaurants/dwWsVUszIE";
    address="	대전광역시 서구 둔산남로9번길 33";
    imgurl="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdS5Vea%2Fbtrq4q0Wyaf%2FyAuj1cTnwLFmR67VOUEfQ1%2Fimg.jpg";
    break;
  case "3":
    name = "우디룸(카페)";
    mango="http://www.mangoplate.com/restaurants/-iUuwF93iCve";
    address="대전광역시 유성구 어은로48번길 19 1F";
    imgurl="";
    break;
  case "4":
    name = "치앙마이방콕(태국)";
    mango="http://www.mangoplate.com/restaurants/wX1NWg5qHmev";
    address="대전광역시 동구 철갑3길 8";
    imgurl="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcLb2wu%2Fbtrq6O7wAkC%2F5YPG1gDYG3rIJPm5JRWxJ0%2Fimg.jpg";
    break;
  case "5":
    name = "FAKE(카페)";
    mango="http://www.mangoplate.com/restaurants/8DNBDk5wu9Te";
    address="대전광역시 중구 중교로 30 승촌빌딩";
    imgurl="";
    break;
}



const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  button: {

  },
  root: {
    marginTop: 50,
    margin:'auto',
    borderRadius: spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    maxWidth: 550,
    marginLeft: 'auto',
    overflow: 'initial',
    // background: '#00A0FE',
    background: 'linear-gradient(#0098fe, #79ccfe)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: spacing(2),
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: spacing(2)
    },
  },
  media: {
    width: '88%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: '48%',
    borderRadius: spacing(2),
    border:'1px solid #CCCCCC',
    backgroundColor: '#fff',
    position: 'relative',
    [breakpoints.up('md')]: {
      maxWidth: 300,
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: 'translateX(-8px)',
    },
    '&:after': {
      content: '" "',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      // backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
      borderRadius: spacing(2), // 16
      opacity: 0.5,
    },
  }
}));


const Result1 = (props) => {
const styles = useStyles();

  const shadowStyles = useOverShadowStyles();

  const {movies} = props;
   return (
     <div className = "Card">
     {
      <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={styles.media}
        image={
          'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdS5Vea%2Fbtrq4q0Wyaf%2FyAuj1cTnwLFmR67VOUEfQ1%2Fimg.jpg'
        }
      />
      <CardContent>
        <div className = "rName">
          {name}
        </div>
        <div className = "rAddress" >
          {address}
        </div>
        <ModalOpening name="restaurantBtn"/>
      </CardContent>
    </Card>
     }
     </div>
   )
}

export default Result1;