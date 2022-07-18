/* 
Author: Frank Jin
Background for the homepage. It is a animated background which can be modified in css.
*/

import React from 'react';
import {Box} from '@chakra-ui/react';
import style from "./styles/Background.module.css";
function Background() {
    return (
        <div>
            <Box 
            position={"absolute"} top={'0px'} left={'0px'} 
            zIndex={'-2'} w='100%' h='100%' 
            className={style['gradient-background']}
            />
        </div>
    )
}
export default Background