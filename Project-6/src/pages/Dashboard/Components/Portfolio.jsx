import { Button, HStack, Icon, Stack, Tag } from '@chakra-ui/react'
import React from 'react'
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Text } from '@chakra-ui/react';
import { PiHandDepositBold } from "react-icons/pi";
import { PiHandWithdrawBold } from "react-icons/pi";


const Portfolio = () => {
  return (
    <HStack justify='space-between' mt='25px' bg='white' borderRadius='lg' p='6' 
    align={{
      base:"flex-start",
      xl:"center",
    }}
    flexDir={{
      base:"coloumn",
      xl:"row",
    }}>
        <HStack spacing={'16'} align={{
      base:"flex-start",
      xl:"center",
    }}
    flexDir={{
      base:"coloumn",
      xl:"row",
    }}>
        <Stack>
            <HStack color="black.80"><Text>Total Portfolio Value</Text><Icon as={IoMdInformationCircleOutline}/></HStack>
          <Text textStyle="h2">₹ 112,312.24 </Text>
        </Stack>
        <Stack>
            <HStack color="black.80"><Text>Wallet Balance</Text></HStack>
            <HStack spacing={8}>
            <HStack><Text textStyle="h2">22.39401000</Text><Tag>BTC</Tag></HStack>/
            <HStack><Text textStyle="h2">₹ 1,300.00</Text><Tag>INR</Tag></HStack>
            </HStack>
        </Stack>
        </HStack>
        
        <HStack mb={'4'}>
          <Button leftIcon={<Icon as={PiHandDepositBold} />}>Deposit</Button>
          <Button leftIcon={<Icon as={PiHandWithdrawBold} />}>Withdraw</Button>
        </HStack>
    </HStack>
  )
}

export default Portfolio