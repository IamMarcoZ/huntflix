import React, { useState } from 'react'
import type { FilmT } from '../types/globalTypes'
import { Grid } from '@mui/material';
import LearnMoreModal from './LearnMoreModal';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomCard from './CustomCard';

const settings = {
  dots: true,
  infinite: false,
  initialSlide: 0,
  slidesToShow: 4,
  slidesToScroll: 4,
  speed: 1000,
  responsive: [
    {
      breakpoint: 1600, // fino a 1600px
      settings: { slidesToShow: 3, slidesToScroll: 3 }
    },
    {
      breakpoint: 1280, // fino a 1280px
      settings: { slidesToShow: 3, slidesToScroll: 3 }
    },
    {
      breakpoint: 1024, // fino a 1024px
      settings: { slidesToShow: 2, slidesToScroll: 2 }
    },
    {
      breakpoint: 600, // fino a 600px
      settings: { slidesToShow: 1, slidesToScroll: 1, dots: false }
    }
  ]
};

type Props = {
  films: FilmT[],
  language?: string
}

const FilmList = ({ films,language }: Props) => {
  const [selectedFilm, setSelectedFilm] = useState({})
  const [openModal, setOpenModal] = useState(false);

  function shortOverview(overview: string | undefined): string | undefined {
    if (overview && overview.length > 50) {
      overview = overview.substring(0, 100) + '...';
    }
    return overview || undefined;
  }

  function learnMore(film: FilmT) {
    setSelectedFilm(film);
    setOpenModal(true);
  }

  function closeModal() {
    setOpenModal(false);
  }

  if (films?.length == 0) {
    return null;
  }
  return (
    <Grid container>
      <LearnMoreModal selectedFilm={selectedFilm} language={language} open={openModal} close={closeModal} />
      <div className='slider-container' style={{ width: '90%', margin: '0 auto'}}>
        <Slider {...settings} >

          {films?.map((film, index) => {
            return (
              <CustomCard key={index} film={film} index={index} learnMore={learnMore} shortOverview={shortOverview} />
            )
          })}
        </Slider>
      </div>
    </Grid>
  )
}

export default FilmList