import React from 'react';
import { Image, Text, View,StatusBar, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';




export default function WelcomeScreen(){

  const navigation = useNavigation();

  return(
    <View className="flex-1 justify-end">
      <StatusBar translucent={true} backgroundColor='transparent' />
      <Image
       source={require("../../assets/images/welcome.png")}
       className="h-full w-full absolute"/>

       <View className="p-5 pb-10 space-y-8">
       <LinearGradient
        colors={["transparent","rgba(1,1,1,0.9)"]}
        style={{width:wp(100),height:hp(30)}}
        start={{x:0.5,y:0}}
        end={{x:0.5,y:1}}
       className="absolute bottom-0">

           <View className="space-y-3 mx-4">
                <Text className="text-white text-5xl font-bold" style={{fontSize:wp(10)}}>Travelling made easy!</Text>
                <Text className="text-lg text-neutral-100" style={{fontSize:wp(4)}}>Experience the world's best adventure around the world  with us</Text>
           
            <TouchableOpacity className="bg-orange-500 p-3 mx-auto px-12 rounded-full" onPress={()=>navigation.navigate("Home")}>
              <Text className="text-2xl text-white font-bold" style={{fontSize:wp(5.5)}}>Let's go!</Text>
            </TouchableOpacity>
          </View>

       </LinearGradient>
       </View>

    </View>
  )
}