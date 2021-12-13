import React from 'react';
import GenresInDb from './GenresInDb';
import './Home.css';
import LastProductInDb from './LastProductInDb';
import TableHome from './TableHome';

function ContentRowCenter() {
  return (
    <div className="row">
      <LastProductInDb/>
      <GenresInDb/>
    </div>
  );
}

export default ContentRowCenter;