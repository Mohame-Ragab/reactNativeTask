import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../contexts/UserContextProvider'
import { useRoute } from '@react-navigation/native';

const Details = () => {
  const {users} = useContext(userContext);
  const {params} = useRoute();
  const [user ,setUser] = useState();
  useEffect(()=>{
     users.map((u)=>u.id==params?setUser(u):u)
   // setUser(params)

  },[])
  if (!user) return <Text >Wait for Loading</Text>
  return (
    <View style={styles.container}>
       <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqAlN5bl2UIns-BmE8rqnEcVvF3eco4EiUwTPlKKfscZTDiX446E8bzDcW2ukxZ4-SySI&usqp=CAU"}} style={{width:'100%',height:300,margin:5 , borderRadius:50}} alt={user.name} />

      <Text style={styles.text}>{user.username}</Text>

      <Text style={styles.text}>{user.name}</Text>
      <Text style={styles.text}>{user.website}</Text>
      <Text style={styles.text}>{user.phone}</Text>
      <Text style={styles.text}>{user.website}</Text>
      <Text style={styles.text}>{user.email}</Text>
      
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    backgroundColor : 'skyblue',
    padding : 10 ,
    margin : 10,
    height:"100%"
  },
  text :{
    fontSize: 20 ,
    fontWeight: "bold",
    color: "magenta",
    margin: 2,

  }
})