import React from 'react';
import defaultImage from '../assets/icons/defaultImage.jpeg';

const MainCards = ({ item }) => {
  console.log(item);
  return (
    <div className='flex flex-wrap'>
      {item?.map((item, index) => {
        console.log(item?.titleText?.text);
        return (
          <div className='text-black justify-center items-center ' key={index}>
            <img src={item?.primaryImage?.url || defaultImage} className='w-2/12 h-2/12'/>
            <h2>{item?.titleText?.text}</h2>
            
          </div>
        );
      })}
    </div>
  );
};

export default MainCards;