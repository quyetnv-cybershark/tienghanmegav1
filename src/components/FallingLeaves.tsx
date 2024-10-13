'use client';
import Image from 'next/image';
import { useState } from 'react';

const FallingLeaves = () => {
  const randomNumber = () => Math.floor(Math.random() * (55 - 18 + 1)) + 18;

  const [sizes] = useState({
    size1: randomNumber(),
    size2: randomNumber(),
    size3: randomNumber(),
    size4: randomNumber(),
    size5: randomNumber(),
    size6: randomNumber(),
    size7: randomNumber(),
    size8: randomNumber(),
    size9: randomNumber(),
    size10: randomNumber(),
  });

  return (
    <div>
      <div className='snowflakes' aria-hidden='true'>
        {/* <div className='snowflake' style={{ fontSize: '30px' }}>
          <Image
            alt=''
            src='https://i.pinimg.com/originals/90/2c/2b/902c2bbccb72ca76cf3bbe95741174e9.png'
            height={sizes.size1}
            width={sizes.size1}
          />
        </div> */}
        <div className='snowflake'>
          <Image
            alt=''
            src='https://i.pinimg.com/originals/90/2c/2b/902c2bbccb72ca76cf3bbe95741174e9.png'
            height={sizes.size2}
            width={sizes.size2}
          />
        </div>
        <div className='snowflake' style={{ fontSize: '40px' }}>
          <Image
            alt=''
            src='https://i.pinimg.com/originals/90/2c/2b/902c2bbccb72ca76cf3bbe95741174e9.png'
            height={sizes.size3}
            width={sizes.size3}
          />
        </div>
        <div className='snowflake'>
          <Image
            alt=''
            src='https://i.pinimg.com/originals/90/2c/2b/902c2bbccb72ca76cf3bbe95741174e9.png'
            height={sizes.size4}
            width={sizes.size4}
          />
        </div>
        {/* <div className='snowflake' style={{ fontSize: '30px' }}>
          <Image
            alt=''
            src='https://i.pinimg.com/originals/90/2c/2b/902c2bbccb72ca76cf3bbe95741174e9.png'
            height={sizes.size5}
            width={sizes.size5}
          />
        </div> */}
        <div className='snowflake' style={{ fontSize: '22px' }}>
          <Image
            alt=''
            src='https://i.pinimg.com/originals/90/2c/2b/902c2bbccb72ca76cf3bbe95741174e9.png'
            height={sizes.size6}
            width={sizes.size6}
          />
        </div>
        <div className='snowflake' style={{ fontSize: '50px' }}>
          <Image
            alt=''
            src='https://i.pinimg.com/originals/90/2c/2b/902c2bbccb72ca76cf3bbe95741174e9.png'
            height={sizes.size7}
            width={sizes.size7}
          />
        </div>
        <div className='snowflake' style={{ fontSize: '20px' }}>
          <Image
            alt=''
            src='https://i.pinimg.com/originals/90/2c/2b/902c2bbccb72ca76cf3bbe95741174e9.png'
            height={sizes.size8}
            width={sizes.size8}
          />
        </div>
        <div className='snowflake' style={{ fontSize: '70px' }}>
          <Image
            alt=''
            src='https://i.pinimg.com/originals/90/2c/2b/902c2bbccb72ca76cf3bbe95741174e9.png'
            height={sizes.size9}
            width={sizes.size9}
          />
        </div>
        {/* <div className='snowflake' style={{ fontSize: '20px' }}>
          <Image
            alt=''
            src='https://i.pinimg.com/originals/90/2c/2b/902c2bbccb72ca76cf3bbe95741174e9.png'
            height={sizes.size10}
            width={sizes.size10}
          />
        </div> */}
      </div>
    </div>
  );
};

export default FallingLeaves;
