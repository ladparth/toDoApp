import { useState,useEffect} from 'react';
import { Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import TaskSection from './components/TaskSection';


export default function App() {
  const uniqueId = (str) =>{
    return `${str}_${new Date().getTime()}`
  } 
  const [item, setItem] = useState('')
  const [toDo,setToDo] = useState([])

  const handleAddTask = ()=>{
    if(item!=''){
      Keyboard.dismiss()
      setToDo([...toDo,{
        id:uniqueId(item),
        itemName:item,
        isComplete:false
      }])
      setItem('')
    }else{
      alert('Enter valid to do item')
    }
  }
 
  const toggleStatus = (item)=>{
    const copyToDo = [...toDo]
    const i = copyToDo.findIndex(el=> el === item)
    copyToDo[i] ={...copyToDo[i],isComplete: !item.isComplete}
    setToDo(copyToDo)
  }
  return (
    <View style={styles.container}>
      
      <View>
      <TaskSection 
        title = {"Today's Tasks"}
        taskArray ={toDo}
        taskFunction = {toggleStatus}
        status = {false}
      />
      <TaskSection 
        title = {"Completed Tasks"}
        taskArray ={toDo}
        taskFunction = {toggleStatus}
        status = {true}
      />
      </View>

      <KeyboardAvoidingView style={styles.taskInputWrapper}>
        <TextInput 
        style={styles.inputText} 
        placeholder="enter your task here!" 
        onChangeText={(text)=>setItem(text)}
        value={item}
        />
        <TouchableOpacity style={styles.addBtn} onPress={handleAddTask} >
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed'
  },
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
  taskInputWrapper:{
    width:'100%',
    position:'absolute',
    bottom:60,
    flex:1,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  inputText:{
    width:'60%',
    padding:15,
    backgroundColor:'#FFF',
    borderRadius:20,
  },
  addBtn:{
    backgroundColor:'#fff',
    borderRadius:60,
    padding:30,
  },
  addText:{
    fontSize:16,
    fontWeight:'bold'
  },
});
