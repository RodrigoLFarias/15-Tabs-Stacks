// import Home from '../pages/Home/Home';
import Sobre from '../pages/Sobre/Sobre';
import Contato from '../pages/Contato/Contato';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import StackRoutes from './stackRoutes';

const Tab =  createBottomTabNavigator();

export default function Routes(){

  return (
   
    // <NavigationContainer>
      <Tab.Navigator
      screenOptions={{ // Utilizando a propiedade screenOptions dentro do componente Tab.Navigator afetando todas a tabs
      // headerShown: false,
      tabBarActiveTintColor:'yellow',
      tabBarStyle: {
        backgroundColor:'black'
      } 
      }}
      > 
        <Tab.Screen 
        name = 'HomeStack'
        component = {StackRoutes}
        options={{
          
          tabBarIcon: ({color, size}) => {
            return <Feather name ='home' color = {color} size = {size} />
          }
        }}
        />

     <Tab.Screen 
        name = 'SOBRE'
        component = {Sobre}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Feather name ='file-text' color = {color} size = {size}/>
          }
        }}
        />

     <Tab.Screen 
        name = 'CONTATO'
        component = {Contato}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Feather name ='phone-call' color = {color} size = {size}/>
          }
        }}
        />


      </Tab.Navigator>
      
    // </NavigationContainer>
   
)}




