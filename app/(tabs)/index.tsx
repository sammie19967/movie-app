import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { View, Text, ScrollView, Image } from "react-native";
import { SearchBar } from "react-native-screens";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false} // ✅ Fixed boolean syntax
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto"/>
        <View className="flex-1 mt-5">
          <SearchBar/>
        </View>
        <Text className="color-white justify-center">Welcome to Home!</Text>
      </ScrollView>
    </View>
  );
}
