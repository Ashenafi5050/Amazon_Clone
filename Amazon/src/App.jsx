// import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Router.jsx"; // Import the Routing component
import { useContext, useEffect } from "react";
import { DataContext } from "./Components/DataProvider/DataProvider.jsx";
import { Type } from "./Utility/action.type.type.js";
import { auth } from "./Utility/firebase.js";


const App = () => {
  const [{ user }, dispatch] = useContext(DataContext)

    useEffect (()=>{
      auth.onAuthStateChanged((authUser)=>{

        if(authUser){
          console.log(authUser);
          dispatch({
            type:Type.SET_USER,
            user:authUser

          })
        }else{
          dispatch({
            type:Type.SET_USER,
            user:null,
        });

      }
    })
    },[dispatch])

  return (
    <>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </>
  );
};

export default App;
