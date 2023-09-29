import { View, Text,TouchableOpacity,Image} from 'react-native';
import React,{useState} from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { destinationData } from '../constant';
import LinearGradient from 'react-native-linear-gradient';
import { HeartIcon } from 'react-native-heroicons/solid';
import {useNavigation} from "@react-navigation/native";

const Destinations = () => {

    const navigation = useNavigation();
  return (
    <View className="flex-row justify-between flex-wrap">
        {
            destinationData.map((item,index)=>{
                return(

                    <DestinationsCard navigation={navigation} des={item} key={index}/>
                )
            })
        }
    </View>
  )
}


const DestinationsCard = ({des,navigation})=>{
    
    const[isFavourtie, toggleFavourtie] = useState(false)

    console.log(isFavourtie)
    return (
        <TouchableOpacity
           onPress={()=>navigation.navigate("Destination",{...des})}
            style={{width: wp(44), height: wp(65)}}
            className="flex justify-end relative p-4 py-6 space-y-2 mb-5">
                <Image
                    source={des.image}
                    style={{width: wp(44), height: wp(65), borderRadius: 35}}
                    className="absolute"
                />

            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.8)']}
                style={{width: wp(44), height: hp(15), borderBottomLeftRadius: 35, borderBottomRightRadius: 35}}
                start={{x: 0.5, y: 0}}
                end={{x: 0.5, y: 1}}
                className="absolute bottom-0"
            />

            <TouchableOpacity onPress={()=>toggleFavourtie(!isFavourtie)} style={{backgroundColor: 'rgba(255,255,255,0.4)'}} className="absolute top-1 right-3 rounded-full p-3">
                <HeartIcon  size={wp(5)} color={isFavourtie?"red":"white"} />
            </TouchableOpacity>

            <Text style={{fontSize: wp(4)}} className="text-white font-semibold">{des.title}</Text>
            <Text style={{fontSize: wp(2.2)}} className="text-white">{des.shortDescription}</Text>

        </TouchableOpacity>
    )
}


export default Destinations;