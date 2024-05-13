import Avatars from 'components/Avatars/Avatars';
import { avatarsOther } from 'data/avatars/other';
import React from 'react';

const OtherAvatarsPage = () => {
  return (
    <>
      <Avatars avatars={avatarsOther} />
    </>
  );
};

export default OtherAvatarsPage;
