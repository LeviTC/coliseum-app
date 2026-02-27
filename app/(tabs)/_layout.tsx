import { Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        // tabBarShowLabel: false,
        tabBarStyle: { 
          backgroundColor: '#111', 
          borderTopColor: '#222',
        },
        tabBarActiveTintColor: '#00FF87',
        tabBarInactiveTintColor: '#555',
        tabBarLabelStyle: {
          fontSize: 14
        }
      }}
    >
      <Tabs.Screen 
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({color, size}) => (
            <AntDesign name='home' color={color} size={15} />
          )
        }}

      />

      <Tabs.Screen name="versus" options={{ title: 'Versus' }} />

      <Tabs.Screen 
        name="profile" 
        options={{ 
          title: 'Profile', 
          tabBarIcon: ({color, size}) => (
            <AntDesign name='user' color={color} size={15} />
          )
        }}  
      />
    </Tabs>
  );
}