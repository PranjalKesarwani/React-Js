import React from "react";
import Card from './Components/Cards'
import './index.css';
import Sdata from './Sdata';


const favSeries = "Netflix";
const FavS = () => {

  // if (favSeries === "Netflix") {
  //   return (
  //     <Card
  //       key={Sdata[0].id}
  //       imgsrc={Sdata[0].imgsrc}
  //       sname={Sdata[0].sname}
  //       title={Sdata[0].title}
  //       link={Sdata[0].links}
  //     />
  //   )

  // } 
  // else {
  //   return (
  //     <Card
  //       key={Sdata[4].id}
  //       imgsrc={Sdata[4].imgsrc}
  //       sname={Sdata[4].sname}
  //       title={Sdata[4].title}
  //       link={Sdata[4].links}
  //     />
  //   )

  // }
 return (favSeries==='Netflix' ?  <Card
  key={Sdata[0].id}
  imgsrc={Sdata[0].imgsrc}
  sname={Sdata[0].sname}
  title={Sdata[0].title}
  link={Sdata[0].links}
/>:  <Card
        key={Sdata[4].id}
        imgsrc={Sdata[4].imgsrc}
        sname={Sdata[4].sname}
        title={Sdata[4].title}
        link={Sdata[4].links}
      />)
}

function App() {
  return (
    <React.StrictMode>
      <h1 className="heading_style">List of top 5 Netflix Series in 2023</h1>

      <div className="cards">

        {/* {
          Sdata.map((currElem) => {  //iss call back function ko iss component ke bahar bhi likh sakte the alag se aur zada structured ho jata
            return <Card
              key={currElem.id}
              imgsrc={currElem.imgsrc}
              sname={currElem.sname}
              title={currElem.title}
              link={currElem.links}
            />
          })
        } */}

        <FavS />

      </div>
    </React.StrictMode>
  )
}

export default App;