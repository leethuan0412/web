import { background } from "@/assets/image";
import { Button, Input } from "@/components";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <StyledLogin bgUrl={background}>
      <div className="container_left">
        <div className="wapper-auth">
          <p className="SignIn">Sign in</p>
          <p className="content">Welcome to NgaoduVietnam</p>
          <Input
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
            className="email"
            placeholder="Email Address"
          />
          <Input
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            className="password"
            placeholder="Password"
            maxLength={30}
            rightIcon
          />
          <div className="viewForgot">
            <p className="forgot-password">Forgot password?</p>
          </div>
          <Button
            children="Sign in"
            className="sign-in"
            classChildren="txtSignIn"
            onClick={()=>navigate('/')}
          />
          <Button
            children="Sign in with Facebook"
            className="loginFB"
            classChildren="txtSignIn"
            iconFb
          />
          <div className="signup">
            <p className="dont_account">Don’t have an account?</p>
            <p onClick={() => navigate("/auth/signup")} className="txtSignUp">
              Sign up
            </p>
          </div>
        </div>
      </div>
      <div className="container_right"></div>
      <Outlet/>
    </StyledLogin>
  );
};

const StyledLogin = styled.div<{
  bgUrl: string;
}>`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;

  .signup {
    display: flex;
    justify-content: flex-start;
    width: min(100%, 350px);
    p {
      margin: 30px 0;
    }
    .txtSignUp {
      color: #ff7b42;
      font-weight: 500;
      margin-left: 10px;
      opacity: 0.8;
      cursor: pointer;
    }
  }
  .dont_account {
    font-size: 16px;
    color: #636567;
  }
  .viewButton {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .viewForgot {
    display: flex;
    justify-content: flex-end;
    width: min(100%, 350px);
  }
  .txtSignIn {
    color: white;
    font-size: 14px;
    padding: 10px 0;
  }
  .sign-in {
    background: #ff7b42;
    border: none;
    border-radius: 0%;
    &:focus {
      border: none;
      outline: none;
    }
    &:hover {
      opacity: 0.8;
    }
  }
  .loginFB {
    margin-top: 32px;
    background: #4e86db;
    border: none;
    border-radius: 0%;
    &:focus {
      border: none;
      outline: none;
    }
    &:hover {
      opacity: 0.8;
    }
  }
  .wapper-auth {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 30px;
  }
  .forgot-password {
    font-size: 14px;
    color: #636567;
  }
  .password {
    height: 35px;
    border-color: #c5c7c9;
    border-bottom-width: 1;
    border-top-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    margin-top: 40px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #636567;
    }
    background-color: transparent;
  }
  .email {
    height: 35px;
    border-color: #c5c7c9;
    border-bottom-width: 1;
    border-top-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #636567;
    }
    background-color: transparent;
  }

  .content {
    font-size: 16px;
    line-height: 30px;
    text-align: left;
    max-width: 400px;
  }
  .SignIn {
    font-size: 48px;
    line-height: 57.6px;
    margin: 0;
    margin-top: 200px;
    text-align: left;
  }

  .container_left {
    width: 50%;
    height: 100%;
  }

  .container_right {
    background: url(${(p) => p.bgUrl}) no-repeat;
    width: 50%;
    height: 100%;
    background-size: 100% 100%;
    object-fit: contain;
  }
  @media screen and (max-width: 450px) {
    .wapper-auth {
      /* background-color: red; */
    }
    .container_right {
      display: none;
    }
    .container_left {
      background: url(${(p) => p.bgUrl}) no-repeat;
      width: 100%;
      height: 100%;
      background-size: 100% 100%;
      object-fit: contain;
    }
    .forgot-password {
      font-size: 14px;
      color: white;
    }
    .content {
      font-size: 16px;
      line-height: 30px;
      text-align: left;
      max-width: 400px;
      color: white;
    }
    .SignIn {
      font-size: 48px;
      line-height: 57.6px;
      margin: 0;
      margin-top: 200px;
      text-align: left;
      color: white;
    }
    .email {
      color: white;
      &::placeholder {
        color: white;
      }
    }
    .password {
      color: white;
      &::placeholder {
        color: white;
      }
    }
    .dont_account {
      font-size: 16px;
      color: white;
    }
  }
`;
export { LoginScreen };
