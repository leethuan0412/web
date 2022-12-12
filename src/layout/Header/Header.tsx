import React from 'react'
import { backgroundHeader } from "@/assets/image";
import { TabHome } from "@/untils/mock";
import { Box, Image, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Ngaodu from '../../assets/image/ngodauVN.png';

interface Props{
  about?:boolean
}

export const Header = (props:Props) => {
  const {about}=props;
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
        top='40px'
        right='10px'
        
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
      {about && <Text fontSize={'60px'}>About Us</Text>}
    </Box>
  )
}
const activeStyle = {
    color: "#ff7b42",
  };
  const noActive = {
    color: "#FFF",
  };
