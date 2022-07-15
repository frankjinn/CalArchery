import React from "react";
import {Flex, Box} from '@chakra-ui/react';
import NavButton from "./NavComp/NavButton";
import style from "./NavComp/styles/Nav.module.css"

import { AiOutlineHome } from 'react-icons/ai'
import { BsChevronDoubleUp } from 'react-icons/bs'
import { DownloadIcon } from '@chakra-ui/icons'

function Navagation() {
    const defaultScaling = { base: '0.75rem', md: '1rem', lg: '1.5rem' };
    return (
        <div>
            <Box 
            position={"absolute"} top={'0px'} left={'0px'} 
            zIndex={'-1'} w='100%' h='100vh' 
            bgGradient='linear(to-l, #FFEC98, #D69CCD, #4E92FF)'/>
            
            <Flex className={style['container']} fontSize={defaultScaling} zIndex={1}>
                <Flex className={style['logo']} > Logo </Flex>
                <div className={style['spacer']}></div>
                <Flex className={style['navBar']} padding = {defaultScaling}>
                                <NavButton name="Home" icon={AiOutlineHome}/>
                                <NavButton name="About"/>
                                <NavButton name="Ascent" icon={BsChevronDoubleUp}/>
                                <NavButton name="Resources" icon={DownloadIcon}/>
                </Flex>
            </Flex>
        </div>
    )
}

export default Navagation;