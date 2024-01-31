import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Home = () => <StyledText>Home</StyledText>;
const Exercises = () => <StyledText>Exercise</StyledText>;
const Stats = () => <StyledText>Stats Screen</StyledText>;
const Profile = () => <StyledText>Profile Tab</StyledText>;

const StyledText = styled.Text`
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
`;

const TabIcon = styled(Ionicons)`
  margin-top: 10px;
  font-size: 24px;
  color: ${(props) => props.color};
`;

const NavigationBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home-outline";
          } else if (route.name === "Exercise Tab") {
            iconName = "barbell-outline";
          } else if (route.name === "Stats") {
            iconName = "stats-chart-outline";
          } else if (route.name === "Profile") {
            iconName = "person-circle-outline";
          }

          return <TabIcon name={iconName} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#007BFF",
        inactiveTintColor: "#A9A9A9",
        style: {
          backgroundColor: "#FFFFFF",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name="Exercise Tab"
        component={Exercises}
        options={{ tabBarLabel: "Exercise" }}
      />
      <Tab.Screen
        name="Stats"
        component={Stats}
        options={{ tabBarLabel: "Stats" }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ tabBarLabel: "Profile" }}
      />
    </Tab.Navigator>
  );
};

export default NavigationBar;
