import Avatars from 'components/Avatars/Avatars';
import { avatarsResistance } from 'data/avatars/resistance';
import React from 'react';

const ResistAvatarsPage = () => {
  return (
    <>
      <Avatars avatars={avatarsResistance} />
    </>
  );
};

export default ResistAvatarsPage;
