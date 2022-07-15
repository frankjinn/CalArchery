import React from "react";
import { Box, Flex, HStack, IconButton } from "@chakra-ui/react";
import { AiFillMail } from 'react-icons/ai';
import { FaFacebookF, FaInstagram } from "react-icons/fa";


function footer() {
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
    return (
        <Flex
        direction={"column"}
        bgGradient='linear(to-l, #FFEC98, #D69CCD, #4E92FF)'
        align="center"
        p={2}>
            <Box p={2}>
                <h1>Logo</h1>
            </Box>
            <HStack 
            p={0}>
                <IconButton
                    variant='solid'
                    colorScheme='facebook'
                    aria-label='Instagram'
                    as={FaFacebookF}
                    onClick={() => openInNewTab("https://www.instagram.com/")}
                    p={1}
                    
                />
                <IconButton
                    variant='solid'
                    colorScheme='red'
                    aria-label='Instagram'
                    as={FaInstagram}
                    onClick={() => openInNewTab("https://www.instagram.com/")}
                />
                <IconButton
                    variant='solid'
                    colorScheme='teal'
                    aria-label='Instagram'
                    as={AiFillMail}
                    onClick={() => openInNewTab("https://www.instagram.com/")}
                />
            </HStack>
        </Flex>
    
    )
}
export default footer