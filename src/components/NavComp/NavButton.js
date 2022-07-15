/* 
Author: Frank Jin
Buttons for the Navbar
*/
import React from "react";
import {Button, Icon} from "@chakra-ui/react"

function NavButton(props) {
    const defaultScaling = { base: '0.75rem', md: '1rem', lg: '1.5rem' };
    return(
        <div>
            <Button m={defaultScaling} colorScheme='teal' variant='solid'
             borderRadius={"full"} to>
                 <Icon mr={"10px"} as={props.icon}/>
                {props.name}
            </Button>
        </div>

    )
}

export default NavButton