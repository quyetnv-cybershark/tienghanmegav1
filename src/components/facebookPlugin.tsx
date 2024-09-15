import Image from 'next/image';
import React from 'react';

const FacebookPlugin = () => {
  return (
    // <div
    //   className='trang-fb'
    //   data-href='https://www.facebook.com/profile.php?id=61561870386594&locale=vi_VN'
    //   data-tabs='dòng-thời-gian'
    //   data-width=''
    //   data-height=''
    //   data-small-header='true'
    //   data-adapt-container-width='true'
    //   data-hide-cover='false'
    //   data-show-facepile='true'
    // ></div>
    <Image
      alt=''
      src='/social-page/facebook.jpg'
      width={400}
      height={300}
      className='cursor-pointer rounded-lg'
    ></Image>
  );
};

export default FacebookPlugin;
