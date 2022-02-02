import React from 'react';
import { styles } from './LoginStyle'
import Building from '../../assests/building.png'
import Button from '../../commonComponent/button/Button';

import { View, ImageBackground, Image, Text } from 'react-native';

const Login = ({ navigation }) => {

    return (
        <View style={styles.container}>

            <ImageBackground style={styles.bacckgroundImage} source={Building} resizeMode='cover'>
                <View style={styles.childContainer}>
                    <Image style={styles.logo} source={require('../../assests/fibraLogo.png')} />

                    <Text style={styles.CROWDFUNDING}>
                        CROWDFUNDING
                        {'\n'}
                        INMOBILIARIO
                    </Text>
                    <View style={styles.btnContainer}>
                        <Button click={() => navigation.navigate('inciar')} btnTitle="Iniciar sesión" bgColor="#227BFF" />
                    </View>
                    <View style={styles.btnContainer2}>
                        <Button btnTitle="Crear cuenta" bgColor="#0C1327" />
                    </View>

                </View>
            </ImageBackground >

        </View >
    );
}


export default Login;
