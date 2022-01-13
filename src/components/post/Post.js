import { useState } from 'react';
import './Post.css'
// import BarImg from '../../assets/person/1.jpeg';
import LikeIcon from '../../assets/like.png';
import HeartIcon from '../../assets/heart.png';
// import PostImgOne from '../../assets/post/1.jpeg'
import { MoreVert } from '@material-ui/icons';
import { Users } from '../../demoData';

const Post = ({Post}) => {
      const [like , setLike] = useState(Post.like);
      const [isLiked , setIsLiked] = useState(false);
      const likeHandler =() => {
            setLike(isLiked ? like - 1 : like + 1);
            setIsLiked(!isLiked);
      }
      return (
            <div className="post">
                  <div className="postWrapper">
                        <div className="postTop">
                              <div className='postTopLeft'>
                                    <img src={Users.filter( user=> user.id === Post?.userId)[0].profilePicture} className="postProfileImg" alt="" />
                                    <span className="postUsername">
                                          {Users.filter( user => user.id === Post?.userId)[0].username}
                                    </span>
                                    <span className="postDate">{Post.date}</span>
                              </div>
                              <div className="postTopRight"><MoreVert /></div>
                        </div>
                        <div className="postCenter">
                              <span className="postText">{Post?.desc}</span>
                              <img className="postImg" src={Post.photo} alt="" />
                        </div>
                        <div className="postBottom">
                              <div className="postBottomLeft">
                                    <img className="likeIcon" onClick={likeHandler} src={LikeIcon} alt="" />
                                    <img className="likeIcon" onClick={likeHandler} src={HeartIcon} alt="" />
                                    <span className="postLikeCounter">{like} people like it</span>
                              </div>
                              <div className="postBottomRight">
                                    <span className="postCommentText">{Post.comment} Comments</span>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Post;