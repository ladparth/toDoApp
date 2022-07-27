import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Task from './Task'
import { Collapse,CollapseBody,CollapseHeader } from 'accordion-collapse-react-native'

const TaskSection = ({title,taskArray,status,taskFunction}) => {

  const isExpanded = true
  
  const taskList = taskArray.filter((item)=>{
    return item.isComplete === status
  })

  return (
    <View style ={styles.taskWrapper}>
      <Collapse isExpanded={isExpanded}>
        <CollapseHeader style={styles.header}>
          <Text style={styles.sectionTitle}>{`${title}(${taskList.length}) >`}</Text>
        </CollapseHeader>
        <CollapseBody style={styles.items}>
        {
                taskList.map((item)=>{
                  return (
                    <TouchableOpacity style={styles.completedTask} key={item.id} 
                    onPress={()=> taskFunction(item)}
                    >
                      <Task text={item.itemName} status = {item.isComplete}/>
                    </TouchableOpacity>
                  )  
                  })
              }
        </CollapseBody>
      </Collapse>
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