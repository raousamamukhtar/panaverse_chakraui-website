import {
  Text,
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Box,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { data } from "../components/Syllabusdata";
interface data {
  id: number;
  src: string;
  heading: string;
  text: string;
}

export default function Courses() {
  return (
    <>
      <Box px={{ lg: "2px", base: "10px" }}>
        <SimpleGrid
          gap="30px"
          gridTemplateColumns={{ lg: "repeat(3,1fr)", base: "repeat(1,1fr)" }}
          textAlign={{ lg: "initial", base: "center" }}
        >
          {data.map((ins: any) => (
            <Card maxW="sm" key={ins.key}>
              <CardBody>
                <Box pl={{ lg: "50px", base: "10px" }}>
                  <Image
                    src={ins.src}
                    alt="Green double couch with wooden legs"
                    width="200"
                    height="100"
                  />
                </Box>
                <Stack
                  mt="6"
                  spacing="3"
                  display={{ lg: "initial", base: "none" }}
                >
                  <Heading size="md">{ins.heading}</Heading>
                  <Text>{ins.text}</Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter textAlign={{ lg: "initial", base: "center" }}>
                <ButtonGroup
                  spacing={{ lg: "2", base: "none" }}
                  pl={{ lg: "10px", base: "0px" }}
                >
                  <Button
                    bgColor="teal"
                    width={{ lg: "30", base: "30" }}
                    px={{ lg: "10px", base: "20px" }}
                    py={{ lg: "10px", base: "none" }}
                    variant="solid"
                    colorScheme="teal"
                    alignItems={{ lg: "initial", base: "center" }}
                  >
                    <Link href={ins.link}>DETAILS</Link>
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}
