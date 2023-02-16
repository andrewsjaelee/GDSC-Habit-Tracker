import { View, Text, TextInput } from "react-native";
import React from "react";

const AddHabits = () => {
  const [text, onChangeText] = React.useState('');

  return (    
    <View className="flex-1 flex-col justify-start items-center bg-black">
      <Text className="font-bold text-5xl mt-2 mr-9 text-white">Habits Start Here.</Text>
      <Text className="font-bold text-lg self-start ml-12 mt-2 text-white">Title of Your Habit:</Text>
      <TextInput 
        style={{ borderColor: "white", borderWidth: 1, borderRadius: 20, width: "80%" }} 
        value={text} 
        placeholder="Ex. Read Book"
      />
      <Text className="font-bold text-lg self-start ml-12 mt-2 text-white">Start Date:</Text>
      <TextInput 
        style={{ borderColor: "white", borderWidth: 1, borderRadius: 20, width: "80%" }} 
        value={text} 
        placeholder="Ex. Read Book"
      />
      <Text className="font-bold text-lg self-start ml-12 mt-2 text-white">End Date:</Text>
      <TextInput 
        style={{ borderColor: "white", borderWidth: 1, borderRadius: 20, width: "80%" }} 
        value={text} 
        placeholder="Ex. Read Book"
      />
    </View>
  );
};

export default AddHabits;
