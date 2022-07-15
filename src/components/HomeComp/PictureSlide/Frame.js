import React from "react";
import {Flex, Box} from '@chakra-ui/react';
import Gallery from './Gallery'

function Frame(){
    return(
        <Flex p={1} w="full" h="full" alignItems="center" justifyContent="end">
            <Box
                bgColor={"white"}
                w= {"90%"}
                h={"90%"}
                maxW="sm"
                borderWidth="2px"
                rounded="lg"
                shadow="lg"
                position="relative"
                mr={"10vw"}
                >
                    <Flex alignItems={"flex-start"} pt={8} height={"100%"}>
                        <Gallery/>
                    </Flex>
                </Box>
        </Flex>
    )
}

export default Frame