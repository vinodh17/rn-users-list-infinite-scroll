import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Users  from '../Screens/users';
import { User } from '../Screens/user';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
		<NavigationContainer>
			<Stack.Navigator>

				<Stack.Screen 
				name="users"
				component={Users}
				/>

<Stack.Screen 
				name="User"
				component={User}
				/>


			</Stack.Navigator>


		</NavigationContainer>
  );
}

export default Navigation;

