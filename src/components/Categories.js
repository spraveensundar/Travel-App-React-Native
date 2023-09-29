import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { categoriesData } from '../constant';

const Categories = () => {
  return (
    <View className="mt-5">
      <View className="flex-row justify-between items-center">
        <Text style={{fontSize:wp(4)}} className="font-semibold text-neutral-700">Categories</Text>

        <TouchableOpacity>
            <Text style={{fontSize:wp(4),color:'#f04805'}}>See all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
      horizontal
      className="space-x-5 mt-4"
      contentContainerStyle={50}
      showsHorizontalScrollIndicator={false}
      >
        {
            categoriesData.map((cat,index)=>{
                return(
                    <TouchableOpacity key={index}>
                        <Image source={cat.image} className="rounded-3xl" style={{width:wp(20),height:hp(10)}}/>
                        <Text className="text-center font-medium text-neutral-700">{cat.title}</Text>
                    </TouchableOpacity>
                )
            })
        }
      </ScrollView>


    </View>
  )
}

export default Categories;