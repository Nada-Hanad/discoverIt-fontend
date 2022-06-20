import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 600,
  overflow: 'scroll',
  bgcolor: 'background.paper',
  borderRadius: 2,
  outline: 'none',

  p: 4
};

export default function MediaCard({ first, images, name, description, id }) {
  const [open, setOpen] = React.useState(false);
  const [events, setevents] = React.useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  React.useEffect(() => {
    axios
      .get('http://localhost:3000/eventsById', {
        location: id
      })
      .then((res) => {
        setevents(res.data);
      });
  }, []);
  return (
    <div
      className='card-location'
      style={{
        background:
          'linear-gradient(rgba(0, 0, 0, 0.75), rgba(255, 255, 255, 0.2)), url(' +
          first +
          ') no-repeat center center'
      }}
    >
      <h3>{name}</h3>
      <div onClick={handleOpen} className='button'>
        <p>Lire plus</p>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography
            id='modal-modal-title'
            sx={{ fontFamily: 'MontserratExtraBold', fontSize: 30 }}
            variant='h6'
            component='h2'
          >
            {name}
          </Typography>
          <Typography
            id='modal-modal-description'
            sx={{ mt: 2, fontFamily: 'MontserratRegular', fontSize: 18 }}
          >
            {description}
          </Typography>
          <div className='images-grid'>
            {images.map((e) => (
              <img className='displayer-image' src={e} alt={name} />
            ))}
          </div>
          <Typography
            id='modal-modal-description'
            sx={{ mt: 2, fontFamily: 'MontserratBold', fontSize: 20 }}
          >
            Événements à venir
          </Typography>
          {events.length === 0 ? (
            <p>Pas d'evènement pour ce lieux</p>
          ) : (
            events.map((e) => (
              <div className='images-grid'>
                <div
                  className='card-location'
                  style={{
                    height: '150px',
                    width: '100px',
                    background:
                      'linear-gradient(rgba(0, 0, 0, 0.75), rgba(255, 255, 255, 0.2)), url(' +
                      e.media[0] +
                      ') no-repeat center center'
                  }}
                >
                  <h3 style={{ fontSize: 18 }}>{e.name}</h3>
                </div>
              </div>
            ))
          )}
          <div className='images-grid'></div>
        </Box>
      </Modal>
    </div>
  );
}
