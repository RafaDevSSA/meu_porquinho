import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import PageHeader from '../../components/pageHeader';

export default function Favorites() {

    return (
        <View style={styles.container}>
        <PageHeader title="Meus proffys favoritos."/>

    </View>
    ) 
}