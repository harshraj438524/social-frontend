import Post from "../post/Post";
import Share from "../share/Share";
import axios from "axios";
import "./feed.css";
import { Posts } from "../../dummyData";
import { useContext,useEffect ,useState} from "react";
import QuestionContext from "../../QuestionContext/QuestionContext";
import React from 'react'



  export default function Feed({id}) {
  const context = useContext(QuestionContext);
  const {allpost,fethchPost,fetchuser,user,alluser,fetchalluser} = context;
  const [users, setusers] = useState([])

console.log("ajbnad",id);
const fetchuserpost=async()=>{

let headersList = {
 "Accept": "*/*",
}

let reqOptions = {
  url: `http://localhost:8000/api/posts/allpost/${id}`,
  method: "GET",
  headers: headersList,
}

let response = await axios.request(reqOptions);
console.log(response.data);
setusers(response.data);
}


  useEffect(()=>{
      fetchuserpost();
      fethchPost();
  },[])

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {allpost.map((p) => (
          <Post key={p._id} post={p}  />
        ))}
      </div>
    </div>
  );
}
