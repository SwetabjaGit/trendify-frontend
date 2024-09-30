import React from 'react'
import './NewCollections.css'
import new_collection from '../Assets/new_collections'
import Item from '../ProductCard/ProductCard'
import { Typography } from '@mui/material'

function NewCollections() {
  return (
    <div className='new-collections'>
      <Typography 
        sx={{
          marginTop:'-20px', 
          marginLeft:'88px',
          textTransform:'uppercase',
          fontSize:'20px',
          marginBottom:'-20px',
          fontWeight:'500',
          color:'#282c3f'
        }}
      >
        featured collection
      </Typography>
      <div className="collections">
        {new_collection.map((item, i)=>{
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default NewCollections