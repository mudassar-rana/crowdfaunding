import React from 'react';
import { styles } from './AbrirCuentaStyle';
import Building from '../../assests/building.png'
import Button from '../button/Button';

import { View, ImageBackground, Image, Text, TextInput, TextInputComponent, } from 'react-native';

const Abrircuenta = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <ImageBackground style={styles.bacckgroundImage} source={Building} resizeMode='cover'>
                <View style={styles.childContainer}>
                    <Image style={styles.logo} source={require('../../assests/logoSmall.png')} />
                    <View style={styles.containerInput}>
                        <View style={styles.inputMain}>
                            <Text style={styles.headingIniciar}>
                                Abrir Cuenta
                            </Text>
                            <Text style={styles.emailText}>
                                Email*
                            </Text>
                            <TextInput placeholder='email'
                                style={styles.emailInput}

                            />
                            <Text style={styles.emailText}>
                                Contraseña*
                            </Text>
                            <TextInput placeholder='Contraseña'
                                style={styles.emailInput}

                            />
                            <Text style={styles.emailText}>
                                Repetir contraseña*
                            </Text>
                            <TextInput placeholder='Apellido Paterno'
                                style={styles.emailInput}

                            />
                            <View style={styles.btnContainer}>
                                <Button click={() => navigation.navigate('ingresa')} btnTitle="Abrir Cuenta" bgColor="#227BFF" />
                            </View>
                        </View>

                    </View>
                </View>
            </ImageBackground >

        </View >
    );
}



export default Abrircuenta;

