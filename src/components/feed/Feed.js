import Post from '../post/Post';
import Share from '../share/Share';
import { Posts } from '../../demoData';
import './Feed.css';

const Feed = () => {
      return (
            <div className='feed'>
                  <div className="feedWrapper">
                        <Share />
                        {Posts.map( (yourPost) => (
                              <Post key={yourPost.id} Post={yourPost} />
                        ))}
                  </div>
            </div>
      )
}

export default Feed;