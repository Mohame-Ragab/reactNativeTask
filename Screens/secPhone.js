import { Image, SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SecPhone() {
    const persons=[
        {
          id:"0",
          title:"A-First Section",
          data:[
            {id:"0",text:"user name 1",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqAlN5bl2UIns-BmE8rqnEcVvF3eco4EiUwTPlKKfscZTDiX446E8bzDcW2ukxZ4-SySI&usqp=CAU"},
            {id:"1",text:"user name 2",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqAlN5bl2UIns-BmE8rqnEcVvF3eco4EiUwTPlKKfscZTDiX446E8bzDcW2ukxZ4-SySI&usqp=CAU"},
            {id:"2",text:"user name 3" ,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqAlN5bl2UIns-BmE8rqnEcVvF3eco4EiUwTPlKKfscZTDiX446E8bzDcW2ukxZ4-SySI&usqp=CAU"},
          ]
          },
          {
          id:"1",
          title:"B-second section",
          data:[
            {id:"3",text:"user name 4",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqAlN5bl2UIns-BmE8rqnEcVvF3eco4EiUwTPlKKfscZTDiX446E8bzDcW2ukxZ4-SySI&usqp=CAU"},
            {id:"4",text:"user name 5",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqAlN5bl2UIns-BmE8rqnEcVvF3eco4EiUwTPlKKfscZTDiX446E8bzDcW2ukxZ4-SySI&usqp=CAU"},
            
          ]
        },
        {
            id:"2",
            title:"C-third section",
            data:[
              {id:"5",text:"user name 6",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqAlN5bl2UIns-BmE8rqnEcVvF3eco4EiUwTPlKKfscZTDiX446E8bzDcW2ukxZ4-SySI&usqp=CAU"},
              {id:"6",text:"user name 7",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqAlN5bl2UIns-BmE8rqnEcVvF3eco4EiUwTPlKKfscZTDiX446E8bzDcW2ukxZ4-SySI&usqp=CAU"},
              
            ]
          },
          {
            id:"3",
            title:"D-fourth section",
            data:[
              {id:"7",text:"user name 8",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqAlN5bl2UIns-BmE8rqnEcVvF3eco4EiUwTPlKKfscZTDiX446E8bzDcW2ukxZ4-SySI&usqp=CAU"},
              {id:"8",text:"user name 9",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqAlN5bl2UIns-BmE8rqnEcVvF3eco4EiUwTPlKKfscZTDiX446E8bzDcW2ukxZ4-SySI&usqp=CAU"},
              
            ]
          }
        ]
  return (
    <View style={styles.container}>
      <SectionList sections={persons} 
      renderSectionHeader={({section})=> <Text style={styles.Headers} >{section.title}</Text>}
      renderItem={({item})=><View style={{display:'flex' ,flexDirection:'row'}}>
        <Image source={{uri:item.img}} style={{width:40,height:40,margin:5 , borderRadius:50}} alt={item.text} />
        <Text style={styles.items} >{item.text}</Text>
      </View>} ></SectionList>
    </View>
  )
}

const styles = StyleSheet.create({
    container :{
        width : '100%',
        margin: 30,
        
        

    } ,
    Headers:{
        width : '100%',
        textAlign:'center',
        fontSize: 18 ,
        fontWeight: 'bold',
        backgroundColor: 'magenta',
        padding: 10,
        marginVertical: 10

    },
    items :{
        width : '100%',
        backgroundColor: "skyblue",
        margin : 5,
        padding: 5,
    }
})