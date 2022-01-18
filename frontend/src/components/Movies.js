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
import ModalOpening from "../components/ModalOpening"
import "./Component.css";

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
    background: '#00A0FE',
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


const Movies = (props) => {
const styles = useStyles();


  const shadowStyles = useOverShadowStyles();

  const {movies} = props;
   return (
     <div>
     {
      <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={styles.media}
        image={
          'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb4OUxA%2Fbtrq4wZGuG0%2FiAZS3xCZQFghABnrco5511%2Fimg.jpg'
        }
      />
      <CardContent>
        <Typography mr={13} gutterBottom variant="h5" component="div">
            Test
          </Typography>
          <Typography pb={3} variant="body2" color="text.secondary">
            hi (yes)
          </Typography>
        <ModalOpening name="sanakang"/>
      </CardContent>
    </Card>
     }
     </div>
   )
}

export default Movies;