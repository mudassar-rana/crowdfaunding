import React from 'react';
import { View, Text, Image, } from 'react-native';
import { styles } from './InvertirStyle'

const Invertir = () => {
    return (
        <View>
            <View style={styles.imageContainer}>
                <Image style={styles.tabSide} source={require('../../assests/tabside.png')} />
                <Text>
                    Invertir
                </Text>
            </View>
        </View>
    );
}


export default Invertir;
