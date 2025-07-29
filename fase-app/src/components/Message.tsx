import { Text, View } from "react-native";

interface Props {
    message: string;
}
const Message = ({ message }: Props) => {
  return (
    <View className="items-center justify-center my-4 h-full">
      <Text className="text-xl font-bold text-gray-500">
        {message}
      </Text>
    </View>
  );
};


export default Message