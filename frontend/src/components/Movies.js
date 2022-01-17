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
    background: '#e5e5e5',
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
       movies.map((movie, idx)=> {
         let myDate = new Date(movie.release_date + 'T00:00');
         let year = myDate.getFullYear();
         
          return(
            <div key={movie.episode_id}>
      <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={styles.media}
        image={
          'https://wallpaperaccess.com/full/1602769.jpg'
        }
      />
      <CardContent>
        <Typography mr={13} gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>
          <Typography pb={3} variant="body2" color="text.secondary">
            {movie.director} ({
              myDate.toDateString().split(' ').slice(1, -1).join(' ').concat(', '+year)
              })
          </Typography>
        <ModalOpening name={movie.opening_crawl}/>
      </CardContent>
    </Card>
            </div>
          )
       })
     }
     </div>
   )
}

export default Movies;