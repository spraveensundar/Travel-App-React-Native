import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { sortCategories } from '../constant';

const SortCategores = () => {
    const[isActive,setAvtive] = useState("Popular");
  return (
    <View className="flex-row justify-around items-center p-3   bg-neutral-100 rounded-full">
        {
            sortCategories.map((sort,index)=>{
                let isactivesort = sort == isActive;
                let activeButton = isactivesort? "bg-white shadow" :" "
                return(
                    <TouchableOpacity onPress={()=>setAvtive(sort)} key={index} className={`p-2 px-4 rounded-full flex ${activeButton}`}>
                        <Text style={{fontSize:wp(4), color: isactivesort? "#f04805":"rgba(0,0,0,0.6)"}}>{sort}</Text>
                    </TouchableOpacity>
                )
            })
        }
    </View>
  )
}

export default SortCategores;