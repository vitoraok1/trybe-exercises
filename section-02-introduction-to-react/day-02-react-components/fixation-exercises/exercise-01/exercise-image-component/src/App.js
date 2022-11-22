import React from 'react';
import Image from './Image';

function App() {
  const URL = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'
  return (
    <section>
      <Image source={ URL } alternativeText="Cute cat staring"/>
    </section>
  );
}

export default App;
