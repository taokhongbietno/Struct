import * as React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

interface SliderProps {
    label: string;
    right?: boolean;
}

const { width, height } = Dimensions.get('window')

export const SLIDER_HEIGHT = 0.61 * height

const Slider = ({ label, right }: SliderProps) => {
    const transform = [
        { translateY: (SLIDER_HEIGHT - 100) / 2 },
        { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
        { rotate: right ? '90deg' : '-90deg' }
    ];
    return (
        <View style={styles.container}>
            <View style={[styles.titleContainer, { transform }]}>
                <Text style={styles.title}>
                    {label}
                </Text>
            </View>
        </View>
    );
};

export default Slider;

const styles = StyleSheet.create({
    container: {
        width
    },
    titleContainer: {
        height: 100,
        justifyContent: 'center',
        // backgroundColor: 'red',

    },
    title: {
        fontSize: 80,
        color: 'white',
        fontFamily: 'SFProText-Bold',
        textAlign: "center",
    }
});
