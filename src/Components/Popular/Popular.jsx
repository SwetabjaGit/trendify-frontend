import React from 'react';
import './Popular.css';
import data_product from '../Assets/data';
import Item from '../ProductCard/ProductCard';
import { Typography } from '@mui/material';

const Popular = () =>{
  return (
    <div className='popular'>
      <Typography 
        sx={{
          marginTop:'50px', 
          marginLeft:'88px',
          textTransform:'uppercase',
          fontSize:'20px',
          marginBottom:'-20px',
          fontWeight:'500',
          color:'#282c3f'
        }}
      >
        our popular products
      </Typography>
      <div className="popular-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i} 
              id={item.id} 
              name={item.name} 
              image={item.image} 
              new_price={item.new_price} 
              old_price={item.old_price}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Popular