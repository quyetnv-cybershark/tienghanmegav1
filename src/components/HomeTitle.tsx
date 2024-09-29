import React from 'react';

interface IHomeTitle {
  text: string;
}

const HomeTitle = ({ text }: IHomeTitle) => {
  return <div className='title uppercase text-3xl font-[800] text-primaryColor text-center w-full mb-10'>{text}</div>;
};

export default HomeTitle;
