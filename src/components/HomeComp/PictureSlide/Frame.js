/*
Frame for the sliding gallary
*/
import React from "react";
import {Flex, Box} from '@chakra-ui/react';
import Gallery from './Gallery'

function Frame(){
    return(
            <Box
                bgColor={"white"}
                w= 'lg'
                h= 'lg'
                maxW="sm"
                borderWidth="2px"
                rounded="lg"
                shadow="lg"
                position="relative"
                >
                    <Flex alignItems={"flex-start"} pt={8} height={"100%"}>
                        <Gallery/>
                    </Flex>
                </Box>
    )
}
export default Frame