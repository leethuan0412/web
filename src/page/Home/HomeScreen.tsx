import { Box, Image, Text } from "@chakra-ui/react";
import iconUL from "../../assets/icon/iconUL.png";
import moutain from "../../assets/image/moutain.png";
import desert from "../../assets/image/samac.png";

const HomeScreen = () => {
  return (<>
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

   
    </Box>
  </>
  );
};

const body = {
  marginTop: "171px",
  padding: "0 165px",
  paddingBottom: "80px",
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

export { HomeScreen };
