import React from 'react';
import GridMap from './HomeComp/SplashGrid'
import Map from './HomeComp/Map'
import Background from "./HomeComp/Background";

function Home() {
  return (
      <div>
        <Background></Background>
        <GridMap></GridMap>
        <Map></Map>
      </div>
  );
}

export default Home;