import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'native-base';
import { screens } from 'navigations/screens.constants';
import React from 'react';
import { StyleSheet } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AccountScreen from 'screens/dashboard/account';
import AlertScreen from 'screens/dashboard/alert';
import ChatScreen from 'screens/dashboard/chat';
import HomeScreen from 'screens/dashboard/home';
import MyAdsScreen from 'screens/dashboard/myAds';
import SellScreen from 'screens/dashboard/sell';
import { colors } from 'theme/colors';
import { fonts } from 'theme/fonts';
import { heightRatio, widthRatio } from 'utils/functions/pixelRatio';
import { textRatio } from 'utils/functions/textRatio';

type Props = {}
const Tab = createBottomTabNavigator();

const BottomNavigator = (props: Props) => {
    return (
        <Tab.Navigator
            screenOptions={({ route }: { route: { name: string } }) => ({
                tabBarIcon: ({ focused }: { focused: boolean }) => {
                    const isFocusedColor = focused ? colors.gray[100] : colors.darkblue[300];
                    switch (route.name) {
                        case screens.CHAT:
                            return (
                                <View alignItems="center">
                                    <Ionicons color={isFocusedColor} name="ios-chatbubble-ellipses-sharp" size={textRatio(26)} />
                                    <Text style={[styles.text, { color: isFocusedColor }]}>Chats</Text>
                                </View>
                            );
                            break;
                        case screens.ALERT:
                            return (
                                <View alignItems="center">
                                    <Fontisto color={isFocusedColor} name="bell-alt" size={textRatio(26)} />
                                    <Text style={[styles.text, { color: isFocusedColor }]}>Alerts</Text>
                                </View>
                            )
                        case screens.HOME:
                            return (
                                <View alignItems="center">
                                    <Fontisto color={isFocusedColor} name="home" size={textRatio(26)} />
                                    <Text style={[styles.text, { color: isFocusedColor }]}>Home</Text>
                                </View>
                            )
                        case screens.SELL:
                            return (
                                <View style={[styles.circle]} ml={2}>
                                    <Fontisto color={colors.white} name="shopping-basket-remove" size={textRatio(23)} />
                                    <Text style={[styles.text, { color: colors.white }]}>Sell</Text>
                                </View>
                            )
                        case screens.MYADS:
                            return (
                                <View alignItems="center">
                                    <Ionicons color={isFocusedColor} name="megaphone" size={textRatio(26)} />
                                    <Text style={[styles.text, { color: isFocusedColor }]}>My Ads</Text>
                                </View>
                            );
                        case screens.ACCOUNT:
                            return (
                                <View alignItems="center">
                                    <MaterialCommunityIcons color={isFocusedColor} name="account" size={textRatio(30)} />
                                    <Text style={[styles.text, { color: isFocusedColor }]}>Account</Text>
                                </View>
                            )
                        default:
                            break;
                    }
                },
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: colors.darkblue[700],
                    height: heightRatio(8)
                }
            })}>
            <Tab.Screen name={screens.HOME} component={HomeScreen} />
            <Tab.Screen name={screens.MYADS} component={MyAdsScreen} />
            <Tab.Screen name={screens.CHAT} component={ChatScreen} />
            <Tab.Screen name={screens.SELL} component={SellScreen} />
            <Tab.Screen name={screens.ALERT} component={AlertScreen} />
            <Tab.Screen name={screens.ACCOUNT} component={AccountScreen} />
        </Tab.Navigator>
    )
}

export default BottomNavigator

const styles = StyleSheet.create({
    circle: {

        width: widthRatio(16),
        height: widthRatio(16),
        borderRadius: widthRatio(8),
        marginTop: -heightRatio(4),
        backgroundColor: colors.pink[600],
        alignItems: 'center',
        justifyContent: 'center'

    },
    border: {
        borderColor: colors.gray[400],
        borderWidth: 3,
    },
    text: {
        fontFamily: fonts.poppins_regular,
        fontSize: textRatio(14)
    }
})