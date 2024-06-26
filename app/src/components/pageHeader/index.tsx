import React from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import imageBack from '../../assets/images/icons/back.png';
import imageLogo from '../../assets/images/logo.png';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {

    const { navigate } = useNavigation();

    const handleGoBack = () => {
        navigate('Landing');
    }
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={imageBack} resizeMode='contain' />
                </BorderlessButton>
                <Image source={imageLogo} resizeMode='contain' />
            </View>
            <Text style={styles.title}>{title}</Text>
        </View>
    )

}

export default PageHeader;