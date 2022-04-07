import React,{useReducer,useEffect} from 'react'
import "./Login.css";
import { Link } from 'react-router-dom';
import { useAuth } from '../../../Context/auth-Context';
import  axios  from "axios";

const Login = () => {
  const { foundUser, authToken, userHandler, tokenHandler } = useAuth();
  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      userHandler(JSON.parse(localStorage.getItem("user")).foundUser);
      tokenHandler(JSON.parse(localStorage.getItem("user")).encodedToken);
    }
  }, []);
  const loginReducerFunc = (state, action) => {
    switch (action.type) {
      case "EMAIL":
        return { ...state, email: action.payload };
      case "PASSWORD":
        return { ...state, password: action.payload };
      case "REMEMBER_ME":
        return { ...state, rememberMe: !state.rememberMe };
    }
  };
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        email: state.email,
        password: state.password,
      });
      if (response.data.foundUser) {
        localStorage.setItem("user", JSON.stringify(response.data));
        userHandler(response.data.foundUser)
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [state, dispatch] = useReducer(loginReducerFunc, {
    email: "",
    password: "",
    rememberMe: false,
  });
  return (
    <div>
      <main>
        <div className="form__container">
          <heading className="heading">Login</heading>
          <form onSubmit={loginHandler}>
          <div className="email">
            <label htmlFor="email__input">Email Address</label>
            <input
              type="email"
              id="email__input"
              className="email__input txt-2xl "
              value={state.email}
              onChange={(e) =>
                dispatch({ type: "EMAIL", payload: e.target.value })
              }
            />
          </div>
          <div className="password">
            <label htmlFor="password__input">Password</label>
            <input
              type="password"
              id="password__input"
              className="password__input txt-2xl"
              value={state.password}
              onChange={(e) =>
                dispatch({ type: "PASSWORD", payload: e.target.value })
              }
            />
          </div>
          <div className="footer">
            <div className="rememberMe__container">
              <input type="checkbox" id="rememberMe" className="rememberMe" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>

            <Link to="/forgotpassword" className="forgotPassword">
              Forgot Password
            </Link>
          </div>
          <input type="submit" className="login__button" value="Login" />
          <div className="noaccount">
            Don't have an account?
            <Link to="/signup" className="txt-4xl txt-yellow-400">
              Signup
            </Link>
          </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login