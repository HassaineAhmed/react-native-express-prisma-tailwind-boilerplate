import { View, Text, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen({ navigation }) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <View className={" flex-1 justify-center items-center"}>
        <Text className={"text-gray-500 text-2xl"}>Hello World!!</Text>
        <TouchableOpacity
          className={"p-5 border-2 border-black m-4"}
          onPress={async () => {
            const response = await fetch(
              "http://192.168.0.171:3000/sayHello"
            ).then((res) => res.json());
            // const json = response
            //   .then((res) => res.json())
            //   .then((data) => data)
            //   .catch((err) => console.log(err));
            console.log(response);
          }}
        >
          <Text className={"text-lg"}> Fetch Say Hello world</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
