import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home/Home";
import Detalhes from "../pages/Detalhes/Detalhes";


const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Home"
            component={Home}/>

<Stack.Screen
            name="Detalhes"
            component={Detalhes}/>
        </Stack.Navigator>
    )

}