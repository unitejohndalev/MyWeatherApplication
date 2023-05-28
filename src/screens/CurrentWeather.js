import React from "react";
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";

const CurrentWeather = () => {
  const {
    wrapper,
    container,
    Temperature,
    Feel,
    infoWrapper,
    highLow,
    bodyWrapper,
    info,
    message,
  } = styles;
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={Temperature}>6</Text>
        <Text style={Feel}>Feels like 5</Text>

        <RowText
          messageOne={"High: 8"}
          messageTwo={"Low: 6"}
          containerStyles={infoWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne={"It's sunny"}
        messageTwo={"It's perfect t-shirt weather"}
        containerStyles={bodyWrapper}
        messageOneStyles={info}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "pink",
  },
  container: {
    marginTop: StatusBar.currentHeight || 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Temperature: {
    fontSize: 50,
  },
  Feel: {
    fontSize: 30,
  },

  infoWrapper: {
    flexDirection: "row",

    
  },
  high: {
    fontSize: 20,
   
  },
  low: {
    fontSize: 20,
    
   
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 30,
    marginBottom: 50,
  },
  info: {
    fontSize: 38,
  },
  message: {
    fontSize: 25,
  },
});
export default CurrentWeather;
