import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import routes from '../common/routes';
import Home from '../Screens/home';
import Users from '../Screens/users';
import SecPhone from '../Screens/secPhone';
import Details from '../Screens/details';
const stack = createNativeStackNavigator();
const Root = () => {
  return (

    <stack.Navigator>
        <stack.Screen name={routes.home} component={Home} options={{
            headerTitle: 'Home Screen',
            headerStyle : {
                backgroundColor : 'green'
            },
            headerTintColor: 'magenta',
            headerTitleAlign:'center',
            headerTitleStyle :{fontSize: 25}
        }} ></stack.Screen>
        <stack.Screen name={routes.users} component={Users}></stack.Screen>
        <stack.Screen name={routes.secPhone} component={SecPhone}></stack.Screen>
        <stack.Screen name={routes.details} component={Details}></stack.Screen>

    </stack.Navigator>
  )
}

export default Root

const styles = StyleSheet.create({})