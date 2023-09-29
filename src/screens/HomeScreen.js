import React from 'react';
import { SafeAreaView,View,Text,StatusBar,ScrollView,Image,TouchableOpacity,TextInput} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import SortCategores from './SortCategores';
import Destinations from '../components/Destinations';


export default function HomeScreen(){
  return(
   
    <>
      <StatusBar translucent={false} backgroundColor={"white"}/>
      <SafeAreaView  className="flex-1 p-5 bg-white">
        <ScrollView showsVerticalScrollIndicator={false}>

              <View className="flex-row justify-between items-center mb-10"> 
                  <Text className="text-neutral-700 font-bold" style={{fontSize:wp(6)}}>Omg! Yeh Mera India</Text>
                  <TouchableOpacity>
                    <Image source={require("../../assets/images/user.jpg")} style={{width:wp(12),height:hp(6)}} className="rounded-full"/>
                  </TouchableOpacity>
              </View>


              <View className="mb-5">
                 <View className="flex-row items-center bg-neutral-100 rounded-full p-1 space-x-3 pl-6">
                    <MagnifyingGlassIcon strokeWidth={3} size={20} color="gray"/>
                    <TextInput
                     placeholder='Search destination'
                     placeholderTextColor={'gray'}
                     className="flex-1 text-base  pl-1 tracking-wider"/>
                </View>
              </View>

              <View className="mb-5">
                <Categories/>
              </View>

              <View className="mb-5">
                <SortCategores/>
              </View>

              <View className="mb-5">
                 <Destinations />
              </View>

        </ScrollView>
      </SafeAreaView>
    </>
  
  )
}