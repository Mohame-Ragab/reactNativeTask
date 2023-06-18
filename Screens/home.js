import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import routes from '../common/routes'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const {navigate}=useNavigation();
  return (
    <View>
      {/* <Button  onPress={()=>{navigate(routes.users)}}  title='go to users screens'>go to users screens</Button> */}
      <Button title='go to users Screen' onPress={()=>{navigate(routes.users)}}></Button>
            <Button title='First Task' onPress={()=>{navigate(routes.secPhone)}}></Button>
    </View>
  );
}

export default Home

const styles = StyleSheet.create({})