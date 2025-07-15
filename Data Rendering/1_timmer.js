import { SafeAreaView, View } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [time, setTime] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        if(prev == 55){
          clearInterval(interval);
          return prev;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView>
      <View>{time}</View>
    </SafeAreaView>
  );
}
