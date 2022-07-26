import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Task from './Task'

const TaskSection = ({title,taskArray,status,taskFunction}) => {


  const taskList = taskArray.filter((item)=>{
    return item.isComplete === status
  })

  return (
    <View style ={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>{`${title}(${taskList.length})`}</Text>
        <View style={styles.items}>
            {
              taskList.map((item,index)=>{
                return (
                  <TouchableOpacity style={styles.completedTask} key={item.id} 
                  onPress={()=> taskFunction(item)}
                  >
                    <Task text={item.itemName} status = {item.isComplete}/>
                  </TouchableOpacity>
                )  
                })
            }
        </View>
      </View>
  )
}

export default TaskSection

const styles = StyleSheet.create({

    taskWrapper:{
        paddingTop:80,
        paddingHorizontal:20
      },
      sectionTitle:{
        fontSize:24,
        fontWeight:'bold'
      },
      items:{
        marginTop:20
      },
      
})