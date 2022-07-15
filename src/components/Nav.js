import React from "react";
import {Flex, Link} from '@chakra-ui/react';
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
                    <Link className={style['navLink']} to="/about"><NavButton name="About"/></Link>
                    <Link className={style['navLink']} to="/"><NavButton name="Home" icon={AiOutlineHome}/></Link>
                    <Link className={style['navLink']} to="/ascent"><NavButton name="Ascent" icon={BsChevronDoubleUp}/></Link>
                    <Link className={style['navLink']} to="/resources"><NavButton name="Resources" icon={DownloadIcon}/></Link>

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