import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';



import styles from './styles';

import landingImage from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heart from '../../assets/images/icons/heart.png';

export default function Landing() {

    const navigation = useNavigation();

    function handleNavigateToGiveClasses() {
        navigation.navigate('GiveClasses');
    }

    function handleNavigateToStudy() {
        navigation.navigate('Study');
    }

    return (
        <>
            <View style={styles.container}>
                <Image source={landingImage} style={styles.banner} />
                <Text style={styles.title}>
                    Seja bem vindo, {'\n'}
                    <Text style={styles.titleBold}>O que deseja fazer?</Text>
                </Text>
                <View style={styles.buttonContainer}>

                    <RectButton style={[styles.button, styles.buttonPrimary]} onPress={handleNavigateToStudy}>
                        <Image source={studyIcon} />
                        <Text style={styles.buttonText}>Estudar</Text>
                    </RectButton>

                    <RectButton style={[styles.button, styles.buttonSecondary]} onPress={handleNavigateToGiveClasses}>
                        <Image source={giveClassesIcon} />
                        <Text style={styles.buttonText}>Dar aulas</Text>
                    </RectButton>

                </View>
                <View>
                    <Text style={styles.totalConnections}>Total de 200 conexões ja realizadas.
                    <Image source={heart} />
                    </Text>
                </View>
            </View>
        </>
    );
}