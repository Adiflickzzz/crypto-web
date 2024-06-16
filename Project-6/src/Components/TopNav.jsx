import React from 'react'
import { Heading,Menu,MenuButton,MenuItem,MenuList, HStack ,Box, Icon} from '@chakra-ui/react'
import { FaRegCircleUser } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";

const TopNav = ({ title,onOpen }) => {
  return (
    <Box px='4' bg='white'>
        <HStack maxW='70rem' mx='auto' h='16' justify='space-between' >
        <Icon as={FaBars} onClick={onOpen} display={{
          base:"block",
          lg: "none",
        }} />
        <Heading fontWeight='medium' fontSize='28px'>{title}</Heading>
        <Menu>
            <MenuButton>
                <Icon fontSize={'24px'} as={FaRegCircleUser}/>
            </MenuButton>
            <MenuList>
                <MenuItem>Logout</MenuItem>
                <MenuItem>Support</MenuItem>
            </MenuList>
        </Menu>
</HStack>
    </Box>
  )
}

export default TopNav;