import React from 'react';
import { Text, SafeAreaView, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { styles } from './DashboardStyle'
import Logo from '../../assests/fibraLogo.png'
const Dashboard = ({ navigation }) => {
    return (
        <View style={styles.main}>
            <SafeAreaView style={styles.margin}>
                <Image style={styles.logo} source={Logo} />
                <TextInput
                    placeholderTextColor='#fff'
                    style={styles.input}
                    placeholder="Correo electrónico"
                />
                <TextInput
                    placeholderTextColor='#fff'
                    style={styles.input2}
                    placeholder="Contraseña"
                />
                <Text style={styles.paragraph} >
                    ¿Olvidaste tu contraseña?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('login')} style={styles.btnLogin}>
                    <Text style={styles.login} >
                        Login
                    </Text>
                </TouchableOpacity>


            </SafeAreaView>


        </View>
    );
}



export default Dashboard;
