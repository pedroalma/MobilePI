import React from "react";
import { SafeAreaView  } from "react-native-safe-area-context";
import {StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import home from "./components/Home/home";

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: 'Início',
          headerLeft: () => (
            <TouchableOpacity onPress={() => alert('Menu clicado!')}>
              <Image
                source={require('./src/assets/icons/menu.png')}
                style={{ width: 25, height: 25, marginLeft: 15 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => alert('Notificações')}>
              <Image
                source={require('./src/assets/icons/notification.png')}
                style={{ width: 25, height: 25, marginRight: 15 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
