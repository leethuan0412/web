import { backgroundHeader } from "@/assets/image";
import { TabHome } from "@/untils/mock";
import React, { useState } from "react";
import styled from "styled-components";
import Ngaodu from "../../assets/image/ngodauVN.png";
import desert from "../../assets/image/samac.png";
import moutain from "../../assets/image/moutain.png";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  let subtitle: HTMLHeadingElement | null;
  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }
  const navigate = useNavigate();
  return (
    <StyledHome Bgr={backgroundHeader}>
      <div className="container">
        <img src={Ngaodu} className="ngaodu" />
        <p className="about_us">About us</p>
        <div className="viewTab">
          {TabHome.map((item, index) => {
            return (
              <button
                key={index}
                className="buttonTab"
                onClick={()=>navigate(item?.navigation)}
              >
                <p className="tabHome">{item.title}</p>
              </button>
            );
          })}
        </div>
      </div>
      <div className="body">
        <div className="header">
          <div>
            <img src={desert} className="desert" />
            <img src={moutain} className="moutain" />
          </div>
          <div className="content">
            <h2>
              With NgaoduVietnam, immerses you in majestic space and unique
              cultural features
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              viverra nuQlla eget sed odio. Vulputate risus faucibus sem non,
              feugiat nec consequat, montes. Elementum scelerisque phasellus
              donec lectus ullamcorper faucibus. Malesuada et adipiscing
              molestie egestas leo ut.
            </p>
          </div>
        </div>
        {/* <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={()=>alert('alo')} className="Tour" style={customStyles.alo}>Tour</button>
          <button onClick={()=>alert('alo')}>Home</button>
        </Modal> */}
      </div>
    </StyledHome>
  );
};
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  alo:{

  }
};

const StyledHome = styled.div<{
  Bgr: string;
}>`
  height: 100vh;
  width: 100vw;
  /* align-items: center; */
  display: flex;
  flex-direction: column;
  .Tour {
    color: red;
  }
  .btnTour {
    background-color: purple;
    color: red;
  }
  .header {
    display: flex;
  }
  .content {
    margin-left: 150px;
  }
  .moutain {
    height: 187px;
    width: 187px;
    position: relative;
    top: -120px;
    left: 100px;
  }
  .desert {
    height: 241px;
    width: 245px;
  }
  .body {
    margin-top: 171px;
    padding: 0 165px;
  }
  .buttonTab {
    background: transparent;
    border: none;
    outline: none;
    font-size: 14px;
    color: white;
    :focus {
      color: #ff7b42;
    }
  }
  .viewTab {
    position: absolute;
    display: flex;
    width: 515px;
    justify-content: space-around;
    top: 0;
    right: 165px;
    top: 52px;
  }
  .container {
    background: url(${(p) => p.Bgr}) no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 400px;
    object-fit: contain;
    box-sizing: border-box;
    padding: 0 165px;
  }
  .ngaodu {
    width: 89px;
    height: 87px;
    object-fit: contain;
    position: absolute;
    margin-top: 20px;
  }
  .about_us {
    font-size: 60px;
    font-weight: 600;
    margin: 0;
    text-align: center;
    margin-top: 200px;
    /* position: relative; */
    /* top: 50%; */
    /* right: 50%; */
    color: white;
  }
`;

export { HomeScreen };
