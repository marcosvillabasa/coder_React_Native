import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { data } from './data/data';
import AddItem from './src/components/AddItem';

import Home from './src/screens/Home';

export default function App() {
  const [input, setInput] = useState('')
  const [list, setList] = useState(data)

  const addItem = () => {
    setList([...list, { name: input, id: list.length + 1 }])
    setInput('')
  }

  const handleChange = (text) => {
    setInput(text)
  }

  return (
    <View style={styles.container}>
      <AddItem onPress={addItem} onChange={handleChange} isDisabled={input === ''} value={input} />
      {list.map(item => <View key={item.id}><Text>{item.name}</Text></View>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
    margin: 50,
    marginHorizontal: 10,
  },
});

