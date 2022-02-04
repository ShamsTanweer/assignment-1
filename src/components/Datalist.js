import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";


function DataList(){

   const [userList, setUserList] = useState([])

   useEffect(()=>{
      async function getData(){
          const res = await axios.get(`https://www.gov.uk/bank-holidays.json`)
          setUserList(res.data.scotland.events);
          
      }   
     getData();
  });
   
  
   function dataCall (x){
      userList.map(usr =>{
         if(x === usr.date){
            // return(usr.title)
            console.log(usr.title);
         } else {
            return("no match found")
         }
      } )
   };
   
   let a = ('2017-01-02')

   dataCall(a);



   const [inputText, setInputText] = useState("")

   function handleChange(event){
      console.log(event.target.value);
    setInputText(event.target.value);
   }

   
 return <div >
   <h1>UK Holiday Data</h1>
   <form>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter a date"
          value={inputText}
        />
        <button type="submit">Submit</button>
      <table className="table">
         <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Notes</th>
         </tr>
         {
            userList && userList.length> 0 ?
            userList.map(usr => 
            <tr>
               <td>{usr.title}</td>
               <td>{usr.date}</td>
               <td>{usr.notes}</td>
            </tr>)
            : "Loading"
         }
      </table>
      </form>
   </div>
      

}

export default DataList;