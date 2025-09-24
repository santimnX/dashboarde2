import { View, Image, Text } from 'react-native';
import React from 'react';

const Profiledetails = () => {
  return (
    // Este View ahora solo agrupa el contenido del perfil
    // y centra sus propios elementos horizontalmente.
    <View className='items-center'>
      <Image 
        source={require('../../assets/images/icon.png')} 
        className="h-36 w-36 rounded-full mb-4"
      />
      <Text className='text-2xl font-bold'>Santiago Molina 3E2</Text>
      <Text className='font-bold text-gray-400'>Student</Text>
    </View>
  );
};

export default Profiledetails;
