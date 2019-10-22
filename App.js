import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';

const App = () => {
  const [sugarLevel, setSugarLevel] = useState(0);
  const [coffeeType, setCoffeeType] = useState('');
  const [coffeeReady, setCoffeeReady] = useState('');
  const [coffeeGridLeft, setCoffeeGridLeft] = useState([]);
  const [coffeeGridRight, setCoffeeGridRight] = useState([]);

  useEffect(() => {
    setCoffeeGridLeft(['Espresso', 'Ristretto', 'Cortado']);
    setCoffeeGridRight(['Lungo', 'Macchiato', 'Americano']);
  }, []);

  return (
    <SafeAreaView style={styles.conatainer}>
      <View style={styles.sections}>
        <Text style={styles.text}>Coffee Machine</Text>
      </View>
      <View style={{...styles.sections, flex: 2}}>
        <View style={styles.sugarContainer}>
          <TouchableOpacity
            onPress={() =>
              sugarLevel > 0 ? setSugarLevel(sugarLevel - 1) : false
            }>
            <Text style={{fontSize: 30}}>-</Text>
          </TouchableOpacity>
          <View style={styles.sugarLabel}>
            <Text>Sugar Level</Text>
            <Text style={styles.text}>{sugarLevel}</Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              sugarLevel < 5 ? setSugarLevel(sugarLevel + 1) : false
            }>
            <Text style={{fontSize: 30}}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={{...styles.machineLabel, flexDirection: 'row'}}>
          <View style={styles.machineLabel}>
            {coffeeGridLeft.map(element => {
              return (
                <Button
                  title={element}
                  onPress={() => setCoffeeType(element)}
                />
              );
            })}
          </View>
          <View style={styles.machineLabel}>
            {coffeeGridRight.map(element => {
              return (
                <Button
                  title={element}
                  onPress={() => setCoffeeType(element)}
                />
              );
            })}
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            setTimeout(() => {
              setCoffeeReady(coffeeType);
            }, 3000)
          }>
          <Text style={{fontSize: 30}}>Start making my {coffeeType}</Text>
        </TouchableOpacity>
      </View>
      <View style={{...styles.machineOutput, padding: 1}}>
        <View style={styles.outputContainer}>
          <Text style={{color: '#F0F0F0'}}>{coffeeReady}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  sugarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 400,
  },
  sugarLabel: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sections: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  machineLabel: {
    flex: 1,
    justifyContent: 'space-around',
  },
  machineOutput: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  outputContainer: {
    borderWidth: 1,
    width: 350,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2D2C29',
  },
});

export default App;
