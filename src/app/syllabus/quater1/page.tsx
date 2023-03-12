"use client";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Card,
  CardBody,
  CardHeader,
  StackDivider,
  Flex,
  Avatar,
  WrapItem,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import Home from "@/app/components/home";
import Link from "next/link";
// Replace test data with your own
const features = Array.apply(null, Array(8)).map(function (x, i) {
  return {
    id: i,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
  };
});

export default function GridListWithHeading() {
  return (
    <>
      <Home
        bgImage="https://wallpapercrafter.com/desktop/57844-simple-background-pink-dark-hd.jpg"
        title="Quarter I"
        color="white"
        basewc
      />
      <Box>
        <Stack spacing={4} as={Container} maxW={"1400"} textAlign={"left"}>
          <Heading fontSize={"5xl"}>
            CS-101: Object-Oriented Programming using TypeScript
          </Heading>
          <Text color={"gray.600"} fontSize={"3xl"}>
            We will start the program by learning the fundamentals of
            Object-Oriented programming using JavaScript and TypeScript. We will
            also understand the latest Web trends i.e. Web 3.0 and Metaverse
            concepts and try to understand their working from the perspective of
            the users.
          </Text>
        </Stack>
      </Box>
      <Box>
        <Container maxW="1400">
          <Card>
            <CardHeader>
              <Heading size="xl">Syllabus</Heading>
            </CardHeader>

            <CardBody bgColor="white">
              <Stack divider={<StackDivider />} spacing="4">
                <Box display="flex">
                  <Box flexBasis="5%">
                    <WrapItem>
                      <Avatar
                        size="sm"
                        name="Kent Dodds"
                        src="https://wallpapercrafter.com/desktop/57844-simple-background-pink-dark-hd.jpg"
                      />{" "}
                    </WrapItem>
                  </Box>
                  <Box flexBasis="95%">
                    <Heading size="lg" textTransform="uppercase">
                      HTML AND CSS BY HIRA KHAN
                    </Heading>
                    <Text pt="2" fontSize="2xl" color="teal">
                      <Link
                        color="teal"
                        href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                      >
                        Learn HTML by Hira Khan (Watch Recorded Videos)
                      </Link>
                    </Text>
                    <Text pt="2" fontSize="2xl" color="teal">
                      <Link
                        color="teal"
                        href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob"
                      >
                        Learn CSS Intro by Hira Khan (Watch Recorded Videos)
                      </Link>
                    </Text>
                  </Box>
                </Box>
                <Box display="flex">
                  <Box flexBasis="5%">
                    <WrapItem>
                      <Avatar
                        size="sm"
                        name="Kent Dodds"
                        src="https://wallpapercrafter.com/desktop/57844-simple-background-pink-dark-hd.jpg"
                      />{" "}
                    </WrapItem>
                  </Box>
                  <Box flexBasis="95%">
                    <Heading size="xl" textTransform="uppercase">
                      Web 3.0 and Metaverse Theory
                    </Heading>
                    <Text pt="2" fontSize="2xl" color="teal">
                      <Link
                        color="teal"
                        href="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit#slide=id.p"
                      >
                        Introduction to Panaverse DAO Slides
                      </Link>
                    </Text>
                    <Text pt="2" fontSize="2xl" color="teal">
                      <Link
                        color="teal"
                        href="https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit#slide=id.p"
                      >
                        Web 3.0 User Guide Slides
                      </Link>
                    </Text>
                    <Text pt="2" fontSize="2xl" color="teal">
                      <Link
                        color="teal"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdmDMFJNmqdQWNr5fKYrSoZ1u6MbZ4anHGU43yAggX3j2TXKg/viewform?edit2=2_ABaOnude-T6_NQXxxkvzukWrC-yh4BnHCYT8ps03C3yzscbTYrPDrVRiORXaKKuswA"
                      >
                        Complete Web 3 Assignments included in the Web 3 User
                        Guide
                      </Link>
                    </Text>
                  </Box>
                </Box>
                <Box display="flex">
                  <Box flexBasis="5%">
                    <WrapItem>
                      <Avatar
                        size="sm"
                        name="Kent Dodds"
                        src="https://wallpapercrafter.com/desktop/57844-simple-background-pink-dark-hd.jpg"
                      />{" "}
                    </WrapItem>
                  </Box>
                  <Box display="flex">
                    <Box flexBasis="95%">
                      <Heading size="lg" textTransform="uppercase">
                        Fundamentals of JavaScript (ECMAScript 2022 Language
                        Specification)
                      </Heading>
                      <Text pt="2" fontSize="2xl" color="teal">
                        <Link
                          color="teal"
                          href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo"
                        >
                          Learn JavaScript by Zeeshan Hanif (Watch Recorded
                          Videos)
                        </Link>
                      </Text>
                      <Text pt="2" fontSize="2xl" color="teal">
                        <Link
                          color="teal"
                          href="https://www.youtube.com/watch?v=a7mD_fkRvtM&list=PL0vKVrkG4hWppb4aVxwVnovf0cbPNPDm1"
                        >
                          Learn Javascript by Sir ADIL and HIRA KHAN
                        </Link>
                      </Text>
                      <Text pt="2" fontSize="2xl" color="teal">
                        <Link
                          color="teal"
                          href="https://www.youtube.com/watch?v=o5mpd0iRhDA&list=PL0vKVrkG4hWpJzo958iUh7TJVZkPNBDXV"
                        >
                          Learn Javascript by Sir Daniyal Nagori
                        </Link>
                      </Text>
                      <Text pt="2" fontSize="2xl" color="teal">
                        <Link
                          color="teal"
                          href="https://drive.google.com/drive/folders/1YFqpIDBMfS1Pg_feXN8B-pYc_UWuH8v3?usp=share_link"
                        >
                          JavaScript Book Pdf
                        </Link>
                      </Text>
                      <Text pt="2" fontSize="2xl" color="teal">
                        <Link
                          color="teal"
                          href="https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional"
                        >
                          JavaScript Book ChapterWise Github Repository
                        </Link>
                      </Text>

                      <Text pt="2" fontSize="2xl" color="teal">
                        <Link
                          color="teal"
                          href="https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md"
                        >
                          JavaScript First Assignment
                        </Link>
                      </Text>
                    </Box>
                  </Box>
                </Box>

                <Box display="flex">
                  <Box flexBasis="5%">
                    <WrapItem>
                      <Avatar
                        size="sm"
                        name="Kent Dodds"
                        src="https://wallpapercrafter.com/desktop/57844-simple-background-pink-dark-hd.jpg"
                      />{" "}
                    </WrapItem>
                  </Box>
                  <Box flexBasis="95%">
                    <Box>
                      <Heading size="lg" textTransform="uppercase">
                        Fundamentals of Typscript
                      </Heading>

                      <Text pt="2" fontSize="2xl" color="teal">
                        <Link
                          color="teal"
                          href="https://www.youtube.com/watch?v=-vh4HS5JD9E&list=PL0vKVrkG4hWppb4aVxwVnovf0cbPNPDm1&index=7"
                        >
                          Learn Typescript by Sir ADIL and HIRA KHAN
                        </Link>
                      </Text>
                      <Text pt="2" fontSize="2xl" color="teal">
                        <Link
                          color="teal"
                          href="https://www.youtube.com/watch?v=3Ov4-8b554k&list=PLS2BJK3gML7tTcwRD9b-hUx_922Wak5Oz"
                        >
                          Typescript Assignment by TA Ahmed Raza
                        </Link>
                      </Text>
                      <Text pt="2" fontSize="2xl" color="teal">
                        <Link
                          color="teal"
                          href="https://drive.google.com/file/d/1OE7uuJ3d1FLI9O3td9sMg4gvaP43LUR-/view?usp=share_link"
                        >
                          Typescript Book Pdf
                        </Link>
                      </Text>
                      <Text pt="2" fontSize="2xl" color="teal">
                        <Link
                          color="teal"
                          href="hhttps://github.com/panaverse/typescript-node-projects"
                        >
                          TypeScript Asignment Github Repository
                        </Link>
                      </Text>

                      <Text pt="2" fontSize="2xl" color="teal">
                        <Link
                          color="teal"
                          href="https://docs.google.com/forms/d/e/1FAIpQLSdmDMFJNmqdQWNr5fKYrSoZ1u6MbZ4anHGU43yAggX3j2TXKg/viewform?edit2=2_ABaOnude-T6_NQXxxkvzukWrC-yh4BnHCYT8ps03C3yzscbTYrPDrVRiORXaKKuswA"
                        >
                          Typescript Assignment Submission Form
                        </Link>
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </Container>
      </Box>
    </>
  );
}
