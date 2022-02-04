import React from 'react';
import { View, Text, Image, } from 'react-native';
import { styles } from './SideBarStyle';
const Sidebar = () => {
    return (
        <View style={styles.mainImgCont}>
            <View style={styles.sideBarImage}>
                <Image style={styles.profileImage} source={require('../../assests/profile.png')} />

                <Text style={styles.profileName}>
                    Juan Pérez
                </Text>
                <Text style={styles.completada}>
                    Verificación completada
                </Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.tabContainer}>
                <View style={styles.historialCont}>
                    <View >t
                        <Image style={styles.imageHistprial} source={require('../../assests/historial.png')} />

                    </View>
                    <View style={styles.sideBarAll}>
                        <Text style={styles.headingHistorial}>
                            Historial de inversiones
                        </Text>
                    </View>
                    <View></View>
                </View>

                <View style={styles.historialCont}>
                    <View style={{}} >
                        <Image style={styles.imageHistprial} source={require('../../assests/pagos.png')} />

                    </View>
                    <View style={styles.sideBarAll}>
                        <Text style={styles.headingHistorial}>
                            Pagos recibios
                        </Text>
                    </View>
                    <View></View>
                </View>

                <View style={styles.historialCont}>
                    <View >
                        <Image style={styles.imageHistprial} source={require('../../assests/document.png')} />

                    </View>
                    <View style={styles.sideBarAll}>
                        <Text style={styles.headingHistorial}>
                            Documentos
                        </Text>
                    </View>
                    <View></View>
                </View>
                <View style={styles.historialCont}>
                    <View >
                        <Image style={styles.imageHistprial} source={require('../../assests/faq.png')} />

                    </View>
                    <View style={styles.sideBarAll}>
                        <Text style={styles.headingHistorial}>
                            FAQ
                        </Text>
                    </View>
                    <View></View>
                </View>
                <View style={styles.historialCont}>
                    <View >
                        <Image style={styles.imageHistprial} source={require('../../assests/fibra.png')} />

                    </View>
                    <View style={styles.sideBarAll}>
                        <Text style={styles.headingHistorial}>
                            Fibra Cero
                        </Text>
                    </View>
                    <View></View>
                </View>
                <View style={styles.historialCont}>
                    <View >
                        <Image style={styles.imageHistprial} source={require('../../assests/terminous.png')} />

                    </View>
                    <View style={styles.sideBarAll}>
                        <Text style={styles.headingHistorial}>
                            Términos y condiciones
                        </Text>
                    </View>
                    <View></View>
                </View>

                <View style={styles.historialCont}>
                    <View >
                        <Image style={styles.imageHistprial} source={require('../../assests/aviso.png')} />

                    </View>
                    <View style={styles.sideBarAll} >
                        <Text style={styles.headingHistorial}>
                            Aviso de privacidad
                        </Text>
                    </View>
                    <View></View>
                </View>
                <View style={styles.historialCont}>
                    <View >
                        <Image style={styles.imageHistprial} source={require('../../assests/cerrar.png')} />

                    </View>
                    <View style={styles.sideBarAll}>
                        <Text style={styles.headingHistorial}>
                            Cerrar sesión
                        </Text>
                    </View>
                    <View></View>
                </View>
            </View>

        </View>
    );
}



export default Sidebar;
