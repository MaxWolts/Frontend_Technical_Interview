import { Text, StyleSheet, View, Animated, Dimensions } from 'react-native';
import React, { Component } from 'react';

const { width } = Dimensions.get('screen');

export  const Pagination = ({data, visibleIndex}) => {
  // const visibleIndex = Math.floor(scrollX / width);
  console.log(visibleIndex);
  return (
    <View style={styles.container}>
      {
        data.map((_, index) => {
          // const dotWidth = scrollX.interpolate({
          //   inputRange,
          //   outputRange: [12, 30, 12],
          //   extrapolate: 'clamp'
          // })
          const style2 = index === visibleIndex? styles.green : styles.dot;
          return <View key={index} style={[styles.dot]} />
        })
      }
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
    position: "absolute",
    top: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  dot: {
    width: 77,
    height: 8,
    borderRadius: 6,
    backgroundColor: '#ccc'
  },
  green: {
    width: 77,
    height: 8,
    borderRadius: 6,
    backgroundColor: 'green'
  }
})
