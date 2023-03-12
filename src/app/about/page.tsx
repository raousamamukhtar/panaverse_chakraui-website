"use client";
import {
  Text,
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Button,
} from "@chakra-ui/react";
import React from "react";
import Home from "../components/home";
export default function page() {
  return (
    <>
      <Home
        title="ABOUT"
        basewc="150"
        color="white"
        src="https://wallpapercrafter.com/desktop/57844-simple-background-pink-dark-hd.jpg"
      />
      <Box textAlign={{ base: "center" }}>
        <Container maxW="100%" px={{ lg: "250px", base: "20px" }}>
          <Flex display={{ lg: "flex", base: "grid" }}>
            <Box
              flexBasis={{ lg: "50%", base: "20%" }}
              mt="30px"
              pl={{ lg: "initial", base: "80px" }}
            >
              <Image src="https://panaverse-by-ahmed.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPresident.6b9aa486.png&w=384&q=75" />
            </Box>
            <Box
              flexBasis={{ lg: "50%" }}
              mt={{ lg: "30px", base: "0px" }}
              pr="0px"
              fontSize={{ lg: "lg", base: "15px" }}
            >
              <Heading>Dr. Arif Alvi</Heading>
              <Text mt="10px" textAlign={{ base: "left" }}>
                Dr. Arif Alvi was sworn in as the 13th President of Islamic
                Republic of Pakistan on 9th September 2018.
              </Text>
              <Text mt="10px" textAlign={{ base: "left" }}>
                Dr. Arif Alvi was born in 1949 and completed his early education
                in Karachi. He did his Bachelor of Dental Surgery (BDS) from De’
                Montmorency College of Dentistry, Lahore where he was declared
                the “Best Graduate”. He completed his Masters of Science in the
                field of Prosthodontics from University of Michigan (1975) and
                in Orthodontics from University of Pacific, San Francisco
                (1982). He was awarded fellowship ‘Diplomatic American Board of
                Orthodontists (1995)’.
              </Text>
              <Text mt="10px" textAlign={{ base: "left" }}>
                President Dr. Arif Alvi has been a renowned professional and has
                held many important positions in the field of Dentistry. He
                remained Dean of Orthodontics, College of Physicians and
                Surgeons of Pakistan, President, Pakistan Dental Association
                (1997-2001), Pakistan Association of Orthodontists (2005), Asia
                Pacific Dental Federation (2006-07) and Councilor of the World
                Dental Federation (2007-2013). Through his sheer hard work in
                the World Dental Federation, he was able to get the declaration
                of 20th March as World Oral Health Day. He is also an author of
                a book, theses, and many articles.
              </Text>
              <Button colorScheme="teal" mt="10px">
                More Info
              </Button>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box textAlign={{ base: "center" }}>
        <Container maxW="100%" px="40px" pb="10px">
          <Flex display={{ lg: "flex", base: "grid" }}>
            <Box
              display={{ lg: "none", base: "grid" }}
              flexBasis="50%"
              mt="100px"
              pl="40px"
            >
              <Image src="https://panaverse-by-ahmed.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo5.ecb63f00.png&w=640&q=75" />
            </Box>
            <Box
              flexBasis="50%"
              mt="30px"
              pr={{ lg: "150px", base: "0px" }}
              fontSize="lg"
            >
              <Heading display={{ lg: "initial", base: "none" }}>
                Panaverse DAO
              </Heading>
              <Text mt="10px" textAlign={{ base: "left" }}>
                Panaverse DAO is a community of Web 3 and Metaverse developers,
                designers, trainers, startup founders and service providers.
                Panaverse DAO is struggling to produce professional metaverse
                developers from Pakistan for the upcoming Era of Internet
              </Text>
              <Text mt="10px" textAlign={{ base: "left" }}>
                President Dr. Arif Alvi has been a renowned professional and has
                held many important positions in the field of Dentistry. He
                remained Dean of Orthodontics, College of Physicians and
                Surgeons of Pakistan, President, Pakistan Dental Association
                (1997-2001), Pakistan Association of Orthodontists (2005), Asia
                Pacific Dental Federation (2006-07) and Councilor of the World
                Dental Federation (2007-2013). Through his sheer hard work in
                the World Dental Federation, he was able to get the declaration
                of 20th March as World Oral Health Day. He is also an author of
                a book, theses, and many articles.
              </Text>
              <Text mt="10px" textAlign={{ base: "left" }}>
                President Dr. Arif Alvi has been a renowned professional and has
                held many important positions in the field of Dentistry. He
                remained Dean of Orthodontics, College of Physicians and
                Surgeons of Pakistan, President, Pakistan Dental Association
                (1997-2001), Pakistan Association of Orthodontists (2005), Asia
                Pacific Dental Federation (2006-07) and Councilor of the World
                Dental Federation (2007-2013). Through his sheer hard work in
                the World Dental Federation, he was able to get the declaration
                of 20th March as World Oral Health Day. He is also an author of
                a book, theses, and many articles.
              </Text>
              <Button colorScheme="teal" mt="10px">
                More Info
              </Button>
            </Box>
            <Box
              display={{ lg: "flex", base: "none" }}
              flexBasis="50%"
              mt="100px"
              pl={{ lg: "40px" }}
            >
              <Image src="https://panaverse-by-ahmed.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo5.ecb63f00.png&w=640&q=75" />
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box textAlign={{ base: "center" }}>
        <Container maxW="100%" px={{ lg: "250px", base: "20px" }} pb="10px">
          <Flex display={{ lg: "flex", base: "grid" }}>
            <Box
              flexBasis="50%"
              mt="30px"
              width={{ base: "300px" }}
              height={{ base: "300px" }}
              ml={{ base: "0px" }}
            >
              <Image src="https://panaverse-by-ahmed.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FZia.cdaa2660.jpg&w=384&q=75" />
            </Box>
            <Box
              flexBasis="50%"
              mt="30px"
              pr="0px"
              fontSize="lg"
              textAlign={{ base: "left" }}
            >
              <Heading>Zia Khan</Heading>
              <Text mt="10px">
                CEO of Panacloud, the world’s first Integrated API Ownership
                Economy, Crowdfunding, and Development Platform. Volunteer COO
                of PIAIC, an initiative by the President of Pakistan for AI and
                computing mass education. Mentor and software developer with 20+
                years of expertise in cloud and serverless computing, software
                design, project management, and API and App development. Expert
                in concept, business modeling & strategy development for
                startups, specializing in DeFi and token economics. Mentored and
                trained hundreds of thousands of developers. Triple masters
                degrees in business administration, engineering, and finance
                from Arizona State University. Master in Economics from KU.
                Certified Public Accountant and Certified Management Accountant
                in USA.
              </Text>
              <Text mt="10px">
                Extensive experience in software architecture, design,
                development, implementation, and integration. Worked as a
                developer in Silicon Valley for 7 years. Hands-on work including
                thousands of hours of development work logged recently resulting
                in multiple successful projects for cutting edge startups like
                Panacloud, OpenPD, Datasplash, FreshAir Sensor, Tallyfy,
                Cloudspot, OnSeen, Unicharts, etc.
              </Text>
              <Button colorScheme="teal" mt="10px">
                More Info
              </Button>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
