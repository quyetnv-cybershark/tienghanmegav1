import { Carousel } from 'antd';
import React from 'react';

export const contentStyle: React.CSSProperties = {
  height: '75vh',
  color: '#fff',
  lineHeight: '75vh',
  textAlign: 'center',
  background: '#364d79',
  fontSize: '48px',
};

const Banner: React.FC = () => (
  <Carousel autoplay autoplaySpeed={2000}>
    <div>
      <div style={contentStyle}>1</div>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);

export default Banner;
