import React from 'react';
import {Box} from '@chakra-ui/react'

/* 
Author: Frank Jin
Background for the website.
*/
function Background() {
    return (
        <div>
            <Box 
            position={"absolute"} top={'0px'} left={'0px'} 
            zIndex={'-1'} w='100%' h='100vh' 
            bgGradient='linear(to-l, #FFEC98, #D69CCD, #4E92FF)'/>
        </div>
    )
}
export default Background