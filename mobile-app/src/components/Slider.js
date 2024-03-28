import React, {useRef} from 'react';
import { FlatList, StyleSheet, View, Text, Dimensions,  } from 'react-native';
import cardData from "../data/dataCards.json"
import Card from './Card';
import { SuccessCard } from './SuccessCard';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('screen');

const Slider = () => {

  return (
    <View style={styles.sliderContainer}>
      <Swiper
        loop={false}
        paginationStyle={styles.paginationStyle}
        dot={
          <View style={{
            width: 77,
            height: 8,
            backgroundColor: 'grey',
            borderRadius: 4,
            marginRight: 4,
          }}>

          </View>
        }
        activeDot={
          <View style={{
            width: 77,
            height: 8,
            backgroundColor: 'green',
            borderRadius: 4,
            marginRight: 4,
          }}>

          </View>
        }
      >
        {cardData.map(
          (data, index) =>
          <View>
            <Card
              title={data.title}
              subtitleStrong={data.subtitleStrong}
              subtitle={data.subtitle}
              image={data.image}
              description={data.description}
              descriptionStrong={data.descriptionStrong}
              background={data.background}
              index={index}
            />
          </View>
        )}
        {/* <SuccessCard /> */}
      </Swiper>
    </View>
  )
}

export default Slider;

const styles = StyleSheet.create({
  sliderContainer: {
    position:'relative',
    backgroundColor: "#161616",
  },
  paginationStyle: {
    top: '-80%',
  },
  dotStyle: {
    width: 8,
    height: 8,
    backgroundColor: 'grey',
    borderRadius: 4,
    marginRight: 4,
  },
  activeDotStyle: {
    width: 8,
    height: 8,
    backgroundColor: 'green',
    borderRadius: 4,
    marginRight: 4,
  },
})
