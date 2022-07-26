import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const Task = (props) =>{

    return (
        <View style={[styles.item,props.status ? styles.itemCompleted : styles.itemNotComplete]}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={[styles.itemText,(props.status) && {textDecorationLine:'line-through',fontStyle:'italic'}]}>{props.text}</Text>
            </View>
            <View style= {styles.circle}></View>
        </View>
    )
}

export default Task

const styles = StyleSheet.create({
    item:{
        backgroundColor:"#fff",
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20,
    },
    itemNotComplete:{ backgroundColor:"#fff"},
    itemCompleted:{
        backgroundColor:'#939597',
    },
    itemLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
    },
    square:{
        width:24,
        height:24,
        backgroundColor:'#55BCF6',
        opacity:0.4,
        borderRadius:5,
        marginRight:15
    },
    itemText:{
        maxWidth:'80%',
    },
    circle:{
        width:12,
        height:12,
        borderRadius:5,
        borderWidth:2,
        borderColor:'#55BCF6'
    },
})