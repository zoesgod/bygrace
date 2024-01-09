import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignIn from '../pages/SignIn'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator initialRouteName="SignIn">
            <Stack.Screen
                name="SignIn"
                component={SignIn} options={{headerShown: false}} />
        </Stack.Navigator>
    );
}