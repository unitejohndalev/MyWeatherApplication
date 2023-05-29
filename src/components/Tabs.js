import React from "react";
import CurrentWeather from "../screens/CurrentWeather";
import City from "../screens/City";
import UpcomingWeather from "../screens/UpcomingWeather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = ({weather}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          backgroundColor: "lightblue",
        },
        headerStyle: {
          backgroundColor: "lightblue",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 25,
          color: "tomato",
        },
        headerTitleAlign: "center",
      }}
    >
      <Tab.Screen
        name={"Current"}

        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      >
      {() => <CurrentWeather weatherData={weather.list[0]}/>}
      </Tab.Screen>
      <Tab.Screen
       name={'Upcoming'}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="run-fast" color={color} size={size} />
          ),
        }}
      > 
      {() => <UpcomingWeather weatherData={weather.list}/>}
      </Tab.Screen>
      <Tab.Screen
        name={"City"}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="city" color={color} size={size} />
          ),
        }}
      > 
      {() => <City weatherData={weather.city}/>}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
