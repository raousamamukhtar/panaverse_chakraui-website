import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Text,
  Box,
  Container,
  Heading,
  SimpleGrid,
  Grid,
  HStack,
  Button,
  Flex,
  Divider,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import discord from "../../../public/disc.png";
import about from "../../../public/logo.png";
import { Icon } from "@chakra-ui/react";
import {
  FaFacebook,
  FaYoutube,
  FaDiscord,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <Box
        display={{ lg: "flex", base: "none" }}
        bgImage="https://wallpapercrafter.com/desktop/57844-simple-background-pink-dark-hd.jpg"
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Container maxW="100%">
          <SimpleGrid
            py="60px"
            templateColumns={{ base: "repeat(1 ,1fr)", lg: "repeat(4,1fr)" }}
          >
            <Box
              px={{ lg: "60px", base: "20px" }}
              pb={{ lg: "initial", base: "10px" }}
            >
              <Heading
                textAlign={{ base: "center", lg: "start" }}
                // pb={{ lg: "10px", base: "5px" }}
                color="white"
              >
                About us
              </Heading>
              <Image src={about} alt="aboutlogo" width="100" height="100" />
              <Text pt="10px" color="white">
                The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
                Panaverse DAO is a movement to spread these technolgies
                globally. It is community of Web 3 and Metaverse developers,
                designers, trainers, startup founders and service providers.
              </Text>
            </Box>
            <Box>
              <Heading
                textAlign={{ base: "center", lg: "start" }}
                color="white"
                pb={{ lg: "40px", base: "0px" }}
                pl={{ lg: "60px" }}
              >
                Useful Links
              </Heading>
              <Grid
                color="white"
                fontSize="xl"
                textAlign={{ base: "center", lg: "start" }}
                pl={{ lg: "60px" }}
              >
                <Link href="/">HOME</Link>
                <Link href="/syllabus">SYLLABUS</Link>
                <Link href="/explore">EXPLORE</Link>
                <Link href="/about">ABOUT</Link>
                <Link href="/contact">CONTACT</Link>
              </Grid>
            </Box>
            <Box>
              <Heading
                textAlign={{ base: "center", lg: "start" }}
                color="white"
                pb={{ lg: "40px", base: "10px" }}
              >
                Follow Us
              </Heading>
              <Grid
                color="white"
                fontSize="xl"
                textAlign={{ base: "center", lg: "start" }}
              >
                <Link href="https://www.facebook.com/groups/piaic/">
                  Facebook
                </Link>
                <Link href="https://twitter.com/piaicofficial?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                  Twitter
                </Link>
                <Link href="">Linkdin</Link>
                <Link href="">Youtube</Link>
                <Link href="">Github</Link>
              </Grid>
            </Box>
            <Box>
              <Heading
                textAlign={{ base: "center", lg: "start" }}
                color="white"
                pb={{ lg: "40px", base: "10px" }}
              >
                Contact Us
              </Heading>
              <Grid
                color="white"
                fontSize="xl"
                textAlign={{ base: "center", lg: "start" }}
              >
                <HStack>
                  <PhoneIcon />
                  <Link href="">092-312-6336271</Link>
                </HStack>
                <HStack>
                  <Image src={discord} alt={"icon"} width="20" height="10" />
                  <Link href="">RMUSAMAMUKHTAR</Link>
                </HStack>
                <HStack>
                  <EmailIcon />
                  <Link href="">RMUSAMAMUKHTAR@GMAIL.COM</Link>
                </HStack>
              </Grid>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
      <Box
        bgImage="https://wallpapercrafter.com/desktop/57844-simple-background-pink-dark-hd.jpg"
        display={{ lg: "none", base: "Flex" }}
      >
        <Container>
          <SimpleGrid>
            <Box>
              <Heading color="white">Follow Us</Heading>
            </Box>
            <Divider mb="10px" orientation="horizontal" />
            <Box>
              <Flex gap="20px">
                <Link href="https://www.facebook.com/groups/piaic/">
                  <Icon as={FaFacebook} w={8} h={8} color="white" />
                </Link>
                <Link href="https://www.youtube.com/@panaverse">
                  <Icon as={FaYoutube} w={8} h={8} color="red" />
                </Link>
                <Link href="">
                  <Icon as={FaDiscord} w={8} h={8} color="white" />
                </Link>
                <Link href="https://api.whatsapp.com/send?phone=+923082220203">
                  <Icon as={FaWhatsapp} w={8} h={8} color="lightgreen" />
                </Link>
                <Link href="https://pk.linkedin.com/company/piaicofficial">
                  <Icon as={FaLinkedin} w={8} h={8} color="lightblue" />
                </Link>
              </Flex>
            </Box>
            <Box></Box>
            <Box></Box>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
