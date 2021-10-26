import './Home.css';
import React, { useCallback, useState } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { IconButton } from '@mui/material';

const Home = () => {
  const [bgImage, setBgImage] = useState(1);
  const MAX = 4;
  const MIN = 1;
  const handleClickSliderNext = useCallback(() => {
    setBgImage(Math.min(MAX, bgImage + 1));
  }, [bgImage]);

  const handleClickSliderPrev = useCallback(() => {
    setBgImage(Math.max(MIN, bgImage - 1));
  }, [bgImage]);
  return (
    <div
      style={{ backgroundImage: `url(/assets/img/img-${bgImage}.jpg)` }}
      className="home"
    >
      <h1 className="home-header">Welcome to My Site😊</h1>
      <p className="home-p">I am Junior developer</p>
      <IconButton
        sx={{
          position: 'absolute',
          top: '50%',
          left: '1rem',
          fontSize: '4rem',
        }}
        onClick={handleClickSliderPrev}
        color="secondary"
        aria-label="add to shopping cart"
      >
        <MdNavigateBefore />
      </IconButton>
      <IconButton
        sx={{
          position: 'absolute',
          top: '50%',
          right: '1rem',
          fontSize: '4rem',
        }}
        onClick={handleClickSliderNext}
        color="primary"
        aria-label="add to shopping cart"
      >
        <MdNavigateNext color="action" sx={{ fontSize: '10rem' }} />
      </IconButton>
    </div>
  );
};

export default Home;
