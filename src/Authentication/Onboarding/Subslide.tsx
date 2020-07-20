import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

interface SubslideProps {
    subtitle: string;
    description: string;
    last?: boolean;
    x: Animated.Node<number>;
}

const Subslide = ({ subtitle, description, last, x }: SubslideProps) => {
    return (
        <View style={styles.container}>
            <Text>{subtitle}</Text>
            <Text>{description}</Text>
        </View>
    );
};

export default Subslide;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        // backgroundColor: 'red'
    }
});
