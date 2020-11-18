import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import imageGiveClassesBg from '../../assets/images/give-classes-background.png';

import { useNavigation } from '@react-navigation/native';

export default function GiveClasses() {
    const { goBack } = useNavigation();

    const handleLandingNavigate = () => {
        goBack();
    }
    return (
        <View style={styles.container}>
            <ImageBackground resizeMode={'contain'} style={styles.content} source={imageGiveClassesBg}>
                <Text style={styles.title}>Quer ser um Proff?</Text>
                <Text style={styles.description}>Para começar, você precisa se cadastrar como professor na nossa plataforma web!</Text>
            </ImageBackground>
            <RectButton style={styles.okButton} onPress={handleLandingNavigate} >
                <Text style={styles.okButtonText} >Tudo bem</Text>

            </RectButton>

        </View>
    )
}