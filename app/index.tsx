import { View } from "react-native";
import "../global.css";
import ProfileDetails from "../components/Profiledetails";
export default function Index() {
  return (
    <View className="flex justify-center items-center bg-white w-screen h-screen">
      <ProfileDetails></ProfileDetails>
    </View>
  );
}