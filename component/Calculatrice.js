import { View, Text, Pressable, StyleSheet } from 'react-native';
import React, { useState } from 'react';

export const Calculatrice = () => {
  let [calcul,setCalcul]=useState("");
  let [resultat,setResultat]=useState(0);
  const handlePress = (value) =>{
      setCalcul(calcul += value)
  }
  const handleResult = () => {
   setResultat(eval(calcul))
  }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>CALCULATRICE</Text>
      <View style={styles.row}> 
        <Pressable style={styles.press} onPress={() => handlePress("0")}>
            <Text  style={styles.textPress}>0</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={() => handlePress("1")}>
            <Text style={styles.textPress}>1</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={() => handlePress("2")}>
            <Text style={styles.textPress}>2</Text>
        </Pressable>
      </View>
      <View style={styles.row}> 
        <Pressable style={styles.press} onPress={() => handlePress("3")}>
            <Text style={styles.textPress}>3</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={() => handlePress("4")} >
            <Text style={styles.textPress}>4</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={() => handlePress("5")}>
            <Text style={styles.textPress}>5</Text>
        </Pressable>
      </View>
      <View style={styles.row}> 
        <Pressable style={styles.press} onPress={() => handlePress("6")}>
            <Text style={styles.textPress}>6</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={() => handlePress("7")}>
            <Text style={styles.textPress}>7</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={() => handlePress("8")}>
            <Text style={styles.textPress}>8</Text>
        </Pressable>
      </View>
      <View> 
        <Pressable style={styles.press} onPress={() => handlePress("9")}>
            <Text style={styles.textPress}>9</Text>
        </Pressable>
      </View>
      <View style={styles.row}> 
        <Pressable style={styles.press} onPress={() => handlePress("+")}>
            <Text style={styles.textPress}>+</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={() => handlePress("-")}>
            <Text style={styles.textPress}>-</Text>
        </Pressable>
      </View>
      <View style={styles.row}> 
        <Pressable style={styles.press} onPress={() => handlePress("*")}>
            <Text style={styles.textPress}>*</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={() => handlePress("/")}>
            <Text style={styles.textPress}>/</Text>
        </Pressable>
      </View>
      <View> 
        <Pressable style={styles.press} onPress={handleResult}>
            <Text style={styles.textPress}>=</Text>
        </Pressable>
      </View>
      <View>
          <Text style={styles.textCalcul}>Calcul en cours : {calcul}</Text>
      </View>
      <View>
          <Text style={styles.textCalcul}> Resultat : {resultat}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    body:{
        flex:1,
        alignItems:"center"
    },
    text:{
        fontSize:25,
        margin:10
    },
    row:{
        
        flexDirection:"row"
    },
    press:{
        width:50,
        height:50,
        borderRadius:1,
        backgroundColor:"#208db6",
        justifyContent:"center",
        alignItems:"center"
    },
    textPress:{
        color:"white"
    },
    textCalcul:{
        fontSize:15,
        margin:7
    }
})
export default Calculatrice;
