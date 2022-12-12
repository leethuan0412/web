import { Contact, policy, TabFooter } from "@/untils/mock";
import { Box, Image, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import facabook from "../../assets/icon/facebook.png";
import insta from "../../assets/icon/insta.png";
import twitter from "../../assets/icon/twiter.png";
import Ngaodu from "../../assets/image/ngodauVN.png";

export const Footer = () => {
  return (
    <>
      <Box backgroundColor={"#1C1C1E"} height="418px" padding={"0 165px"}>
        <Box
          flexDirection={"row"}
          display="flex"
          justifyContent={'space-between'}
        >
          <Box>
            <Image src={Ngaodu} marginTop={"50px"} />
            <Box marginTop={"53px"}>
              <Image src={facabook} objectFit='contain'/>
              <Image src={insta} padding="0 35px" objectFit='contain' />
              <Image src={twitter}  objectFit='contain'/>
            </Box>
          </Box>
          <Box display={"flex"} marginTop={"90px"}>
            <Box >
              {TabFooter.map((item, index) => {
                return (
                  <Box key={index} padding="10px">
                    <NavLink
                      to={item?.navigation}
                      style={({ isActive }) =>
                        isActive ? activeStyle : noActive
                      }
                    >
                      {item.title}
                    </NavLink>
                  </Box>
                );
              })}
            </Box>
            <Box padding={'0 100px'}>
              {policy.map((item, index) => {
                return (
                  <Box key={index} padding="10px">
                    <NavLink
                      to={{}}
                      style={({ isActive }) =>
                        isActive ? activeStyle : noActive
                      }
                    >
                      {item.title}
                    </NavLink>
                  </Box>
                );
              })}
            </Box>
            <Box>
                {Contact.map((item, index)=>{
                    return(
                        <Box key={index} flexDirection='row' display={'flex'}>
                            <Image src={item.icon} objectFit='contain'/>
                            <Text color={'#fff'} marginLeft='20px'>{item.title}</Text>
                        </Box>
                    )
                })}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box backgroundColor={"#000000"}>
        <Text margin="0" textAlign={"center"} color="#fff" padding={"10px"}>
          Copyright © We.travel. All rights reserved
        </Text>
      </Box>
    </>
  );
};
const activeStyle = {
  color: "#FFF",
};
const noActive = {
  color: "#FFF",
};
