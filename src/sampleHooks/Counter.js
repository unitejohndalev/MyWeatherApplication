import React, {useState, useEffect} from "react";
import {View, Text, Button, StyleSheet, StatusBar} from 'react-native'

const Counter = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log(`Our count value is ${count}`)
    })
    const {text} = styles
    return (
      <View>
        <Text style={text}>{`count: ${count}`}</Text>
        <Button
            title={'increment'}
            color={'red'}
            onPress={() => setCount(count + 1) }
        />
        <Button
            title="decrement"
            color={'black'}
            onPress={() => setCount(count - 1)}
        />
    
      </View>
    );
}

const styles = StyleSheet.create({
  text: {
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default Counter