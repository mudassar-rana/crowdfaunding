import React from 'react';
import { styles } from './ButtonStyle'
import { View, StyleSheet, TouchableOpacity, Text, } from 'react-native';

const Button = (props) => {



    return (
        <TouchableOpacity onPress={props.click} style={[styles.btnLogin, { backgroundColor: props.bgColor }]}>
            <Text style={styles.title}>
                {props.btnTitle}
            </Text>
        </TouchableOpacity>


    );
}


export default Button;
