import React, { Children } from "react";
import styled from "styled-components";
import IconFacebook from "../../assets/svg/facebook.svg";
interface Props {
  children?: React.ReactNode;
  classChildren?: any;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  iconFb?: boolean;
}
const Button = (props: Props) => {
  const { onClick, className, type, children, classChildren, iconFb } = props;
  return (
    <StyledButton>
      <button onClick={onClick} className={className} type={type}>
        <div className="viewButtonSignIn">
          {iconFb && <img src={IconFacebook} className="icon_facenook" />}
          <p className={classChildren}>{children}</p>
        </div>
      </button>
    </StyledButton>
  );
};
const StyledButton = styled.div<{}>`
  width: min(100%, 350px);
  button {
    width: 100%;
  }
  p {
    padding: 0;
    margin: 0;
    margin-left: 10px;
  }
  .viewButtonSignIn {
    display: flex;
    justify-content: center;
  }
`;

export { Button };
