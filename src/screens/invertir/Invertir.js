import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { styles } from './InvertirStyle'

const Invertir = () => {
    return (

        <ScrollView style={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <View>
                    <Image style={styles.tabSide} source={require('../../assests/tabside.png')} />
                </View>
                <View>
                    <Text style={styles.headingInverter}>
                        Invertir
                    </Text>
                </View>
                <View></View>
            </View>
            <Text style={styles.headinginversion}>Oportunidades de Inversión</Text>
            <View style={styles.card1}>
                <View style={styles.headingTopContainer}>
                    <View >
                        <Text style={styles.alfa1}>
                            Desarrollo Alfa
                        </Text>
                        <Text style={styles.por1}>
                            Por Desarrollador 1
                        </Text>
                    </View>
                    <View >
                        <Text style={styles.QuedanHeading}>
                            Quedan 39 días
                        </Text>
                    </View>
                </View>
                <View style={styles.quedaContainer}>
                    <Text style={styles.deuda}>Deuda</Text>
                </View>
                <View>
                    <Image style={styles.building3} source={require('../../assests/building3.png')} />
                </View >
                <View style={styles.imageBottom} >
                    <View style={styles.imageBottom40} >
                        <Text style={styles.percent}> 40% </Text>
                    </View>
                </View>

                <View style={styles.widthCont}>
                    <View style={styles.container}>
                        <Text style={styles.headingMm}>
                            $1.5MM recaudado
                        </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.headingMm}>
                            Min $4.5MM

                        </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.headingMm}>
                            Max $4.5MM
                        </Text>
                    </View>
                </View>
                <View style={styles.lineHorizental}></View>
                <View style={styles.widthCont}>
                    <View style={styles.container}>
                        <Text style={styles.headingTasa}>
                            Tasa anual fija
                        </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.headingTasa}>
                            Mín de inversión

                        </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.headingTasa}>
                            Plazo
                        </Text>
                    </View>
                </View>
                <View style={styles.widthConting}>
                    <View style={styles.container}>
                        <Text style={styles.headingMxn}>
                            12.32%
                        </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.headingMxn}>
                            $54,000 MXN

                        </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.headingMxn}>
                            12 meses
                        </Text>
                    </View>
                </View>

            </View>
            <View style={styles.card2}>
                <View style={styles.headingTopContainer}>
                    <View >
                        <Text style={styles.alfa1}>
                            Desarrollo Alfa
                        </Text>
                        <Text style={styles.por1}>
                            Por Desarrollador 1
                        </Text>
                    </View>
                    <View >
                        <Text style={styles.QuedanHeading}>
                            Quedan 39 días
                        </Text>
                    </View>
                </View>
                <View style={styles.quedaContainer}>
                    <Text style={styles.deuda}>Deuda</Text>
                </View>
                <View>
                    <Image style={styles.building3} source={require('../../assests/building1.png')} />
                </View >
                <View style={styles.imageBottom} >
                    <View style={styles.imageBottom40} >
                        <Text style={styles.percent}> 40% </Text>
                    </View>
                </View>

                <View style={styles.widthCont}>
                    <View style={styles.container}>
                        <Text style={styles.headingMm}>
                            $1.5MM recaudado
                        </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.headingMm}>
                            Min $4.5MM

                        </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.headingMm}>
                            Max $4.5MM
                        </Text>
                    </View>
                </View>
                <View style={styles.lineHorizental}></View>
                <View style={styles.widthCont}>
                    <View style={styles.container}>
                        <Text style={styles.headingTasa}>
                            Tasa anual fija
                        </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.headingTasa}>
                            Mín de inversión

                        </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.headingTasa}>
                            Plazo
                        </Text>
                    </View>
                </View>
                <View style={styles.widthConting}>
                    <View style={styles.container}>
                        <Text style={styles.headingMxn}>
                            12.32%
                        </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.headingMxn}>
                            $54,000 MXN

                        </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.headingMxn}>
                            12 meses
                        </Text>
                    </View>
                </View>

            </View>
        </ScrollView>
    );
}


export default Invertir;
