import React from 'react'

const MainCards = ({item}) => {
    console.log(item);
  return (
    <div className='text-white'>
        {item.id}
        <br/>
    </div>
    
  )
}

export default MainCards