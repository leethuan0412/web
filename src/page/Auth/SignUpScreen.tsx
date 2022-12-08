import { background } from "@/assets/image";
import { Button, Input } from "@/components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();

  const hanleSignUp = async (item: {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
  }) => {
    const payload = {};
    try {
    } catch (error) {
    } finally {
    }
  };

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().trim().required("Họ và tên trống"),
    lastName: Yup.string().trim().required("Họ và tên trống"),

    email: Yup.string().trim().required("Địa chỉ email trống").email(),
    password: Yup.string()
      .trim()
      .required("Họ và tên trống")
      .min(8, "mật khẩu phải lớn hơn 8 kí tự"),
  });

  return (
    <StyledLogin bgUrl={background}>
      <div className="container_left">
        <div className="wapper-auth">
          <p className="SignIn">Register</p>
          <p className="content">Welcome to NgaoduVietnam</p>

          <Formik
            initialValues={{
              email: "",
              password: "",
              firstName: "",
              lastName: "",
            }}
            validate={(values) => RegisterSchema}
            onSubmit={hanleSignUp}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="viewName">
                  <Input
                    value={values.firstName}
                    onChange={handleChange}
                    className="firstName"
                    placeholder="First Name"
                  />
                  <Input
                    value={values.lastName}
                    onChange={handleChange}
                    className="lastname"
                    placeholder="Last Name"
                  />
                </div>

                <Input
                  value={values.email}
                  onChange={handleChange}
                  className="email"
                  placeholder="Email Address"
                />
                <Input
                  value={values.password}
                  onChange={handleChange}
                  className="password"
                  placeholder="Password"
                  maxLength={30}
                  rightIcon
                />
                <div className="viewForgot">
                  <p className="forgot-password">Forgot password?</p>
                </div>
                <Button
                  children="Sign up"
                  className="sign-in"
                  classChildren="txtSignIn"
                  type="submit"
                />
                <Button
                  children="Sign in with Facebook"
                  className="loginFB"
                  classChildren="txtSignIn"
                  iconFb
                />
                <div className="signup">
                  <p className="dont_account">Member already?</p>
                  <p
                    onClick={() => navigate("/auth")}
                    className="txtSignUp"
                  >
                    Login
                  </p>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
      <div className="container_right"></div>
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
  .viewName {
    width: min(100%, 350px);
    display: flex;
  }
  .firstName {
    width: 90%;
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
  .lastname {
    height: 35px;
    width: 100%;
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
    margin-top: 30px;
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
    margin-top: 30px;
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
export { SignUpScreen };
