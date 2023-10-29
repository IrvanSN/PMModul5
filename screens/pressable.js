import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

// Disini mensimulasikan component dari react native yang bernama Pressable
const PressableScreen = () => {
    // state ini untuk menunjukkan berapa kali tombol di klik
    const [timesPressed, setTimesPressed] = useState(0);

    // inisialisasi Text
    let textLog = "Counter";
    // jika state/tombol di klik lebih dari 1 maka tampilkan berapa kali tombol di klik
    if (timesPressed > 1) {
        textLog = timesPressed + "x onPress";
    // jika state bernilai kurang dari 0 maka ubah teks menjadi onPress
    } else if (timesPressed > 0) {
        textLog = "onPress";
    }

    // dibawah ini menggunakan beberapa bawaan event listener dari komponen Pressable
    return (
        <View style={styles.container}>
            <Pressable
                /*event listener onLongPress jika tombol ditekan lama*/
                onLongPress={() => alert("Pressed Long")}
                /*event listener onPress jika tombol di klik*/
                onPress={() => {
                    setTimesPressed((current) => current + 1);
                }}
                /*style: jika tombol di tekan akan berubah menjadi warna kuning*/
                style={({ pressed }) => [
                    { backgroundColor: pressed ? "yellow" : "#dddddd" },
                    styles.wrapperCustom,
                ]}
            >
                {({ pressed }) => (
                    /* jika tombol ditekan maka teks di dalam tombol akan berubah menjadi "Pressed!" jika tidak akan menjadi "Press Me" */
                    <Text style={styles.text}>{pressed ? "Pressed!" : "Press Me"}</Text>
                )}
            </Pressable>
            <View>
                {/*cetak variable textLog*/}
                <Text>{textLog}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        textTransform: "uppercase",
        fontSize: 24,
        fontWeight: "bold",
    },
    wrapperCustom: {
        padding: 15,
        marginBottom: 30,
    },
});

export default PressableScreen;
