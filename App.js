import React, { Component } from 'react';
import { View, Text, Icon, Button } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
//import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Home from './src/components/home';
import UserDetails from './src/components/user-details';
import Create from './src/components/Create';
import Users from './src/components/users';
import StudentsProvider from './src/context/context';
const Navigator = createStackNavigator()
export default class App extends Component {
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
  }
  render() {
    return (
      <StudentsProvider>


        <NavigationContainer>

          <Navigator.Navigator
            initialRouteName="home"
          >
            <Navigator.Screen
              name="home"
              component={Users}
              options={({navigation})=>
              ({
                title: 'Users',
                headerTitleStyle: { textAlign: 'center' },
                headerRight:()=>{
                  return(
                    <Button
                    style={{width:100,height:50,marginRight:15}}
                    
                    
                      onPress={
                        ()=>{
                          navigation.navigate('create')
                        }
                      }
                    >
                      <Text>Create</Text>
                    </Button>
                  )
                  
                }
              })
            }
            />
            <Navigator.Screen
              options={{
                title: 'Details'
              }}
              name="details"
              component={UserDetails}
            />

            <Navigator.Screen
              options={{
                title: 'Create'
              }}
              name="create"
              component={Create}
            />
          </Navigator.Navigator>
        </NavigationContainer>
        
      </StudentsProvider>
    )
  }
}