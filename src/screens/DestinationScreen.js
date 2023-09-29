import { View, Text,Image, StatusBar, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import React,{useState} from'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ChevronLeftIcon} from 'react-native-heroicons/outline';
import { ClockIcon, HeartIcon, MapPinIcon, SunIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

const DestinationScreen = (props) => {
    const item = props.route.params;
    const usenavigation =useNavigation();
    const[isFavourite,toggleFavourite] =useState(false);
  return (
      <>
      
        <View className="flex-1 bg-white">
        <Image source={item.image} style={{width:wp(100),height:hp(60)}}/>
           <StatusBar translucent={true} backgroundColor={"transparent"}/>

        <SafeAreaView className="flex-row justify-between items-center w-full absolute mt-14 px-3">

          <TouchableOpacity className="rounded-full p-3" style={{backgroundColor:"rgba(255,255,255,0.4)"}}
           onPressIn={()=>usenavigation.goBack()}>
             <ChevronLeftIcon size={wp(7)}  strokeWidth={4} color={"white"}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>toggleFavourite(!isFavourite)} className="rounded-full p-3" style={{backgroundColor:"rgba(255,255,255,0.4)"}}>
             <HeartIcon size={wp(7)}  strokeWidth={4} color={isFavourite ?"red":"white"}/>
          </TouchableOpacity>

        </SafeAreaView>

        <View style={{borderTopEndRadius:30,borderTopLeftRadius:30}} className="px-5 flex flex-1 justify-between bg-white pt-8 -mt-14">
          <ScrollView 
          showsVerticalScrollIndicator={false}>

            <View className="flex-row justify-between items-start mt-5">
              <Text style={{fontSize:wp(6)}} className="font-semibold text-neutral-700">
                {item.title}
              </Text>

              <Text style={{fontSize:wp(6)}} className="font-semibold text-orange-500">
                ${item.price}
              </Text>
            </View>

            <View>
              <Text style={{fontSize:wp(3.6)}} className="mt-5 tracking-wider text-neutral-700">{item.longDescription}</Text>
            </View>    

            <View className="flex-row justify-between mt-4">

              <View className="flex-row items-start space-x-2">
                 <ClockIcon size={wp(7)} color="skyblue"/>
                 <View className="flex space-y-1">
                      <Text style={{fontSize:wp(5)}} className="font-semibold text-neutral-700">{item.duration}</Text>
                      <Text style={{fontSize:wp(3.5)}}  text-neutral-700>Duration</Text>
                 </View>
            </View> 


            <View className="flex-row items-start space-x-2">
                 <MapPinIcon size={wp(7)} color="red"/>
                 <View className="flex space-y-1">
                      <Text style={{fontSize:wp(5)}} className="font-semibold text-neutral-700">{item.distance}</Text>
                      <Text style={{fontSize:wp(3.5)}}  text-neutral-700>Distance</Text>
                 </View>
            </View> 

            <View className="flex-row items-start space-x-2">
                 <SunIcon size={wp(7)} color="orange"/>
                 <View className="flex space-y-1">
                      <Text style={{fontSize:wp(5)}} className="font-semibold text-neutral-700">{item.weather}</Text>
                      <Text style={{fontSize:wp(3.5)}}  text-neutral-700>Weather</Text>
                 </View>                 
            </View>
            </View>
          </ScrollView>

          <TouchableOpacity style={{backgroundColor:"orange",width:wp(45),height:hp(7)}} className="mx-auto flex justify-center items-center mb-5 rounded-full">
            <Text className="text-white font-semibold" style={{fontSize:wp(5)}}>Book now</Text>
          </TouchableOpacity>

        </View>
    </View>
    </>
  )
}

export default DestinationScreen;