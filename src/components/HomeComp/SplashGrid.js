/* 
Author: Frank Jin
The grid setup for the splashpage of the homepage.
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
              <h1 className={style.title} style = {{color : "#edc25c"}}>Who We Are</h1>
              <Text className={style.desc} style = {{color : "white", fontWeight : "700"}}>
                We're a community of students passionate about archery. Made out of barebow, olympic recurve, and compound archers, we compete nationally in various competitions with east coast universities and other universities around the country. 
              </Text>
              <Button 
              colorScheme='yellow' 
              variant='solid'>
                <a href="http://localhost:3000/about">More About Us</a>
              </Button>
            </div>
          </div>

          <div className={`${style.bgImage}`} style = {{backgroundColor : "white"}}>
            <div className={style.body}>
              <h1 className={style.title} style = {{color : "grey"}}>Our History</h1>
              <Text className={style.desc}>
                Cal Archery was one of the 1st recreational collegiate archery teams to become established on the west coast. Our team has lead the Western Region in competitiveness and we've also helped a large number of other west coast teams get started. Cal Archery began about 15 years ago and we've grown tremendously ever since. Our team is always excited to accept new club members, whether or not you are a beginner or a very advanced archer. We provide all necessary equipment, which supports archers of all levels and skills.</Text>
            </div>
          </div>

          <div className={`${style.bgImage} ${style.img2}`}>
            <div className={style.body}>
              <h1 className={style.title} style = {{color : "#4169e1"}}>New to Archery?</h1>
              <Text className={style.desc} style = {{color : "white", fontWeight : "700"}}>
                Run in the first two months of the semester, you can learn how to shoot from the ground up! ASCENT is a beginner program where our most advanced archers and coaches help you improve your shooting skills. All equipment is provided, and you'll be starting off with lots of friends who are also just beginning to shoot. </Text>
              <Button 
              colorScheme='blue' 
              variant='solid'>
                <a href="http://localhost:3000/ascent">ASCENT</a>
              </Button>
            </div>
          </div>
       </div>
    )
}

export default GridMap