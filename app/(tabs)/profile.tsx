import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-black flex-1">
      <View className='mt-10 px-5 items-center gap-4'>

        <View className="w-40 h-40 rounded-full border-2 border-primary items-center justify-center" >
          <AntDesign name="user" size={40} color="#555555" />
        </View>
        

        <Text className='text-white text-2xl' >Username</Text>
      </View>
    </SafeAreaView>
  );
}
