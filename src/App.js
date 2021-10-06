import React, { Component } from 'react'
import Navbar from "./Component/Navbar/Navbar";
import "/App.scss";
import TourList from "./Component/TourList"

class App extends Component {
   render() {
     return ( 
       <main>
           <Navbar />
           <TourList />    
       </main>
      );
   } 
}

export default App;