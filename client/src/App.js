import React from "react";
 
// We use Route in order to define the different routes of our application
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
 
// We import all the components we need in our app
//import Navbar from "./components/navbar";
import DataTable from "./data_table";
//import Edit from "./components/edit";
//import Create from "./components/create";

console.log("function started")
const App = () => {
 return (
   <BrowserRouter>
     <Routes>
       <Route exact path="/" element={<DataTable />} />
     </Routes>
   </BrowserRouter>
 );
};
 
export default App;