import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  useDisclosure,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { EmailIcon, SearchIcon } from "@chakra-ui/icons";
import { HiBookOpen, HiOutlineMail } from "react-icons/hi";
import { IoInformationCircleOutline } from "react-icons/io5";
import { BsHouseDoorFill } from "react-icons/bs";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";
import React from "react";
// import logo from "../../../public/logo.png";
export default function Header() {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box boxShadow="lg">
      <Container maxW="100%">
        <SimpleGrid
          templateColumns={{ lg: "repeat(3, 1fr)", base: "repeat(2, 1fr)" }}
        >
          <Box>
            <Link href="../">
              <Image src={logo} alt="panalogo" width="150" height="150" />
            </Link>
          </Box>
          <Flex
            display={{ base: "none", lg: "flex" }}
            placeItems="center"
            color="black"
            fontSize="18"
            fontWeight="semibold"
            gap="10"
          >
            <Link href="/">HOME</Link>
            <Link href="../syllabus">SYLLABUS</Link>
            <Link href="../explore">EXPLORE</Link>
            <Link href="../about">ABOUT</Link>
            <Link href="../contact">CONTACT</Link>
          </Flex>
          <Box display={{ base: "none", lg: "initial" }}>
            <EmailIcon boxSize={6} color="white" />
            <Button mt="20px" size="lg" float="right" colorScheme="teal">
              <Link href="https://portal.piaic.org/signup">Apply</Link>
            </Button>
          </Box>
          <Box float="right" display={{ lg: "none", base: "initial" }}>
            <Button colorScheme="teal" onClick={onOpen} mt="25px" float="right">
              Menu <HamburgerIcon />
            </Button>
            <Drawer onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent
                bgImage="https://wallpapercrafter.com/desktop/57844-simple-background-pink-dark-hd.jpg"
                bgPosition="center"
                color="white"
              >
                <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
                <DrawerBody>
                  <ul>
                    <HStack mt="5px" mb="5px">
                      <Icon as={BsHouseDoorFill} w={8} h={8} color="white" />
                      <Link href="/">HOME</Link>
                    </HStack>
                    <HStack mt="5px" mb="5px">
                      <Icon as={HiBookOpen} w={8} h={8} color="white" />
                      <Link href="/syllabus">SYLLABUS</Link>
                    </HStack>
                    <HStack mt="5px" mb="5px">
                      <Icon as={SearchIcon} w={8} h={8} color="white" />
                      <Link href="/explore">EXPLORE</Link>
                    </HStack>
                    <HStack mt="5px" mb="5px">
                      <Icon
                        as={IoInformationCircleOutline}
                        w={8}
                        h={8}
                        color="white"
                      />
                      <Link href="/about">ABOUT</Link>
                    </HStack>
                    <HStack mt="5px" mb="5px">
                      <Icon as={HiOutlineMail} w={8} h={8} color="white" />
                      <Link href="https://api.whatsapp.com/send?phone=+923082220203">
                        CONTACT
                      </Link>
                    </HStack>
                  </ul>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
