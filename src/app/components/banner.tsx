import {
  Text,
  Box,
  Container,
  Flex,
  Heading,
  Button,

} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import banners from "../../../public/banners.png";
import tech from "../../../public/tech.jpg";
export default function Banner() {
  return (
    <>
      <Box
        bgImage="https://wallpapercrafter.com/desktop/57844-simple-background-pink-dark-hd.jpg"
        color="white"
        display={{ lg: "flex", base: "grid" }}
      >
        <Container maxW="1400">
          <Flex
            pt={{ lg: "150px", base: "10px" }}
            pb={{ lg: "100px", base: "20px" }}
            px={{ lg: "40px", base: "2px" }}
            textAlign={{ lg: "initial", base: "center" }}
            display={{ lg: "flex", base: "grid" }}
          >
            <Box flexBasis={{ lg: "50%", base: "100%" }}>
              <Heading
                pr={{ lg: "50px", base: "" }}
                fontSize={{ lg: "6xl", base: "xx-large" }}
                color="white"
                textAlign={{ lg: "initial", base: "left" }}
              >
                Prepare yourself for the Next Generation of internet wih
                Panaverse
              </Heading>
              <Text
                textAlign={{ lg: "initial", base: "left" }}
                pr={{ lg: "100px", base: "2px" }}
                fontSize=""
                color="whiteAlpha.600"
              >
                The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
                Panaverse DAO is a movement to spread these technolgies
                globally. It is community of Web 3 and Metaverse developers,
                designers, trainers, startup founders and service providers.
              </Text>
              <Button mt="10px" size="lg" colorScheme="teal">
                <Link href="/syllabus">More Info</Link>
              </Button>
            </Box>
            <Box
              pt={{ lg: "10px", base: "1px" }}
              flexBasis={{ lg: "50%", base: "100%" }}
            >
              <Image src={banners} alt="banner" width="500" height="200" />
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box>
        <Container maxW="1400">
          <Flex display={{ lg: "flex", base: "none" }}>
            <Box flexBasis={{ lg: "50%", base: "100%" }}>
              <Image src={tech} alt={"study"} />
            </Box>
            <Box
              flexBasis="50%"
              pl={{ lg: "100px", base: "2px" }}
              pt={{ lg: "80px", base: "2px" }}
              pb={{ lg: "initial", base: "10px" }}
            >
              <Heading pt="20px">Program Of Studies</Heading>
              <Text
                pt="20px"
                pr={{ lg: "20px", base: "0px" }}
                // textAlign={{ lg: "initial", base: "left" }}
              >
                This curriculum is intended for beginners who want to learn
                software development from the ground up. It is going to be a
                fifteen-month-long hybrid program that includes both onsite and
                online classes and is divided into five quarters of 13 weeks
                each. The emphasis will be on hands-on learning by educating
                students to produce projects.
              </Text>
              <Button mt="10px" size="lg" colorScheme="teal">
                Read More
              </Button>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box>
        <Container maxW="1400">
          <Flex display={{ lg: "none", base: "grid" }}>
            <Box
              textAlign={{ lg: "initial", base: "center" }}
              flexBasis="50%"
              pl={{ lg: "100px", base: "2px" }}
              pt={{ lg: "80px", base: "2px" }}
              pb={{ lg: "initial", base: "10px" }}
            >
              <Heading pt="20px">Program Of Studies</Heading>
              <Text
                pt="20px"
                pr="20px"
                textAlign={{ lg: "initial", base: "left" }}
              >
                This curriculum is intended for beginners who want to learn
                software development from the ground up. It is going to be a
                fifteen-month-long hybrid program that includes both onsite and
                online classes and is divided into five quarters of 13 weeks
                each. The emphasis will be on hands-on learning by educating
                students to produce projects.
              </Text>
              <Button mt="10px" size="lg" colorScheme="teal">
                Read More
              </Button>
            </Box>
            <Box flexBasis={{ lg: "50%", base: "100%" }}>
              <Image src={tech} alt={"study"} />
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
