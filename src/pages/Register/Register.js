import "./Register.css"
const Register = () => {
      return (
            <div className="login">
			<div className="loginWrapper">
				<div className="loginLeft">
					<h3 className="loginLogo">MahsoonSocial</h3>
					<span className="loginDesc">
						Connect with friends and the world around
						you on MahsoonSocial.
					</span>
				</div>
				<div className="loginRight">
					<div className="loginBox">
						<input
							placeholder="FullName"
							className="loginInput"
						/>
						<input
							placeholder="Email"
							className="loginInput"
						/>
						<input
							placeholder="Password"
							className="loginInput"
						/>
						<button className="loginButton">
							Sign Up
						</button>
						<span className="loginForgot">
							Forgot Password?
						</span>
						<button className="loginRegisterButton">
							Create a New Account
						</button>
					</div>
				</div>
			</div>
		</div>
      )
}

export default Register;