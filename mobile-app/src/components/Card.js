import { StyleSheet, Text, View, Image, Dimensions} from 'react-native'
import React from 'react';
import { useFonts } from "expo-font";

const { width, height } = Dimensions.get('screen');

const Card = ({
  title,
  subtitleStrong,
  subtitle,
  description,
  descriptionStrong,
  image,
  background,
  index,
}) => {
  const IMAGE_STYLES_CLASS = [styles.imageStyle0, styles.imageStyle1, styles.imageStyle2, styles.imageStyle3];
  const BACKGROUND_TYPES = [styles.backgroundStyle0, styles.backgroundStyle1]
  const [fontsLoaded] = useFonts({
    "experiment": require("../../assets/fonts/Fontspring-DEMO-integralcf-regular.otf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeaderText}>
        <Text style={[styles.estilo, styles.title]}>{title}</Text>
        {(subtitleStrong || subtitle) && (
          <Text style={styles.subtitle}>
            {subtitleStrong && <Text style={styles.subtitleStrong}>{subtitleStrong}</Text>}
            {subtitle && <Text >{subtitle}</Text>}
          </Text>
        )}
        {(descriptionStrong || description) && (
          <Text style={styles.description}>
            {description && <Text>{description}</Text>}
            {descriptionStrong && <Text style={styles.descriptionStrong}>{descriptionStrong}</Text>}
          </Text>
        )}
      </View>
      {image && (
        <Image
          source={{ uri: image }}
          style={[styles.image, IMAGE_STYLES_CLASS[index]]}
          resizeMode='contain'
        />
      )}
      {background && (
        <View style={[styles.background, BACKGROUND_TYPES[index]]}>
          <Image
            source={{ uri: background }}
            style={styles.backgroundImage}
            resizeMode='contain'
          />
        </View>
      )}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  cardContainer: {
    width,
    height,
    alignItems: 'center',
    position: 'relative',
    paddingHorizontal: 30,
  },
  cardHeaderText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    textAlign: 'center'
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 28,
    letterSpacing: 2,
    fontWeight: 800,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
  },
  description: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  subtitleStrong: {
    color: 'green', // Reemplaza 'var(--primaryGreen)' por el color en hexadecimal o nombre
    fontWeight: '800',
  },
  descriptionStrong: {
    color: 'gold', // Reemplaza 'var(--secondaryGold)' por el color en hexadecimal o nombre
  },
  imageContainer: {
    position: 'relative',
    zIndex: 1,
  },
  image: {
    width: '100%',
    flex: 0.6,
    overflow: 'hidden',
  },
  imageStyle0: {
    // height: 275,
    width: 214,
  },
  imageStyle1: {
    height: 210.63,
    width: 204.38,
  },
  imageStyle2: {
    height: 223.13,
    width: 164.38,
  },
  imageStyle3: {
    height: 270,
    width: 209.38,
    marginTop: 20,
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    zIndex: -1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    bottom: 0,
    top: 'auto',
  },
  backgroundStyle0: {
    transform: [{ translateY: 3 }],
  },
  backgroundStyle1: {
    transform: [{ translateY: 19 }],
  },
});
