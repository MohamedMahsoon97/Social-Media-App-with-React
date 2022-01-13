import "./Profile.css";
import PostImg1 from '../../assets/post/3.jpeg'
import PostImg2 from '../../assets/post/7.jpeg'
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

const Profile = () => {
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
								src={PostImg1}
								alt=""
							/>
							<img
								className="profileUserImg"
								src={PostImg2}
								alt=""
							/>
						</div>
						<div className="profileInfo">
							<h4 className="profileInfoName">
								Safak Kocaoglu
							</h4>
							<span className="profileInfoDesc">
								Hello my friends!
							</span>
						</div>
					</div>
				</div>
				<div className="profileRightBottom">
					<Feed />
					<Rightbar Profile />
				</div>
			</div>
		</>
	);
};

export default Profile;