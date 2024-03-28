import { Text, View, StyleSheet, Dimensions, Image} from 'react-native';
import React from 'react';
const { width, height } = Dimensions.get('screen');
export const SuccessCard = () => {

    return (
      <View style={styles.successCardContainer}>
        <Image
          source={{ uri: "../../assets/images/card4.svg" }}
          style={[styles.image,]}
          resizeMode='contain'
        />
        <View>
          <Text style={styles.title}>¡FELICITACIONES!</Text>
          <Text style={styles.subtitle}>Bienvenido a WIN</Text>
          <Text style={styles.description}>Ya puedes ser parte del mundo del deporte</Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  successCardContainer: {
    width,
    height,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,

  },
  title: {
    fontSize: 24,
    color: '#64C883',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 18,
    color: '#f0f0f0',
    textAlign: 'center',
    marginTop: 16,
  },
  description: {
    fontSize: 16,
    color: '#f0f0f0',
    textAlign: 'center',
    marginTop: 16,
  },
  image: {
    height: 105,
    width: 151,
  }
})
