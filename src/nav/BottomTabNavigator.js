import { View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Register from '../screens/Register';
import Posts from '../screens/Posts';
// import Spaces from '../screens/Spaces';
import postEdit from '../screens/PostEdit'
import Explore from '../screens/Explore'
import Jobs from '../screens/Jobs'
import ProfileDetails from '../screens/ProfileDetails'

import TopStackNavigator from '../nav/TopStackNavigator' 

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
      <Tab.Navigator
        initialRouteName="TopStackNavigator"
        // screenOptions={{ headerShown: false, tabBarShowLabel: false }}
        screenOptions={{ tabBarShowLabel: false,
            activeTintColor: 'red', // Default activeTintColor
            inactiveTintColor: 'gray', }}
        
      >
      {/* Define your tab screens here */}
      <Tab.Screen
            name='Home'
            component={Posts}
            options={{
                headerShown:false,
                tabBarIcon: () => {
                    return (
                        <View style={{paddingTop: 12, alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                source={require("../assets/icons/home.png")}
                                style={{width:20, height:20, tintColor: "#0077b6"}}
                                />
                        </View>
                    )
                }
            }}
        />
        <Tab.Screen
            name='Explore'
            component={Explore}
            options={{
                // headerShown:false,
                tabBarIcon: () => {
                    return (
                        <View style={{paddingTop: 12, alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                source={require("../assets/icons/application.png")}
                                style={{width:20, height:20}}
                                />
                        </View>
                    )
                }
            }}
            
        />
        <Tab.Screen
            name='Write Post'
            component={postEdit}
            options={{
                // headerShown:false,
                tabBarIcon: () => {
                    return (
                        <View style={{paddingTop: 12, alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                source={require("../assets/icons/add.png")}
                                style={{width:20, height:20}}
                                />
                        </View>
                    )
                }
            }}
        />
        <Tab.Screen
            name='Jobs'
            component={Jobs}
            options={{
                // headerShown:false,
                tabBarIcon: () => {
                    return (
                        <View style={{paddingTop: 12, alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                source={require("../assets/icons/suitcase.png")}
                                style={{width:20, height:20}}
                                />
                        </View>
                    )
                }
            }}
        />
        <Tab.Screen
            name='ProfileDetails'
            component={ProfileDetails}
            options={{
                headerShown:false,
                tabBarIcon: () => {
                    return (
                        <View style={{paddingTop: 12, alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                source={require("../assets/icons/user.png")}
                                style={{width:20, height:20}}
                                />
                        </View>
                    )
                }
            }}
        />

        <Tab.Screen 
          name="TopStackNavigator" 
          component={TopStackNavigator}
          options={{
            headerShown:false,
            tabBarStyle: {display: "none",},
          }}
           />

      </Tab.Navigator>
  )
}

export default BottomTabNavigator