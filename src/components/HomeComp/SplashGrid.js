/* 
Author: Frank Jin
Gridmap for the layout of the website.
*/

import React from "react";
import { Grid, GridItem, Text, Button } from "@chakra-ui/react";
import Frame from './PictureSlide/Frame'
import style from "./styles/SplashGrid.module.css"

function GridMap() {
    return (
      <div>
        <Grid
          h='85vh'
          w='auto'
          templateRows='repeat(5, 1fr)'
          templateColumns='repeat(8, 1fr)'
          gap={3}
          mb={3}
          mt={3}
          pt={2}
          pl={2}
          templateAreas={`
          "main main main main picture picture picture picture"
          "main main main main picture picture picture picture"
          "main main main main picture picture picture picture"
          "main main main main picture picture picture picture"
          "main main main main picture picture picture picture"
          `}
          >
            <GridItem area={'main'} className={style.mainLogo} bg='tomato'>
              <Text>Room for Logo Here</Text>
            </GridItem>
            <GridItem area={'picture'} className={style.photos} bg='papayawhip' mr={2}>
              <Frame/>
            </GridItem>
        </Grid>
          <div className={`${style.bgImage} ${style.img1}`}>
            <div className={style.body}>
              <h1 className={style.title}>Who are we</h1>
              <Text className={style.desc}>Stuff about the club</Text>
              <Button 
              colorScheme='yellow' 
              variant='solid'>
                <a href="http://localhost:3000/about">Learn More</a>
              </Button>

            </div>
          </div>
       </div>
    )
}

export default GridMap