import React from 'react'
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import Sidenav from './Sidenav'

const SideDrawer = ({isOpen,onClose}) => {

  
    return (
      <>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>
  
            <DrawerBody>
                <Sidenav />
            </DrawerBody>
  
            <DrawerFooter>
              
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
}

export default SideDrawer