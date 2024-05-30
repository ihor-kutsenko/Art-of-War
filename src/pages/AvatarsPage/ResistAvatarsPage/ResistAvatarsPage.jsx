import Gallery from 'components/Gallery/Gallery';
import { avatarsResistance } from 'data/avatars/resistance';
import React from 'react';

const ResistAvatarsPage = () => {
  return (
    <>
      <Gallery images={avatarsResistance} />
    </>
  );
};

export default ResistAvatarsPage;
