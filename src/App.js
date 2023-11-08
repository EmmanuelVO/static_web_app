import React from 'react';
import analyzeimage from './analyzeimage';

function App() {
  const title = 'Titulo chingon';
  
  return (

    <div>
      <h1>{title}</h1>
      <input type="text" />
      <button onClick={() => analyzeimage('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png')}>Analizar</button>
      <button>Generar</button>

      
    </div>
  );


}

export default App;
