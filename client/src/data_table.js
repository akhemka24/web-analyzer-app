import React, { useEffect, useState } from "react";




 
const Datum = (props) => (
 <tr>
   <td>{props.datum.temperature}</td>
   <td>{props.datum.humidity}</td>
   <td>{props.datum.time}</td>
 </tr>
);
 
export default function DataTable() {
 const [data, setData] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getData() {
     const response = await fetch(`http://localhost:5000/api/`);
     console.log("this thing has run");
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const data = await response.json();
     setData(data);
   }
 
   getData();
 
   return;
 }, [data.length]);
 
 // This method will map out the records on the table
 function DataTable() {
   return data.map((datum) => {
     return (
       <Datum
         datum={datum}
         key={datum._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3>Data Table</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Temperature</th>
           <th>Humidity</th>
           <th>Date</th>
         </tr>
       </thead>
       <tbody>{DataTable()}</tbody>
     </table>
   </div>
 );
}