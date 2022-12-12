import styled from "styled-components";
import moutain from "../../assets/image/moutain.png";
import desert from "../../assets/image/samac.png";
import iconUL from "../../assets/icon/iconUL.png";
import IMGtemple from "../../assets/image/imgtemple.png";
import { Box, Text, Image, Img } from "@chakra-ui/react";
import imgStickyRice from "../../assets/image/imgStickyRice.png";
import imgPo from "../../assets/image/imgPo.png";
import imgCathedral from "../../assets/image/imgCathedral.png";

const AboutScreen = () => { 
  return (
    <Box style={body}>
      <Box display="flex" flexDirection={"row"}>
        <Box>
          <Image src={desert} style={Imgdesert} objectFit={"contain"} />
          <Image src={moutain} style={imgMountain} objectFit={"contain"} />
        </Box>
        <Box marginLeft={"120px"}>
          <h2>
            With NgaoduVietnam, immerses you in majestic space and unique
            cultural features
          </h2>
          <Box display={"flex"} flexDirection="row" marginLeft={"20px"}>
            <Image
              src={iconUL}
              objectFit="contain"
              alignSelf={"flex-start"}
              position="relative"
              top="20px"
            />
            <Text marginLeft={"40px"} fontSize="16px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              viverra nuQlla eget sed odio. Vulputate risus faucibus sem non,
              feugiat nec consequat, montes. Elementum scelerisque phasellus
              donec lectus ullamcorper faucibus. Malesuada et adipiscing
              molestie egestas leo ut.
            </Text>
          </Box>
        </Box>
      </Box>
      <Box display={"flex"} flexDirection="row" marginTop={"120px"}>
        <Box>
          <h2>
            With NgaoduVietnam, immerses you in majestic space and unique
            cultural features
          </h2>
          <Text fontSize="16px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            viverra nuQlla eget sed odio. Vulputate risus faucibus sem non,
            feugiat nec consequat, montes. Elementum scelerisque phasellus donec
            lectus ullamcorper faucibus. Malesuada et adipiscing molestie
            egestas leo ut.
          </Text>
          <Text fontSize="16px" marginTop={"40px"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            viverra nuQlla eget sed odio. Vulputate risus faucibus sem non,
            feugiat nec consequat, montes.{" "}
          </Text>
        </Box>
        <Image src={IMGtemple} objectFit="contain" marginLeft={"60px"} />
      </Box>
      <Image
        src={imgStickyRice}
        objectFit="contain"
        width="100%"
        marginTop={"100px"}
      />
      <h2>Experience the traditional cultural beauties of Vietnam</h2>
      <Box
        display={"flex"}
        flexDirection="row"
        justifyContent={"space-between"}
        alignItems='center'
      >
        <Box>
          <Text fontSize={"16px"} maxWidth='500px'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            viverra nuQlla eget sed odio. Vulputate risus faucibus sem non,
            feugiat nec consequat, montes. Elementum scelerisque phasellus donec
            lectus ullamcorper faucibus. Malesuada et adipiscing molestie
            egestas leo ut.
          </Text>
          <Image src={imgPo} objectFit="contain" marginTop={"60px"} />
        </Box>
        <Box marginLeft={'100px'}>
          <Text fontSize={"16px"} maxWidth='500px'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            viverra nuQlla eget sed odio. Vulputate risus faucibus sem non,
            feugiat nec consequat, montes. Elementum scelerisque phasellus donec
            lectus ullamcorper faucibus.
          </Text>
          <Text fontSize={"16px"} marginTop='120px' maxWidth='500px'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            viverra nuQlla eget sed odio. Vulputate risus faucibus sem non,
            feugiat nec consequat, montes. Elementum scelerisque phasellus donec
            lectus ullamcorper faucibus. Malesuada et adipiscing molestie
            egestas leo ut.
          </Text>
          <Image src={imgCathedral} objectFit='contain' marginTop={'40px'}/>
        </Box>
      </Box>
    </Box>
  );
};

const body = {
  marginTop: "171px",
  padding: "0 165px",
  paddingBottom: "50px",
};
const Imgdesert = {
  height: "541px",
  width: "445px",
};
const imgMountain = {
  height: "347px",
  width: "347px",
  position: "absolute",
  bottom: "-260px",
  left: "360px",
};

export { AboutScreen };
