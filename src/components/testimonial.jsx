import React from 'react';
import PropTypes from 'prop-types';

//Material components
import Grid from '@material-ui/core/Grid';

//Styles
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles((theme) => ({
  root: {
    height: '60%',
    width: 300,
    backgroundColor: '#C2CAF1',
    boxShadow: '0px 0px 13px 1px rgba(0,0,0,0.2)',
    borderRadius: 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    marginTop: 50,
    paddingBottom: 20,
    [theme.breakpoints.down('md')]: {
      minHeight: 280,
      width: 330
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: 260,
      width: 310
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: 240,
      width: 290
    }
  },
  avatarContainer: {
    height: 100,
    width: 100,
    position: 'absolute',
    top: -50,
    zIndex: 1,
    borderRadius: '100%',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      height: 90,
      width: 90,
      top: -45
    },
    [theme.breakpoints.down('md')]: {
      height: 80,
      width: 80,
      top: -40
    },
    [theme.breakpoints.down('xs')]: {
      height: 70,
      width: 70,
      top: -35
    }
  },
  avatar: {
    width: '95%',
    height: '95%',
    backgroundColor: '#4763E6',
    borderRadius: '100%',
    display: 'grid',
    placeItems: 'center',
    '& > p': {
      margin: 0,
      fontFamily: 'MontserratExtraBold',
      fontSize: '3.5rem',
      fontWeight: 700,
      color: 'white',
      [theme.breakpoints.down('md')]: {
        fontSize: '3rem'
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '2.5rem'
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '2rem'
      }
    }
  },
  body: {
    marginTop: 80,
    flex: 1,
    fontFamily: 'MontserratRegular',
    textAlign: 'center',
    '& > p': {
      '&:before': {
        content: `"\\201C"`,
        fontSize: '2rem',
        color: 'black'
      },
      '&:after': {
        content: `"\\201D"`,
        color: 'black',
        fontSize: '2rem',
        position: 'absolute'
      },
      margin: 0,
      lineHeight: '25px',
      [theme.breakpoints.down('sm')]: {
        lineHeight: '18px'
      }
    },
    [theme.breakpoints.down('md')]: {
      marginTop: 55,
      fontSize: '0.98rem'
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 45,
      fontSize: '0.94rem'
    }
  },
  author: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    margin: '15px 0px 10px 0px',
    '& h3': {
      margin: 0,
      color: 'black',
      fontFamily: 'MontserratRegular',
      fontSize: '1.3rem',
      [theme.breakpoints.down('md')]: {
        fontSize: '1.2rem'
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.1rem'
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '1rem'
      }
    },
    '& p': {
      margin: 0,
      fontFamily: 'serif',
      fontStyle: 'italic',
      fontSize: '0.9rem',
      [theme.breakpoints.down('md')]: {
        fontSize: '0.89rem'
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.88rem'
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.87rem'
      }
    }
  }
}));

const TestimonialCard = (props) => {
  const classes = useStyle();
  return (
    <Grid item className={[classes.root, props.className]}>
      <Grid
        item
        className={[
          classes.avatarContainer,
          'testimonial-avatar-container'
        ].join(' ')}
      >
        {props.image ? (
          <img
            className={[classes.avatar, 'testimonial-avatar'].join(' ')}
            src={props.image}
            style={{
              objectFit: 'cover'
            }}
            alt='Avatar'
          />
        ) : (
          <div className={[classes.avatar, 'testimonial-avatar'].join(' ')}>
            <p> {props.name[0]} </p>
          </div>
        )}
      </Grid>
      <Grid
        item
        xs={11}
        className={[classes.body, 'testimonial-body'].join(' ')}
      >
        <p>{props.content}</p>
      </Grid>
      <Grid item className={[classes.author, 'testimonial-author'].join(' ')}>
        <Grid item>
          <h3> {props.name} </h3>
        </Grid>
        <Grid item>
          <p> {props.project} </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  content: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default TestimonialCard;
