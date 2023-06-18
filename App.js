import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
// import Todo from './components/todo';
import SecPhone from './Screens/secPhone';
import { NavigationContainer } from '@react-navigation/native';
import Root from './Navigations/root';
import UserContextProvider from './contexts/UserContextProvider';

export default function App() {
  return (
    // <SafeAreaView style={ {marginTop:Platform.OS==="android"?40:0}}>
<UserContextProvider>
    <NavigationContainer>
      {/* <ScrollView showsHorizontalScrollIndicator={false} horizontal  > */}
        {/* <Todo /> */}
        {/* <View style={styles.container} > */}
        {/* <SecPhone  /> */}
        {/* </View> */}
        
          
          <Root></Root>

        

      {/* </ScrollView> */}
    
    </NavigationContainer>
    </UserContextProvider>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
