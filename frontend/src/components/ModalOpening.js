import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  color: '#f9d71c ',
  bgcolor: '#000',
  border: '2px solid #fff',
  boxShadow: 24,
  p: 4,
};

export default function ModalOpening(props) {
  const {name} = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const mangoPlate = () => window.Open('http://www.mangoplate.com/restaurants/KwNMtQdIxa','_blank');
  const {
    button: buttonStyles
  } = useBlogTextInfoContentStyles();
  
  return (
    
    <div>
      <Button sx={{ mt: 2, color: '#fff' }} className={buttonStyles}>
        <a target="_blank" href="http://www.mangoplate.com/restaurants/KwNMtQdIxa">
          가게 정보 보기
        </a>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h2" component="h2" sx={{ color: '#43a5cf'}}>
            A long time ago in a galaxy far, far away...
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 5}}>
            {name}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}