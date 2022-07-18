/*
    The footer for the website. Includes the icons.
*/
import React from "react";
import { Box, Button, Flex, HStack, IconButton, Text } from "@chakra-ui/react";
import { AiFillMail } from 'react-icons/ai';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import style from "./styles/Footer.module.css";


function Footer() {
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    function emailButton(){
        navigator.clipboard.writeText("some email").then(() => {
            console.log("copied");
            alert("Email Copied!")
        });
    }

    return (
        <Flex
        direction={"column"}
        align="center"
        p={2}>
            <Box p={2}>
                <h1>Logo</h1>
            </Box>
            <HStack 
            p={0}>
                <IconButton
                    variant='solid'
                    colorScheme='red'
                    aria-label='Instagram'
                    as={FaInstagram}
                    onClick={() => openInNewTab("https://www.instagram.com/calarcheryclub/?hl=en")}
                />
                <IconButton
                    variant='solid'
                    colorScheme='facebook'
                    aria-label='Facebook'
                    as={FaFacebookF}
                    onClick={() => openInNewTab("https://www.facebook.com/calarchery/")}
                    p={1}
                />
                <IconButton
                    variant='solid'
                    colorScheme='teal'
                    aria-label='Email'
                    as={AiFillMail}
                    onClick={emailButton}>
                </IconButton>
            </HStack>
        </Flex>
    
    )
}
export default Footer