import "./post.css";
import axios from "axios";
import QuestionContext from "../../QuestionContext/QuestionContext";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useEffect, useState ,useContext} from "react";
import {format} from "timeago.js";
import {Link } from 'react-router-dom'
export default function Post({ post }) {
  const [user, setuser] = useState({})

console.log(Users)
  useEffect(()=>{
   const  fetchuser=async()=>{


let headersList = {
 "Accept": "*/*",
 "Content-Type": "application/json" 
}


let reqOptions = {
  url: `http://localhost:8000/api/users/${post.userId}`,
  method: "GET",
  headers: headersList,
}

let response = await axios.request(reqOptions);
setuser(response.data);
    }
    fetchuser();
  },[])


  
  const context = useContext(QuestionContext);

  const [like,setLike] = useState(post.likes.length)
  const [isLiked,setIsLiked] = useState(false)

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
          <Link to={`profile/${post.userId}`}> <img className="postProfileImg" src="assets/person/1.jpeg" alt=""/></Link> 
            <span className="postUsername">
              {user.username}
            </span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.description}</span>
          <img className="postImg" src="assets/post/1.jpeg"alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
            <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
