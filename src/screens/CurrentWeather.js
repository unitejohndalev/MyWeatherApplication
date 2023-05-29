import React from "react";
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";

const CurrentWeather = ({ weatherData }) => {
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

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;

  const weatherCondition = weather[0]?.main;
  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor },
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition]?.icon}
          size={100}
          color="white"
        />
        <Text style={Temperature}>{`${temp}°`}</Text>
        <Text style={Feel}>{`Feels like ${feels_like}°`}</Text>

        <RowText
          messageOne={`High: ${temp_max}°  `}
          messageTwo={`Low: ${temp_min}°`}
          containerStyles={infoWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne={weather[0]?.description}
        messageTwo={weatherType[weatherCondition]?.message}
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
  
  },
  container: {
    // marginTop: StatusBar.currentHeight || 0,
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
highLow: {
  fontSize: 20,

},
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 30,
    marginBottom: 50,
  },
  info: {
    fontSize: 43,
  },
  message: {
    fontSize: 25,
  },
});
export default CurrentWeather;
