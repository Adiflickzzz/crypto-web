import { Box, HStack, Heading, Icon, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";

const Sidenav = () => {
  
    const navLinks = [
        {
        icon: TbLayoutDashboardFilled,
        text: "Dashboard",
        link: "/",
        },
        {
        icon: GrTransaction,
        text: "Transaction",
        link: "/transactions",
        },
    ];
  
    return (
    <Stack justify="space-between" 
    boxShadow={{
        base:"none",
        lg:"lg",
    }} 
    w={{
        base:"full",
        lg:"16rem"
    }} minH='100vh' bg='white'>
        <Box>
        <Heading textAlign='center' as="h1" fontSize="20px" pt="3.5rem">@ADIFLICKS</Heading>
        <Box mt='6'mx='3'>
        {navLinks.map((nav)=>(
                <HStack borderRadius='10px' color='#797e82' mx="3" key={nav.text} py='3' px='4' _hover={
                    {
                        bg:"#F3F3F7",
                        color: "#171717"
                    }}>
                    <Icon as={nav.icon}/>
                    <Text fontSize='14px' fontWeight="medium" >{nav.text}</Text>
                </HStack>
            ))}
        </Box>
        </Box>

        <Box mt='6'mx='3'mb='6'>
        <HStack borderRadius='10px' color='#797e82' mx="3" py='3' px='4' _hover={
                    {
                        bg:"#F3F3F7",
                        color: "#171717"
                    }}>
                    <Icon as={BiSupport}/>
                    <Text fontSize='14px' fontWeight="medium" >Support</Text>
        </HStack>
        </Box>
    </Stack>
    );
};

export default Sidenav;