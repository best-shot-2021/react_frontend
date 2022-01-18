import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './Result.css';
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
 

  return (
    <div>
      <Button sx={{ mt: 2, color: '#fff' }} >
        <a  className="rs" target="_blank" href="http://www.mangoplate.com/restaurants/-iUuwF93iCve">
          가게 정보 보기
        </a>
      </Button>
    </div>
  );
}