import react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './src/pages/WelcomeScreen';
import MemberSign from './src/pages/MemberSign';
import MemberResult from './src/pages/MemberResult';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Welcome" component={Welcome}  />
                <Stack.Screen name="MemberSignScreen" component={MemberSign} />
                <Stack.Screen name="MemberResultScreen" component={MemberResult} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;