import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Entypo, FontAwesome} from "@expo/vector-icons"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: "red"
      }}>
        <Tab.Screen name="Home" component={Home} options = {{
          tabBarIcon: () => <Entypo name='home' size={24} color="black"/>
        }}/>
        <Tab.Screen name="Search" component={Search} options = {{
          tabBarIcon: () => <FontAwesome name='search' size={24} color="black"/>
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


