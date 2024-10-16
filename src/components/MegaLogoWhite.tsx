import React from 'react';

interface MegaLogoProps {
  width?: number;
  height?: number;
}

const MegaLogoWhite = ({ width = 48, height = 48 }: MegaLogoProps) => {
  return (
    <svg
      version='1.1'
      viewBox='0 0 1448 2048'
      width={width}
      height={height}
      xmlns='http://www.w3.org/2000/svg'
      className='scale-150'
    >
      <path
        transform='translate(513,542)'
        d='m0 0h15l14 2 16 5 14 7 14 10 12 11 85 85 7 8 13 15 3 3 5-2 34-34 7-8 20-20 7-8 47-47 15-11 14-7 15-5 9-2 9-1h16l19 3 15 5 15 8 11 9 11 11 9 14 7 15 5 17 2 13 1 221v166l-3 12-6 11-9 10-9 6-8 3h-17l-12-5-9-7-6-8-5-12-2-11v-111l1-209 1-35v-17l-4-8-6-5-10-1-10 4-18 13-14 11-13 12-9 11-13 16-11 14-11 13-11 14-13 15-9 10-9 11-13 14-11 14-16 21-21 28-16 21-13 18-11 19-12 25-7 21-2 11v23l4 17 8 18 9 13 11 11 10 6 12 4 6 1h11l16-4 16-8 11-8 12-11 10-13 8-15 2-8v-9l-3-12-5-9-12-12-11-9-7-7-5-11v-15l6-10 7-5 8-3 6-1h12l14 4 11 6 10 8 10 10 10 15 8 18 5 17 2 12v25l-4 20-7 19-9 17-11 16-9 10-6 7-14 11-13 8-16 7-14 4-21 3h-24l-21-3-15-4-18-8-14-9-14-12-12-13-9-13-10-17-7-16-6-20-3-22v-14l3-22 5-18 8-19 8-16 8-13 12-16 10-13 10-14 12-13 15-16 14-14 7-8 16-17 8-9 5-9v-5l-3-2h-7l-12 3h-16l-13-5-12-7-10-8-8-9-9-11-12-14-15-16-17-16-10-9-24-24-7-5-6-2-8 1-9 5-4 5-2 5-1 369-2 14-4 12-5 9-9 8-11 4h-14l-13-5-10-9-7-10-6-14-3-15-1-15v-350l2-21 4-16 7-17 9-15 11-13 14-11 16-8 17-5z'
        fill='#ffffff'
      />
      <path
        transform='translate(694,254)'
        d='m0 0h21l17 3 36 10 39 12 55 19 35 13 36 13 49 17 33 11 20 6 7 5 4 8 1 10v36l-1 1h-18l-6-2-2-6-1-18-39 12-47 15-13 4h-5l-6-14-9-13-9-9-20-15-21-12-19-8-25-8-34-8-29-5-17-2h-34l-31 4-29 6-27 8-27 11-23 11-17 10-13 13-11 14-8 12-5 4-73-19-20-5-13-5-9-6-6-7-1-2v-10l3-5 6-5 17-8 43-16 50-18 34-12 36-12 64-21 46-14z'
        fill='#ffffff'
      />
      <path
        transform='translate(688,367)'
        d='m0 0h46l28 3 26 5 24 7 17 7 19 10 13 10 8 8 8 13 3 11v11l-3 10-6 11-9 10-13 10-20 11-24 9-23 6-23 4-17 2-15 1h-30l-26-2-26-4-24-6-20-7-12-5-14-8-12-9-11-11-6-10-3-8-1-6v-8l4-13 6-10 9-10 12-9 14-8 20-9 23-7 24-5 21-3z'
        fill='#ffffff'
      />
      <path
        transform='translate(1030,1260)'
        d='m0 0h59l13 2 13 4 10 5 9 7 7 8 5 9 5 12 3 16 1 11v9l-2 18-5 16-7 13-11 12-11 7-11 5-13 3-10 1h-54l-9-3-5-5-2-6v-131l3-6 6-5z'
        fill='#ffffff'
      />
      <path
        transform='translate(146,1257)'
        d='m0 0h17l9 3 5 6 6 16 27 87 1 4 7-21 14-46 11-36 5-8 6-4 5-1h17l9 3 5 5 2 5v137l-3 8-5 4-5 2-9-1-5-3-3-3-2-6-1-98-10 30-18 57-6 17-7 6-10 1-7-3-4-4-6-16-22-69-6-19-1 96-3 9-5 4-6 2-9-1-7-6-2-5v-140l3-6 5-4z'
        fill='#ffffff'
      />
      <path
        transform='translate(545,1256)'
        d='m0 0h11l19 3 12 5 10 6 8 7 6 10 1 2v11l-4 6-4 3-3 1h-10l-5-3-14-15-8-4-4-1h-21l-11 4-9 7-6 9-4 10-2 8-1 9v13l2 14 5 12 6 8 7 6 9 4 11 2 13-1 10-4 8-6 4-5 4-9 2-6h-27l-8-3-4-5-1-9 3-7 7-4h54l5 3 4 6v69l-4 6-5 3-9-1-5-4-4-11v-4h-2l-2 4-8 7-14 7-9 2h-26l-17-4-16-8-12-11-9-14-5-13-3-14-1-8v-20l3-17 5-14 7-12 11-12 14-9 16-6 10-2z'
        fill='#ffffff'
      />
      <path
        transform='translate(702,1257)'
        d='m0 0h15l9 3 6 7 11 30 20 56 14 39 3 11-1 8-6 7-8 3-10-1-6-4-4-8-7-20v-3h-59l-2 9-7 19-4 5-7 3h-8l-7-3-5-6-1-2v-11l9-25 22-58 15-40 5-12 6-5z'
        fill='#ffffff'
      />
      <path
        transform='translate(341,1260)'
        d='m0 0h95l8 3 4 5 1 3v7l-3 6-5 4-3 1-76 1v32l66 1 8 4 3 6v8l-3 6-5 3-4 1-65 1v35l1 1h38l40 1 6 4 3 4 1 8-3 8-6 4-5 1h-96l-8-3-5-5-2-4-1-6v-123l3-9 5-5z'
        fill='#ffffff'
      />
      <path
        transform='translate(882,1260)'
        d='m0 0h94l9 3 4 6v11l-4 6-7 3h-76v34h66l7 3 4 5 1 8-3 7-5 4-4 1h-66l1 37h50l28 1 6 3 4 6v10l-4 6-5 3-5 1h-96l-9-4-4-5-2-5v-130l4-8 5-4z'
        fill='#ffffff'
      />
      <path
        transform='translate(1196,1257)'
        d='m0 0 10 1 6 4 4 7 1 5v80l1 17 4 9 5 6 8 4 4 1h20l10-4 7-6 4-10 1-96 2-9 4-5 5-3 10-1 9 3 5 6 2 9-1 97-3 13-6 12-10 11-14 8-15 4-18 2-17-1-17-4-14-7-9-8-6-9-5-12-2-9-1-13v-84l2-9 4-5 5-3z'
        fill='#ffffff'
      />
      <path
        transform='translate(1051,1289)'
        d='m0 0h33l11 2 10 6 6 7 5 12 2 10v25l-3 13-6 12-9 8-10 4-7 1h-32l-1-9v-81z'
        fill='#00000099'
      />
      <path
        transform='translate(1014,496)'
        d='m0 0 31 1 9 2 6 5 4 10 5 22v13l-4 6-5 3h-6l-5-5-6-18-6-24-2-6-2 1-3 13-4 23-4 10-4 3h-6l-5-4-2-5v-16l3-20 4-13z'
        fill='#ffffff'
      />
      <path
        transform='translate(1026,430)'
        d='m0 0h9l10 3 9 6 4 5 2 4v11l-4 8-4 5-10 5-4 1h-9l-11-4-8-8-3-6-1-9 2-8 4-6 5-4z'
        fill='#ffffff'
      />
      <path transform='translate(708,1297)' d='m0 0 2 1 16 49 3 9v3h-41l3-11 15-44z' fill='#00000099' />
    </svg>
  );
};

export default MegaLogoWhite;
