import React from 'react'
import {Text, Heading} from '@chakra-ui/react'
import Carousel from 'better-react-carousel'

function Gallery() {
  const defaultScaling = { base: '0.75em', md: '1em', lg: "1.2em"};
  return (
    <Carousel cols={1} rows={1} gap={10} loop m={3} autoplay={3000}>
      <Carousel.Item>
        <img width="auto" src="https://picsum.photos/800/600?random=1" alt="img1"/>
          <Heading fontSize={defaultScaling}  word-break={"break-all"} mt={2}>
            Some Title1
          </Heading>
          <Text word-break={"break-all"}>
            Some Description: a;ldkfa;o sdfhsdo; aasdfad sfkfj asdjhfasdhf akljdfhalkjdshf  ladjfas a;ldkfa;o sdfhsdo; aasdfa dsfkfj asdjhfasdhf akljdfhalkjdshf  ladjfas a;ldkfa;o sdfhsdo; aasdfa dsfkfj asdjhfasdhf akljdfhalkjdshf  ladjfas a;ldkfa;o sdfhsdo; aasdfa dsfkfj asdjhfasdhf akljdfhalkjdshf  ladjfas
          </Text>
      </Carousel.Item>
      <Carousel.Item>
        <img width="auto" src="https://picsum.photos/800/600?random=2" alt="img2"/>
        <Heading fontSize={defaultScaling} mt={2}>
          Some Title2
        </Heading>
        <Text >
        Some Description: a;ldkfa;o sdfhsdo; aasdfa dsfkfj asdjhfasdhf akljdfhalkjdshf  ladjfas a;ldkfa;o sdfhsdo; aasdfa dsfkfj asdjhfasdhf akljdfhalkjdshf  ladjfas a;ldkfa;o sdfhsdo; aasdfa dsfkfj asdjhfasdhf akljdfhalkjdshf  ladjfas a;ldkfa;o sdfhsdo; aasdfa dsfkfj asdjhfasdhf akljdfhalkjdshf  ladjfas
        </Text>
      </Carousel.Item>
      <Carousel.Item>
        <img width="auto" src="https://picsum.photos/800/600?random=3" alt="img3"/>
        <Heading fontSize={defaultScaling} mt={2} flexWrap={'wrap'}>
          Some Title3
        </Heading>
        <Text >
        Some Description: a;ldkfa;o sdfhsdo; aasdfa dsfkfj asdjhfasdhf akljdfhalkjdshf  ladjfas a;ldkfa;o sdfhsdo; aasdfa dsfkfj asdjhfasdhf akljdfhalkjdshf  ladjfas a;ldkfa;o sdfhsdo; aasdfa dsfkfj asdjhfasdhf akljdfhalkjdshf  ladjfas
        </Text>
      </Carousel.Item>
    </Carousel>
  )
}
export default Gallery