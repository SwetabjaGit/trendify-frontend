import React from 'react'
import styled from 'styled-components';
import main_image from '../Assets/homepageimages/home_image_1.jpg'
import main_image_2 from '../Assets/homepageimages/second_image.jpg'
import first_image from '../Assets/homepageimages/first_image.jpg'
import second_image from '../Assets/homepageimages/catbanner-01.jpg'
import third_image from '../Assets/homepageimages/catbanner-03.jpg'
import fourth_image from '../Assets/homepageimages/fourth_image.jpg'
import { Grid, Card, CardContent, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Hero.css";


const Hero = () =>{
  const mainImgTypoStyle = {
    fontSize:'2rem', 
    textTransform:'uppercase',
    fontWeight:'600',
    marginLeft:'-570px'
  }

  const smallImageCard = {
    height: '100%', 
    width:'90%', 
    position:'relative',
    backgroundSize:'cover',
    backgroundPosition:'center',
    display:'flex',
    alignItems:'center',
    padding: '20px' ,
    backgroundRepeat:'no-repeat',
    boxShadow:'none'
  }

  const smallImageStyle = {
    textTransform:'uppercase',
    fontSize:'1.125rem',
    fontWeight:'600'
  }

  const smallImageButtonStyle = {
    marginTop:'5px',
    background:'#000', 
    boxShadow:'none',
    height:'30px',
    fontSize:'12px',
    borderRadius:'25px',
    '&:hover': {
      background:'#000', 
      boxShadow:'none',
    }
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <Grid container spacing={2} sx={{ padding: '20px', display:'flex', justifyContent:'center'}}>
      {/* Special Sale - Left Side Large Grid */}
      <Grid item xs={12} md={4.86}>
        <Card sx={{
          height: '100%',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          padding: '20px',
          boxShadow: 'none',
        }}>
          <Slider {...settings} style={{marginTop:'-30px', height: '102%', width: '107%', marginLeft:'-20px'}}>
            <div style={{ height: '100%'}}>
              <img
                src={main_image}
                alt="Main Image"
                style={{
                  width: '20%',
                  height:'830%',
                  // objectFit: 'cover',
                  backgroundSize:'cover',
                  position:'absolute',
                  top:'0',
                  marginLeft:'-17px',
                  marginRight:'-6px',
                }}
              />
            </div>
            <div style={{ height: '100%'}}>
              <img
                src={main_image_2}
                alt="Main Image 2"
                style={{
                  width:'20%',
                  height:'833%',
                  // objectFit: 'cover',
                  backgroundSize:'cover',
                  position:'absolute',
                  top:'0',
                  marginLeft:'-26px',
                }}
              />
            </div>
          </Slider>

          <CardContent sx={{ zIndex: 2, marginTop: '-150px'}}>
            <Typography sx={mainImgTypoStyle}>
              new
            </Typography>
            <Typography sx={mainImgTypoStyle}>
              collections
            </Typography>
            <Typography sx={mainImgTypoStyle}>
              for everyone
            </Typography>
            <Typography sx={{ textTransform: 'uppercase', fontSize: '1.56rem', marginTop: '10px', fontWeight: '500', marginLeft:'-570px' }}>
              Min 30% sale
            </Typography>
            <Button
              variant='contained'
              sx={{
                marginLeft:'-570px',
                marginTop: '20px',
                background: '#000',
                color: '#fff',
                borderRadius: '20px',
                boxShadow: 'none',
                '&:hover': {
                  background: '#000',
                  color: '#fff',
                  borderRadius: '20px',
                  boxShadow: 'none',
                }
              }}
            >
              Buy Now
            </Button>
          </CardContent>
        </Card>
      </Grid>


      {/* Right Side - Smaller Grid Sections */}
      <Grid container item xs={12} md={6} spacing={2}>
        {/* First Row */}
        <Grid container item xs={12} md={6} sx={{marginBottom:'40px'}}>
          <Card sx={{...smallImageCard, backgroundImage: `url(${first_image})`}}>
            <CardContent sx={{zIndex:2, marginTop:'-100px', marginLeft:'-20px'}}>
              <Typography sx={smallImageStyle}>
                Festive season
              </Typography>
              <Typography sx={{...smallImageStyle, marginTop:'-1px'}}>
                Collection
              </Typography>
              <Typography sx={{...smallImageStyle, marginTop:'5px', fontWeight:'500'}}>
                under Rs. 999
              </Typography>
              <Link to='/mens'>
                <Button
                  variant='contained'
                  sx={smallImageButtonStyle}
                >
                  Buy Now
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid container item xs={12} md={6} sx={{marginBottom:'40px'}}>
          <Card sx={{...smallImageCard, backgroundImage: `url(${second_image})`}}>
            <CardContent sx={{zIndex:2, marginTop:'-100px', marginLeft:'-20px'}}>
              <Typography sx={smallImageStyle}>
                Latest
              </Typography>
              <Typography sx={{...smallImageStyle, marginTop:'-1px'}}>
                Collections
              </Typography>
              <Typography sx={{...smallImageStyle, marginTop:'5px', fontWeight:'500'}}>
                under Rs. 599
              </Typography>
              <Link to='/womens'>
                <Button
                  variant='contained'
                  sx={smallImageButtonStyle}
                >
                  Buy Now
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>

        {/* Second Row */}
        <Grid container item xs={12} md={6}>
          <Card sx={{...smallImageCard, backgroundImage: `url(${third_image})`}}>
            <CardContent sx={{zIndex:2, marginTop:'-100px', marginLeft:'-20px'}}>
              <Typography sx={smallImageStyle}>
                Men's 
              </Typography>
              <Typography sx={{...smallImageStyle, marginTop:'-1px'}}>
                T-shirts
              </Typography>
              <Typography sx={{...smallImageStyle, marginTop:'5px', fontWeight:'500'}}>
                under Rs. 999
              </Typography>
              <Link to='/mens'>
                <Button
                  variant='contained'
                  sx={smallImageButtonStyle}
                >
                  Buy Now
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid container item xs={12} md={6} >
          <Card sx={{...smallImageCard, backgroundImage: `url(${fourth_image})`}}>
            <CardContent sx={{zIndex:2, marginTop:'-100px', marginLeft:'-20px'}}>
              <Typography sx={smallImageStyle}>
                Latest
              </Typography>
              <Typography sx={{...smallImageStyle, marginTop:'-1px'}}>
                Collections
              </Typography>
              <Typography sx={{...smallImageStyle, marginTop:'5px', fontWeight:'500'}}>
                under Rs. 599
              </Typography>
              <Link to='/kids'>
                <Button
                  variant='contained'
                  sx={smallImageButtonStyle}
                >
                  Buy Now
                </Button>
              </Link> 
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Hero