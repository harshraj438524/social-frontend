import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";


export default function Profile() {
  const [user, setuser] = useState({})
  const params=useParams();
  useEffect(()=>{
    const fetchuser=async()=>{
let headersList = {
 "Accept": "*/*",
 
}

let reqOptions = {
  url: `http://localhost:8000/api/users/${params.id}`,
  method: "GET",
  headers: headersList,
}

let response = await axios.request(reqOptions);
// console.log(response.data);
setuser(response.data);

    }
    fetchuser();
  },[params.id])

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/7.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.description}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed id={params.id}/>
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
