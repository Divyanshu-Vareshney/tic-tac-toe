import React from 'react'
// import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';

function Square(props) {
  return (
    <div 
    onClick={props.onClick}
    style={{
        border:"2px solid black",
        height:"100px",
        width:"100%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }}
    className='Square'>
       <p className='text'>{props.value}</p>
    </div>
  )
}

export default Square