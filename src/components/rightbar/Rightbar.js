import "./Rightbar.css";
import Gift from "../../assets/gift.png";
import AdImg from "../../assets/ad.png";
import img from '../../assets/person/1.jpeg'
import { Users } from "../../demoData";
import Online from "../online/Online";
const Rightbar = ({ Profile }) => {
	const HomeRightBar = () => {
		return (
			<>
				<div className="birthdayContainer">
					<img className="birthdayImg" src={Gift} alt="" />
					<span className="birthdayText">
						<b>Pola Foster</b> and{" "}
						<b>3 other friends</b> have a birhday today.
					</span>
				</div>
				<img className="rightbarAd" src={AdImg} alt="" />
				<h4 className="rightbarTitle">Online Friends</h4>
				<ul className="rightbarFriendList">
					{Users.map((user) => (
						<Online key={user.id} user={user} />
					))}
				</ul>
			</>
		);
	};

	const ProfileRightbar = () => {
		return (
			<>
				<h4 className="rightbarTitle">User information</h4>
				<div className="rightbarInfo">
					<div className="rightbarInfoItem">
						<span className="rightbarInfoKey">
							City:
						</span>
						<span className="rightbarInfoValue">
							New York
						</span>
					</div>
					<div className="rightbarInfoItem">
						<span className="rightbarInfoKey">
							From:
						</span>
						<span className="rightbarInfoValue">
							Madrid
						</span>
					</div>
					<div className="rightbarInfoItem">
						<span className="rightbarInfoKey">
							Relationship:
						</span>
						<span className="rightbarInfoValue">
							Single
						</span>
					</div>
				</div>
				<h4 className="rightbarTitle">User friends</h4>
				<div className="rightbarFollowings">
					<div className="rightbarFollowing">
						<img
							src={img}
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">
							John Carter
						</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src={img}
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">
							John Carter
						</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src={img}
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">
							John Carter
						</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src={img}
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">
							John Carter
						</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src={img}
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">
							John Carter
						</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src={img}
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">
							John Carter
						</span>
					</div>
				</div>
			</>
		);
	};

	return (
		<div className="rightbar">
			<div className="rightbarWrapper">
                        {Profile ? <ProfileRightbar /> : <HomeRightBar />}
                  </div>
		</div>
	);
};

export default Rightbar;