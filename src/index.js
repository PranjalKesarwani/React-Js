import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

let currTime = new Date(1995, 11, 17, 7, 24, 0);
//  let currTime = currGMT.getHours();

const style = {
  color:"red",
  alignItems:'center',
  margin: '0',
  position: 'absolute',
  top:'50%'
}

let wish = '';
if(currTime>=6 && currTime<12){
  wish = 'Morning';
}
else if(currTime>=12 && currTime<5){
 wish = 'Afternoon'
}
else if(currTime>=5 && currTime<7){
  wish = "Evening"
}
else{
  wish = 'Night'
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <div >
        <h1 style={style}>Hello geniuses! Good {wish} </h1>
       </div>
  </React.StrictMode>
);




reportWebVitals();
