import React from 'react';
import { StyleSheet, Text,TextInput,Button,View,TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  state = {
    number1: '',
    number2: '',
    result:''
 }
 handleNumber1 = (text) => {
    this.setState({ number1: parseInt(text) })
 }
 handleNumber2 = (text) => {
  this.setState({ number2: parseInt(text) })
}
handleSum = (number1,number2) =>{
  this.setState({result:number1+number2})
}
handleSub = (number1,number2) =>{
  this.setState({result:number1-number2})
}
handleMul = (number1,number2) =>{
  this.setState({result:number1*number2})
}
handleDiv = (number1,number2) =>{
  this.setState({result:number1/number2})
}
  render() {
    var number1 = this.state.number1;
    var number2  = this.state.number2;
    const {result} = this.state;
    return (
      <View style={styles.container}>
      <View style={styles.container}>
        <Text style={{fontSize:40}}>Calculator</Text>
      </View>
      <View style={styles.container}>
        <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
               placeholder = "Enter 1st number.."
               name="number1"
               keyboardType = 'numeric'
               placeholderTextColor = "#a09b9b"
               onChangeText = {this.handleNumber1}/>
        <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Enter 2nd number.."
               name="number2"
               keyboardType = 'numeric'
               placeholderTextColor = "#a09b9b"
               onChangeText = {this.handleNumber2}/>             
      </View>
      <View style={styles.container}>
        <TouchableOpacity>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
            style={styles.calcButton} 
            onPress={() => {
              this.handleSum(number1,number2);
            }} ><Text style={{fontSize:30, color:"#fff"}}>+</Text></TouchableOpacity>
            <TouchableOpacity 
            style={styles.calcButton} 
            onPress={() => {
              this.handleSub(number1,number2);
            }}><Text style={{fontSize:30, color:"#fff"}}>-</Text></TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
            style={styles.calcButton}
            onPress={() => {
              this.handleMul(number1,number2);
            }}><Text style={{fontSize:30, color:"#fff"}}>x</Text></TouchableOpacity>
            <TouchableOpacity
            style={styles.calcButton}
            onPress={() => {
              this.handleDiv(number1,number2);
            }}><Text style={{fontSize:30, color:"#fff"}}>/</Text></TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{fontSize:30}}>
          The result is: {result}
        </Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    flexDirection:'row'
  },
  calcButton: {
    backgroundColor: '#7a42f4',
    borderRightWidth:1,
    borderRadius:80,
    borderLeftWidth:1,
    borderTopWidth:1,
    borderBottomWidth:1,
    margin: 15,
    padding:25
 },
  input:{
    fontSize:20,
    borderColor:"#a09b9b",
    height:50,
    borderRightWidth:1,
    borderRadius:15,
    borderLeftWidth:1,
    borderTopWidth:1,
    borderBottomWidth:1,
    padding:5,
    margin:5
  }
});
