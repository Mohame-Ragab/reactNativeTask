import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import TodoItem from './todoItem';

const Todo = () => {
    const [todo , setTodo] = useState([]);
    const [task, setTask] = useState('');
    const [check , setCheck] = useState('');
    
    const  countCompleted = ()=>{
      let num = 0 ;
      todo.map ((task)=>{
        if (task.isComplete == true){
          num++;
          return task
        }
        return task;
      })
      return num;
    }


    
    const addTask =()=>{
      
        //console.log(task.length);
        if (task.length == 0) {
          setCheck('the task is empty');
         
        }else if (task.length <= 3) {
            setCheck('the task should be more than 3 characters');
          
        }else {
            const id = todo.length + 1;
            setTodo([...todo ,{id :id , task :task , isComplete :false}]);
            setTask('');
            setCheck('add successfull task');
        }    
    }
    const deleteTask = (taskId)   =>{
      setTodo( (prevTask)=>{
       return  prevTask.filter(task => task.id != taskId);

      })
    }
    const completedTask = (taskId) =>{
      setTodo( (prevTask)=>{
        return prevTask.map(task => {
          if (task.id == taskId){
            return {...task, isComplete: true} 
          }
          return task
        })
      });
    }


  return (
    <View style={styles.container}>
      <ScrollView >
      <Text style={styles.Headers}>ToDo App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your task "
        value={task}
        onChangeText={val => setTask(val)}
      ></TextInput>
      <Text >{check}</Text>
      <TouchableOpacity onPress={()=>addTask()} style={styles.add}>
        <Text style={styles.Headers}>ADD</Text>
      </TouchableOpacity>
      {/* <TodoItem /> */}
      {/* <View  ><Text style={styles.Headers} > tasks completed {todo.length} tasks </Text> </View> */}
      <Text style={[styles.Headers, {marginTop:10}]} > {countCompleted()} tasks completed || All tasks  {todo.length} </Text>
      <View>
      {/* {
          todo.map((task)=>{
           return <TodoItem key={task.id}
            task={task}
            deleteTask={deleteTask}
            completedTask={completedTask}
            
            />
          }
          )
        } */}
      </View>
      </ScrollView>
      
      
      <FlatList data={todo}
      renderItem={({item})=><TodoItem task={item}
      deleteTask={deleteTask}
      completedTask={completedTask} /> }
      ListHeaderComponent={<Text> tasks </Text> }
      ListEmptyComponent={<Text> No Tasks Yet</Text>}
      keyExtractor={({id})=>id}></FlatList>
      
      
      </View>

     
    
  );
}

export default Todo

const styles = StyleSheet.create({

    container :{
        width : '100%',
        margin: 30,
        flex:1,
        

    } ,
    Headers:{
        width : '100%',
        textAlign:'center',
        fontSize: 20 ,
        fontWeight: 'bold',

    },
    input :{
        
        margin: 10,
        padding:4,
        borderStyle:'solid',
        borderWidth:2,
        borderColor: 'red'
    },
    add :{
      marginTop : 10,
      borderRadius:10,
        backgroundColor : "red",
        padding:10,
        
    },
   
})