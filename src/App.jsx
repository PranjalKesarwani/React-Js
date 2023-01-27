import React from "react";
import Card from './Components/Cards'
import './index.css';
import Sdata from './Sdata';

function App() {
  return (
    <React.StrictMode>
    <h1 className="heading_style">List of top 5 Netflix Series in 2023</h1>

    <div className="cards">

    {
      Sdata.map((currElem)=>{
    return    <Card 
    imgsrc={currElem.imgsrc} 
    sname={currElem.sname} 
    title={currElem.title}
    link={currElem.links}
    />
      })
    }
       {/* <Card 
    imgsrc={Sdata[0].imgsrc} 
    sname={Sdata[0].sname} 
    title={Sdata[0].title}
    link={Sdata[0].links}
    />
    <Card 
    imgsrc={Sdata[1].imgsrc} 
    sname={Sdata[1].sname}
    title={Sdata[1].title}
    link={Sdata[1].links} 
    />
    <Card 
    imgsrc={Sdata[2].imgsrc} 
    sname={Sdata[2].sname} 
    title={Sdata[2].title} */}
    {/* link={Sdata[2].links} 
    />
    <Card 
    imgsrc={Sdata[3].imgsrc} 
    sname={Sdata[3].sname} 
    title={Sdata[3].title}
    link={Sdata[3].links} 
    /> */}
    </div>
    </React.StrictMode>
  )
}

export default App;