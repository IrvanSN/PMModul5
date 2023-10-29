import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Button, Text, View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

// createNativeStackNavigator() merupakan fungsi dari pustaka @react-navigation/native-stack yang digunakan dalam React Navigation v6 untuk membuat sebuah stack navigator yang terintegrasi dengan pengalaman native di aplikasi React Native.
const Stack = createNativeStackNavigator();

// Page HomeScreen untuk di render di dalam Navigator
const HomeScreen = (props) => {
    // useNavigation() merupakan sebuah hook yang disediakan oleh React Navigation untuk React functional components dalam aplikasi React Native. Hook ini memungkinkan komponen fungsional untuk mengakses objek navigasi yang terkait dengan navigator tertentu yang dibungkusinya.
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 18, marginBottom: 20 }}>Ini Navigation menggunakan hook</Text>
            <Button
                title="Go to My profile"
                color="black"
                //jika tombol di tekan maka akan beralih ke halaman "Profile" dengan melempar data {name: "Irvan"}
                onPress={() => navigation.navigate("Profile", { name: "Irvan" })} // Passing Data
            />
        </View>
    );
};

// Page ProfileScreen untuk di render di dalam Navigator
const ProfileScreen = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            {/* Get Data */}
            <Text style={{ fontSize: 24 }}>
                {/*Mengambil parameter yang telah di lempar tadi*/}
                This is {route.params.name}'s profile
            </Text>
        </View>
    );
};

const StackHookScreen = () => {
    return (
        /*NavigationContainer berfungsi sebagai wadah (container) untuk menampung seluruh navigasi dalam aplikasi. Ini diperlukan sebagai bagian dari setup awal dalam penggunaan React Navigation. Komponen ini bertindak sebagai titik awal dari navigasi dalam aplikasi React Native*/
        <NavigationContainer>
            {/*Navigator jenis stack adalah sebuah tumpukan (stack) dari layar-layar. Ini bekerja mirip dengan tumpukan piringan di mana layar-layar ditambahkan ke tumpukan dan dapat dipindahkan di antara satu sama lain. Ketika suatu layar ditambahkan ke dalam stack, layar tersebut muncul di atas layar yang sebelumnya ditampilkan. Ketika layar tertentu dihapus dari stack, layar sebelumnya dalam tumpukan muncul kembali.*/}
            <Stack.Navigator
                /*Properti initialRouteName menentukan layar awal yang akan ditampilkan saat navigator stack pertama kali dimuat.*/
                initialRouteName="Home"
                screenOptions={{
                  /*gestureEnabled mengontrol apakah gestur (seperti menggeser untuk kembali) diaktifkan atau tidak.*/
                    gestureEnabled: true,
                  /*headerStyle mengatur gaya dari header (bagian atas layar) untuk semua layar dalam stack navigator.*/
                    headerStyle: {
                        backgroundColor: "#101010",
                    },
                  /*headerTitleStyle mengontrol gaya dari teks judul pada header.*/
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                  /*headerTintColor mengatur warna dari tombol kembali dan teks header lainnya yang tidak termasuk dalam judul.*/
                    headerTintColor: "#ffd700",
                  /*headerBackTitleVisible mengontrol apakah teks judul dari tombol kembali akan ditampilkan atau tidak.*/
                    headerBackTitleVisible: false,
                }}
            >
              {/*Stack.Screen adalah komponen yang digunakan untuk mendefinisikan setiap layar atau halaman di dalam navigator tumpukan (stack navigator) dalam aplikasi React Native menggunakan React Navigation.*/}
                <Stack.Screen
                    /*Properti name menentukan nama unik dari layar yang diidentifikasi di dalam stack navigator.*/
                    name="Home"
                    /*Properti component menentukan komponen React yang akan dirender ketika navigasi dilakukan ke layar yang sesuai.*/
                    component={HomeScreen}
                    options={{
                        // Properti title mengatur teks judul (title) dari header untuk layar yang bersangkutan.
                        title: "Hello",
                        // Properti headerShown mengontrol apakah header (bagian atas layar) akan ditampilkan atau disembunyikan.
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        title: "My Profile",
                        // headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackHookScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
