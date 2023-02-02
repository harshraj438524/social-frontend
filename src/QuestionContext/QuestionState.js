import { useState } from "react";
// import React from "react";
import QuestionContext from "./QuestionContext.js";
import axios from "axios";
import React from 'react'

function QuestionState(props) {
const host="http://localhost:8000"
const [allpost, setpost] = useState([]);
const [user, setuser] = useState({});
const [alluser, setalluser] = useState([]);


const fethchPost=async()=>{
let headersList = {
 "Accept": "*/*", 
}

let reqOptions = {
  url: `${host}/api/posts/timeline/63c8029fe4016531ff0c8a8a`,
  method: "GET",
  headers: headersList,
}

let response = await axios.request(reqOptions);
setpost(response.data);
// console.log(response.data)
}

const fetchuser=async()=>{

let headersList = {
 "Accept": "*/*", 
}

let reqOptions = {
  url: `${host}/api/users/63c8029fe4016531ff0c8a8a`,
  method: "GET",
  headers: headersList,
}

let response = await axios.request(reqOptions);
setuser(response.data);
// console.log(response.data);


}

const fetchalluser=async()=>{

let headersList = {
 "Accept": "*/*",
}

let reqOptions = {
  url: `${host}/api/users`,
  method: "GET",
  headers: headersList,
}

let response = await axios.request(reqOptions);
setalluser(response.data)
// console.log(response.data);

}


  return (
    <div>
       
      <QuestionContext.Provider value={{allpost,fethchPost,fetchuser,user,fetchalluser,alluser}}>
            {props.children}
    </QuestionContext.Provider>
    </div>
  )
}

export default QuestionState