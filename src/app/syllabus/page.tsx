"use client";
import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import Courses from "../components/courses";
import Home from "../components/home";

export default function page() {
  return (
    <>
      <Home
        title="SYLLABUS"
        color="white"
        basewc="200"
        src="https://wallpapercrafter.com/desktop/57844-simple-background-pink-dark-hd.jpg"
      />
      <Box bgColor="whitesmoke">
        <Container maxW="1400">
          <Flex>
            <Box py="20px">
              <Courses />
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
