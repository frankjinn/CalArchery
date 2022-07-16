import React from "react";
import {Flex, Link} from '@chakra-ui/react';
import {Link as ReactRouterLink} from 'react-router-dom'
import NavButton from "./NavComp/NavButton";
import style from "./NavComp/styles/Nav.module.css";

import { AiOutlineHome } from 'react-icons/ai';
import { BsChevronDoubleUp } from 'react-icons/bs';
import { DownloadIcon } from '@chakra-ui/icons';

function Navagation() {
    const defaultScaling = { base: '0.75rem', md: '1rem', lg: '1.5rem' };
    return (
        <div>
            <Flex className={style['container']} fontSize={defaultScaling} zIndex={1}>
                <Flex className={style['logo']} > Logo </Flex>
                <div className={style['spacer']}></div>
                <Flex className={style['navBar']} padding = {defaultScaling} textDecoration="none">
                <Link as={ReactRouterLink} to="/" style={{ textDecoration: 'none' }}><NavButton name="Home" icon={AiOutlineHome}/></Link>
                <Link as={ReactRouterLink} to="/about" style={{ textDecoration: 'none' }}><NavButton name="About"/></Link>
                <Link as={ReactRouterLink} to="/ascent" style={{ textDecoration: 'none' }}><NavButton name="Ascent" icon={BsChevronDoubleUp}/></Link>
                <Link as={ReactRouterLink} to="/resources" style={{ textDecoration: 'none' }}><NavButton name="Resources" icon={DownloadIcon}/></Link>

                                {/* <NavButton name="Home" icon={AiOutlineHome}/>
                                <NavButton name="About"/>
                                <NavButton name="Ascent" icon={BsChevronDoubleUp}/>
                                <NavButton name="Resources" icon={DownloadIcon}/> */}
                </Flex>
            </Flex>
         </div>
    )
}

export default Navagation;