// App.js

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationBar from "./components/NavBar";

const App = () => {
  return (
    <NavigationContainer>
      <NavigationBar />
    </NavigationContainer>
  );
};

export default App;
