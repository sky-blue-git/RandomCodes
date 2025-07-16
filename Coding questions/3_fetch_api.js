// Fetch API data on button press.
import { Text, SafeAreaView, StyleSheet, FlatList, View, Button, Image, ActivityIndicator } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);
    try{
      const res = await fetch('https://remoteok.com/api');
      const resData = await res.json();
      setData(resData.slice(1)); 
    } catch(e){
      console.error(e);
    } finally{
      setLoading(false);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button title={"load data"} onPress={loadData}/>
      {
        loading ? <ActivityIndicator /> : (
            <FlatList
              data={data}
              renderItem={({item}) => (
                <View>
                  {
                    item.company_logo ? (
                      <Image source={{uri: item.company_logo}} style={{height: 100, width: 100, resizeMode: 'contain'}}/>
                    ) : (
                      <View style={{height: 100, width: 100, backgroundColor: "grey"}}/>
                    )
                  }
                  <Text>{item.id}</Text>
                  <Text>{item.company}</Text>
                  <Text>{item.position}</Text>
                  <View style={{marginBottom: 20}}/> 
                </View>
              )}
            />
        )
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
