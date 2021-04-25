import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  TextInput,
  Button,
  Alert,
} from "react-native";
import randomWords from "random-words";

export default function App() {
  const [search, setSearch] = useState("");
  const [random, setRandom] = useState(["milk", "coffee", "bread", "oranges"]);
  const [randomFilter, setRandomFilter] = useState([]);
  const handleClick = () => {
    setRandom([...random, randomWords()]);
  };
  useEffect(() => {
    const filterValue = random.filter((fill) => {
      return fill.includes(search);
    });
    setRandomFilter(filterValue ? filterValue : random);
  }, [search, random]);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={styles.text}
          onChangeText={setSearch}
          placeholder="search here"
        />
        <Button title="click here" onPress={() => handleClick()} />
      </View>
      <View>
        {randomFilter.map((text, index) => {
          return (
            <Text style={styles.text1} key={text + index}>
              {text}
            </Text>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    padding: 10,
    color: "red",
    fontWeight: "bold",
  },
  text1: {
    padding: 10,
    color: "blue",
    fontWeight: "bold",
  },
});
