/* 
Author: Frank Jin
Gridmap for the layout of the website.
*/

import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Frame from './PictureSlide/Frame'
import Background from "./Background";
function GridMap() {
    return (
      <div>
        <Background></Background>
        <Grid
          h='85vh'
          templateRows='repeat(6, 1fr)'
          templateColumns='repeat(8, 1fr)'
          gap={3}
          pt={2}
          pl={2}
          templateAreas={`
          "main main main picture picture picture picture picture"
          "main main main picture picture picture picture picture"
          "main main main picture picture picture picture picture"
          "main main main picture picture picture picture picture"
          "main main main picture picture picture picture picture"
          `}
          >
            <GridItem area={'main'} bg='tomato'/>
            <GridItem area={'picture'} bg='papayawhip' mr={2}>
              <Frame/>
            </GridItem>
        </Grid>
       </div>
    )
}

export default GridMap