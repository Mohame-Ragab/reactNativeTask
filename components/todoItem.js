import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const TodoItem = ({task , deleteTask , completedTask}) => {
    const delte =() => {
        deleteTask(task.id)
    }
   const   complete  = () => {
    completedTask(task.id)
   }
  return (
    <View style={styles.newTask}>
       {!task.isComplete? <Text>{task.task}</Text> : <Text style={{textDecorationLine:'line-through' ,color:'red'}}>{task.task}</Text>}
      <TouchableOpacity onPress={()=>complete()} style={styles.del} >
        <Text >Completed</Text> 
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>delte()} style={styles.comp} >
        <Text >Delete</Text> 
      </TouchableOpacity>
    </View>
  )
}

export default TodoItem

const styles = StyleSheet.create({
    newTask : {
        flex : 1,
        margin : 10,
        padding : 5,
        textAlign : 'center',
        width : '100%',
        display : 'flex',
        justifyContent : 'flex-start',
  
      },
      del : {
        margin : 10,
        padding : 5,
        fontSize : 10 ,
        backgroundColor : 'blue',
      },
      comp : {
        margin : 10,
        padding : 5,
        fontSize : '10px' ,
        backgroundColor : 'red',
      }
})