import { Flex, Heading} from "@chakra-ui/react";
import React from "react";
import style from "./styles/Map.module.css"

function Map() {
   return (
      <div className={`${style.bgImage} ${style.img1}`}>
         <div className="googleMapCode">
         <Flex 
         pb={2}
         flexDir={"column"}
         align={"center"}>
               <Heading as='h1' size='lg' font="heading" p={5}>Where are we located?</Heading>
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.7870765752077!2d-122.24945408474599!3d37.865272214720676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857c347bc91fa9%3A0x373094993fa67261!2sGolden%20Bears%20Softball%20Field!5e0!3m2!1sen!2sca!4v1656707643246!5m2!1sen!2sca" 
               width="80%" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
               title="googleMaps"></iframe>
         </Flex>
         </div>
      </div>
   )
}
    
export default Map