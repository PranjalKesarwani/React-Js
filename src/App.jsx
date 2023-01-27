import React from "react";
import { useState } from "react";
// import Card from './Components/Cards'
import './index.css';
// import Sdata from './Components/Sdata';


let currTime = new Date().toLocaleTimeString()
const App = () => {
  let [time, setTime] = useState(currTime);

  const updateTime = ()=>{
    currTime = new Date().toLocaleTimeString();
    setTime(currTime)
  }

  setInterval(updateTime,1000);

  return (
    <React.StrictMode>
      <div className="container">

        <h1> {time} </h1>
        <button onClick={updateTime} className="btn" >Click me</button>
      </div>

    </React.StrictMode>
  )
}






























































































// const SlotM = (props) => {
//   // let x = props.x;
//   // let y =props.y;
//   // let z = props.z; with the help of object destructring we can short it

//   let {x,y,z} = props;

//   if (x === y && y === z) {
//     return (
//       <div className="slot_inner">
//         <h1> {x} {y} {z}</h1>
//         <h1>This is matching</h1>
//         <hr />
//       </div>
//     )
//   } else {
//     return (
//       <div className="slot_inner">
//         <h1> {x} {y} {z}</h1>
//         <h1>This is not matching</h1>
//         <hr />
//       </div>
//     )
//   }
// }

// const App = () => {
//   return (
//     <React.StrictMode>

//       <h1 className="heading_style"> 🎰 Welcome to <span style={{ backgroundColor: 'white' }}>Slot machine game</span> 🎰</h1>
//       <div className="container">

//         <SlotM x='😄' y='😄' z='😄' />
//         <SlotM x='😄' y='😢' z='🤦‍♂️' />
//         <SlotM x='😄' y='😄' z='😄' />
//         <SlotM x='❤' y='😎' z='🤷‍♂️' />
//       </div>

// </React.StrictMode>
//   )
// }


































// const favSeries = "Netflix";
// const FavS = () => {

//   // if (favSeries === "Netflix") {
//   //   return (
//   //     <Card
//   //       key={Sdata[0].id}
//   //       imgsrc={Sdata[0].imgsrc}
//   //       sname={Sdata[0].sname}
//   //       title={Sdata[0].title}
//   //       link={Sdata[0].links}
//   //     />
//   //   )

//   // } 
//   // else {
//   //   return (
//   //     <Card
//   //       key={Sdata[4].id}
//   //       imgsrc={Sdata[4].imgsrc}
//   //       sname={Sdata[4].sname}
//   //       title={Sdata[4].title}
//   //       link={Sdata[4].links}
//   //     />
//   //   )

//   // }
//  return (favSeries==='Netflix' ?  <Card
//   key={Sdata[0].id}
//   imgsrc={Sdata[0].imgsrc}
//   sname={Sdata[0].sname}
//   title={Sdata[0].title}
//   link={Sdata[0].links}
// />:  <Card
//         key={Sdata[4].id}
//         imgsrc={Sdata[4].imgsrc}
//         sname={Sdata[4].sname}
//         title={Sdata[4].title}
//         link={Sdata[4].links}
//       />)
// }

// function App() {
//   return (
//     <React.StrictMode>
//       <h1 className="heading_style">List of top 5 Netflix Series in 2023</h1>

//       <div className="cards">

//         {/* {
//           Sdata.map((currElem) => {  //iss call back function ko iss component ke bahar bhi likh sakte the alag se aur zada structured ho jata
//             return <Card
//               key={currElem.id}
//               imgsrc={currElem.imgsrc}
//               sname={currElem.sname}
//               title={currElem.title}
//               link={currElem.links}
//             />
//           })
//         } */}

//         <FavS />

//       </div>
//     </React.StrictMode>
//   )
// }

export default App;