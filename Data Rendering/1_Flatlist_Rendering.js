import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";

const users = [
  {
    id: "1",
    name: "Alex Johnson",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: "2",
    name: "Taylor Smith",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: "3",
    name: "Jordan Lee",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

function App() {
  // I can also put "users" here.
  // Its mandatory to give height & width to image
  // source ={{ uri: }}
  const renderItem = ({ item }) => (
    <>
      <Image
        source={{ uri: item.avatar }}
        style={{ height: 100, width: 100 }}
      />
      <View style={{ flexDirection: "row", gap: 8, padding: 8 }}>
        <Text>{item.id}</Text>
        <Text>{item.name}</Text>
      </View>
    </>
  );

  return (
    <View style={styles.app}>
      <Text>Type 1: Flat List Rendering</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;
