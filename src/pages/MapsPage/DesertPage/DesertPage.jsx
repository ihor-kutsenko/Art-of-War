import Gallery from 'components/Gallery/Gallery';
import { desertMaps } from 'data/maps/desert';
import React from 'react';

const DesertPage = () => {
  return (
    <>
      <Gallery images={desertMaps} />
    </>
  );
};

export default DesertPage;
