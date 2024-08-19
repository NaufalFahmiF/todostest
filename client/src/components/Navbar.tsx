import { Box, Flex, Button, useColorModeValue, useColorMode, Text, Container} from "@chakra-ui/react";
import { IoLibrary, IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { useState, useEffect } from "react";


export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
      setCurrentDate(new Date().toLocaleDateString());
    }, 1000); // update every second
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container maxW={"900px"}>
      <Box bg={useColorModeValue("gray.300", "gray.700")} px={4} my={4} borderRadius={"5"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"} >
          {/* LEFT SIDE */}
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            gap={3}
            display={{ base: "flex", sm: "flex" }}
          >
            <Text 
            fontSize={{ base: "15px", md: "20px"}} 
            fontWeight={500} 
            bgGradient='linear(to-l, #7a2aCd, #FF0080)' 
            bgClip='text'
            >
              Daily Tasks
            </Text>
            <Flex flexDirection="column" alignItems="flex-start">
              <Text fontSize={{ base: "12px", md: "17px" }} fontWeight={"bold"}>
                {currentDate}
              </Text>
              <Text fontSize={{ base: "12px", md: "17px"}} fontWeight={"bold"}>
                {currentTime}
              </Text>
            </Flex>
          </Flex>

          {/* RIGHT SIDE */}
          <Flex alignItems={"right"} gap={5} justify={"right"}>
            {/* Toggle Color Mode */}
            <Button onClick={toggleColorMode} >
              <IoLibrary />
            </Button>
            <Button onClick={toggleColorMode} >
              {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
}