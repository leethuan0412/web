import React, { useState } from "react";
import { backgroundHeader } from "@/assets/image";
import { TabHome } from "@/untils/mock";
import { Box, Image, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Ngaodu from "../../assets/image/ngodauVN.png";

interface Props {
  about?: boolean;
  home?: boolean;
}

export const Header = (props: Props) => {
  const { about, home } = props;
  const [showSearch, setShowSearch] = useState("Tours");

  return (
    <Box
      backgroundImage={backgroundHeader}
      height="450px"
      width={"100%"}
      objectFit="contain"
      backgroundRepeat={"no-repeat"}
      backgroundSize="cover"
      boxSizing={"border-box"}
    >
      <Image src={Ngaodu} padding="0 165px" marginTop={"20px"} />
      <Box
        flexDirection={"row"}
        display="flex"
        position={"absolute"}
        padding=" 0 165px"
        top="40px"
        right="10px"
      >
        {TabHome.map((item, index) => {
          return (
            <Box key={index} padding="30px">
              <NavLink
                to={item?.navigation}
                style={({ isActive }) => (isActive ? activeStyle : noActive)}
              >
                {item.title}
              </NavLink>
            </Box>
          );
        })}
      </Box>
      {home && (
        <Box
          display={"flex"}
          flexDirection="row"
          marginTop={"30px"}
          justifyContent="space-between"
          padding={"0 165px"}
        >
          <Box marginTop="40px">
            <Text color={"#FFF2CF"} fontSize="16px">
              Welcome to NgaoduVietnam
            </Text>
            <Text
              fontSize={"60px"}
              color={"#fff"}
              marginTop="35px"
              marginBottom={"0"}
            >
              Perfect place{" "}
            </Text>
            <Text fontSize={"60px"} color={"#fff"} marginTop="30px">
              for your stories
            </Text>
          </Box>
          <Box
            height={"568px"}
            width="445px"
            backgroundColor={"#ffffff64"}
            zIndex="1"
          >
            <Box display={"flex"} flexDirection="row" alignItems={"center"}>
              <Text
                padding={"10px 90px"}
                margin="0"
                cursor="pointer"
                style={showSearch === "Tours" ? styleTours : styleHotels}
                onClick={() => setShowSearch("Tours")}
              >
                Tours
              </Text>
              <Text
                style={showSearch === "Hotels" ? styleTours : styleHotels}
                padding={"10px 90px"}
                cursor="pointer"
                margin="0"
                onClick={() => setShowSearch("Hotels")}
              >
                Hotels
              </Text>
            </Box>
            {showSearch === "Tours" && (
              <Box padding={" 0 31px"}>
                <Text fontSize={'24px'} color='#1C1C1E'>Discover beautiful Vietnam</Text>
              </Box>
            )}
          </Box>
        </Box>
      )}

      {about && (
        <Text
          fontSize={"60px"}
          textAlign="center"
          marginTop={"80px"}
          color="#fff"
        >
          About Us
        </Text>
      )}
    </Box>
  );
};
const activeStyle = {
  color: "#ff7b42",
};
const noActive = {
  color: "#FFF",
};
const styleTours = {
  backgroundColor: "#FF7B42",
  color: "#fff",
  fontWeight: "bold",
};
const styleHotels = {
  backgroundColor: "#ffffff64",
  color: "#3D3E3F",
};
