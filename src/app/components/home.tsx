"use client";
import { Box, Container, Heading, Image } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
export default function Home(hello: any) {
  return (
    <Box
      bgImage="https://wallpapercrafter.com/desktop/57844-simple-background-pink-dark-hd.jpg"
      bgSize="cover"
      py={{ lg: "50px", base: "10px" }}
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Container maxW={{ lg: "250", base: hello.basewc }} alignContent="center">
        <Heading color="White">{hello.title}</Heading>
      </Container>
    </Box>
  );
}
