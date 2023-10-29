import React from "react";
import {Text, View} from "react-native";
import {
  PressableScreen,
  StackHookScreen,
  StackScreen,
  TouchableScreen,
  StackParamScreen
} from "./screens";

const App = () => {
  return (
    <View style={{ paddingTop: 50, flex: 1 }}>
      <Text style={{textAlign: 'center'}}>Nama: Irvan Surya Nugraha</Text>
      <Text style={{textAlign: 'center'}}>NIM: 1203210007</Text>
      {/* Panggil Screen Komponen Di Sini */}
      {/*<PressableScreen />*/}
      {/*<StackHookScreen />*/}
      {/*<StackScreen/>*/}
      {/*<TouchableScreen />*/}
      <StackParamScreen />
    </View>
  );
};

export default App;
