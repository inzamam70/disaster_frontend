import React, { useState, useEffect } from "react";
import "./index.css";
import image from "../../assets/image/bg.png";
import { Preloader } from "../../components/preloader";
import { Nav } from "../../components/nav";
import { FooterUi } from "../../components/footerui";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode"; // Correctly import jwtDecode
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const Login = () => {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  const handleLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    setUser(decoded);
    console.log(decoded);
  };

  const handleLogout = () => {
    googleLogout();
    setUser(null);
    console.log("Logged out successfully");
  };

  const [profile, setProfile] = useState(null);

  // Handle form field changes
  const emailChangeHandler = (e) => setEmail(e.target.value);
  const passwordChangeHandler = (e) => setPassword(e.target.value);

  // Handle form submission
  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("login", email);
    formData.append("password", password);

    axios
      .post("http://localhost:8000/api/login", formData)
      .then((res) => {
        if (res.data.success) {
          localStorage.setItem("token", res.data.access_token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          navigate("/be");
        } // Redirect to a dashboard or another page
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {loading ? <Preloader /> : null}
      <Nav />
      <div className="breadcrums">
        <img src={image} alt="image" />
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>Login</li>
        </ul>
      </div>
      <div className="login">
        <h1 style={{ marginTop: "30px" }}>Login</h1>
        
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          voluptas. Quisquam, quod. Quas, quos.
        </p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>

        <div className="background"></div>

        <form className="form-body" onSubmit={submitHandler}>
          <div className="form-content">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={emailChangeHandler}
              id="email"
              required
            />
          </div>
          <div className="form-content">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={passwordChangeHandler}
              id="password"
              required
            />
          </div>

          <Link to="/register">Don't have an account? Register here</Link>
          <button type="submit" className="form-btn">
            Log In
          </button>

          <div className="form-social">
            {user ? (
              <>
                <p>Welcome, {user.name}</p>
                <button onClick={handleLogout} className="form-btn logout-btn">
                  Log Out
                </button>
              </>
            ) : (
              <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={() => console.log("Login Failed")}
              />
            )}

            {/* <div>
              {!profile ? (
                <LoginSocialFacebook
                  appId="359206420398948"
                  onResolve={(response) => {
                    console.log(response);
                    setProfile(response.data);
                  }}
                  onReject={(error) => {
                    console.log(error);
                  }}
                >
                  <FacebookLoginButton />
                </LoginSocialFacebook>
              ) : (
                ""
              )}

              {profile ? (
                <div>
                  <h1>{profile.name}</h1>
                  <img src={profile.picture.data.url} alt="Facebook Profile" />
                </div>
              ) : (
                ""
              )}
            </div> */}
          </div>
        </form>
      </div>
      <FooterUi />
    </>
  );
};
