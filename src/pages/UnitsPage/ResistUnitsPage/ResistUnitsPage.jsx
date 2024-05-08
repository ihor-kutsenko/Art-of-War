import Avatars from 'components/Avatars/Avatars';
import { avatarsConfederations } from 'data/avatars/confederation';
import React from 'react';

const ResistUnitsPage = () => {
  return (
    <div>
      ResistancePage
      <Avatars avatars={avatarsConfederations} />
    </div>
  );
};

export default ResistUnitsPage;
