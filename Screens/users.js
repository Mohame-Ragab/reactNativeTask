import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import routes from '../common/routes'
import { userContext } from '../contexts/UserContextProvider'

const Users = ({navigation}) => {
  const {users}= useContext(userContext);
  const [userSearch , setUserSearch] = useState("");
  const [userlist, setUserList] = useState()
 
 
  useEffect(()=>{
    
    if(userSearch==""){
      setUserList(users)
    }
    else setUserList(users.filter((item)=>item.name.toLocaleLowerCase().includes(userSearch.toLocaleLowerCase())))
    
  },[userSearch])
 if (!userlist) return <View><Text>Wait ........</Text>

 </View>
  return (
    <View>
      <Text>users</Text>
      <TextInput placeholder='Search'
      value={userSearch}
      onChangeText={(val)=>setUserSearch(val)} ></TextInput>
      <Button title='go to home screen' onPress={()=>{navigation.navigate(routes.home)}} > go to home screen</Button>
      {
        userlist.map((user)=><View key={user.id}>
          <Text >{user.name}</Text>
          <Button title='Show details' onPress={()=>{navigation.navigate(routes.details,user.id)}}></Button>
        </View>)
      }
    </View>
  )
}

export default Users

const styles = StyleSheet.create({})