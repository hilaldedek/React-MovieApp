import React from 'react'

const MainCards = ({item}) => {
  console.log(item);
  <div className='flex-wrap'>

  
    {item?.map(({...item},index)=>{
      console.log(item?.titleText?.text);
      return (
          <div className='text-black' key={index}>
              <p>{item?.titleText?.text}</p>
          </div>
  )
    })}
  </div>
  
}

export default MainCards