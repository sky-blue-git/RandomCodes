import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";

const mockComments = [
  {
    id: "1",
    user: { id: "u1", name: "Alex" },
    content: "Top-level comment",
    replies: [
      {
        id: "2",
        user: { id: "u2", name: "Taylor" },
        content: "Reply to Alex",
        replies: [
          {
            id: "3",
            user: { id: "u3", name: "Jordan" },
            content: "Reply to Taylor",
            replies: [],
          },
        ],
      },
    ],
  },
];

const NestedData = ({ item, p }) => {
  return (
    <View style={{ paddingLeft:p }}>
      <Text>{item.user.name}</Text>
      <Text>{item.content}</Text>
      {item.replies.map((item1) => (
        <NestedData item={item1} p={p + 8} />
      ))}
    </View>
  );
};

function App() {
  return (
    <View style={styles.app}>
      <Text>Type 2: Nested Data Rendering</Text>
      {mockComments.map((item) => (
        <NestedData item={item} p={0} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;
