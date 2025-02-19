import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListActivities from './src/screens/ListActivities.screen';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import AddActivity from './src/screens/AddActivity.screen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor='#141E46'
        barStyle='light-content'
      />
      <Stack.Navigator
          initialRouteName='ListActivities'
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}>
        <Stack.Screen name='ListActivities' component={ListActivities} />
        <Stack.Screen name='AddActivity' component={AddActivity} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141E46',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
