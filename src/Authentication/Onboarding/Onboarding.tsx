import * as React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import Slider, { SLIDER_HEIGHT } from './Slider';
import Subslide from './Subslide';
import { useValue, interpolateColor, onScrollEvent } from 'react-native-redash';

const { width } = Dimensions.get('window')

const BORDER_RADIUS = 75;

const slides = [
  { label: "Relaxed", subTitle: 'Header Title', Description: 'React Navigations stack navigator provides a way for your app to transition between screens and manage navigation', color: '#BFEAF5' },
  { label: "Playful", subTitle: 'Header Title', Description: 'React Navigations stack navigator provides a way for your app to transition between screens and manage navigation', color: '#BEECC4' },
  { label: "Excentrix", subTitle: 'Header Title', Description: 'React Navigations stack navigator provides a way for your app to transition between screens and manage navigation', color: '#FFE4D9' },
  { label: "Funky", subTitle: 'Header Title', Description: 'React Navigations stack navigator provides a way for your app to transition between screens and manage navigation', color: '#FFDDDD' },
]

const Onboarding = () => {

  const x = useValue(0)
  const onScroll = onScrollEvent({ x });
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map(slides => slides.color)
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.Slider, { backgroundColor }]}>
        <Animated.ScrollView
          style={{ flex: 1, width: "100%" }}
          horizontal
          snapToInterval={width}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={1}
          bounces={false}
          {...{ onScroll }}
        >
          {slides.map(({ label }, index) => (
            <Slider key={index} right={!!(index % 2)} {...{ label }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>

      <View style={styles.footer}>
        <Animated.View style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}>

        </Animated.View>
        <View style={styles.footerContainer}>
          {slides.map(({ subTitle, Description }, index) => (
            <Subslide key={index} last={index === slides.length - 1} {...{ subTitle, Description, x }} />
          ))}
        </View>
      </View>

    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  Slider: {
    height: SLIDER_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS
  },
  footer: {
    flex: 1
  },
  footerContainer: {
    flex: 1,
    borderTopLeftRadius: BORDER_RADIUS,
    backgroundColor: 'white'
  }
});
