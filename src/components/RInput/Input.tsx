import React, { useState } from "react";
import styled, { StyledProps } from "styled-components";
import eyeImg from "../../assets/image/eye.png";
import eyeImgHide from "../../assets/image/eyehint.png";

interface Props {
  value?: string;
  placeholder?: string;
  onChange?: (value:any) => void;
  maxLength?: number;
  multiple?: boolean;
  className?: string;
  security?: boolean;
  rightIcon?: boolean;
  type?: string;
}

const Input = (props: Props) => {
  const [isPrivateText, setSecureTextEntry] = useState(false);
  const {
    value,
    placeholder,
    onChange,
    maxLength,
    multiple,
    className,
    rightIcon=false,
    type,
  } = props;
  return (
    <>
      <StyledFormAuth>
        <input
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          maxLength={maxLength}
          multiple={multiple}
          className={className}
          type={!isPrivateText ? "text" : "password"}
        />
        {rightIcon && (
          <button
            onClick={() =>setSecureTextEntry(!isPrivateText)}
            className="button-showpassword"
          >
            {isPrivateText ? (
              <img src={eyeImg} className="img-eye" />
            ) : (
              <img src={eyeImgHide} className="img-eye"/>
            )}
          </button>
        )}
      </StyledFormAuth>
    </>
  );
};
const StyledFormAuth = styled.div<{}>`
width: min(100%, 350px);
input{
  width: 100%;
}
position: relative;
  .button-showpassword:focus {
    outline: none;
}
.button-showpassword {
    outline: none;
    background-color: transparent;
    border: none;
    position: absolute;
    top:30px;
    right: -10px;
}
  .img-eye {
    height: 20px;
    width: 20px;
    background-color: transparent;
  }
`;
export { Input };
