import { Text, SafeAreaView, StyleSheet, View, Button } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [time, setTime] = useState(0);
  const [started, setStarted] = useState(false);
  
  useEffect(() => {
    let interval;
    if(started){
      interval = setInterval(() => {
        setTime(prev => prev + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [started]);

  const handleStart = () => {
    setStarted(prev => !prev);
  }

  const handleReset = () => {
    setTime(0);
    setStarted(false);
  }

  const fromat = (t) => {
    if(t < 10){
      return '0' + t;
    }
    return t;
  }

  const transformTime = (t) => {
    const min = fromat(Math.floor(t/60000));
    const sec = fromat(Math.floor((t%60000)/1000));
    const mili = fromat(Math.floor((t%1000)/10));
    return `${min}:${sec}:${mili}`
  }
 
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>{transformTime(time)}</Text>
      </View>
      <View style={styles.button}>
        <Button title={"start"} onPress={handleStart}/>
      </View>
      <Button title={"reset"} onPress={handleReset}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16
  },
  button: {
    paddingVertical: 16
  },
});
