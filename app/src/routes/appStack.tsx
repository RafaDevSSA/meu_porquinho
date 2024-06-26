import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Lading from '../pages/landing';
import GiveClasses from '../pages/giveClasses';
import StudyTabs from './studyTabs';

const { Navigator, Screen } = createStackNavigator();

const AppStack = () => {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Landing" component={Lading} />
                <Screen name="GiveClasses" component={GiveClasses} />
                <Screen name="Study" component={StudyTabs} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;