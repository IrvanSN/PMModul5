import React from "react";
import {
    Text,
    View,
    StyleSheet,
    Platform,
    TouchableHighlight,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
} from "react-native";

// Disini mencoba beberapa tombol dari komponen bawaan react native

const TouchableScreen = () => {
    const onPressButton = () => {
        alert("You tapped the button!");
    };

    const onLongPressButton = () => {
        alert("You long-pressed the button!");
    };

    return (
        <View style={styles.container}>
            {/* TouchableHighlight */}
            {/*Komponen yang memberikan umpan balik ketika disentuh dengan mengubah tampilan elemen menjadi highlight (membuat bayangan atau pencahayaan pada elemen) saat disentuh.*/}
            <TouchableHighlight onPress={onPressButton}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>TouchableHighlight</Text>
                </View>
            </TouchableHighlight>

            <View style={{ marginBottom: 15 }} />

            {/* TouchableOpacity */}
            {/*Mirip dengan TouchableHighlight, namun memberikan sedikit opacity pada elemen ketika disentuh, membuatnya sedikit tembus pandang atau translucent.*/}
            <TouchableOpacity onPress={onPressButton}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>TouchableOpacity</Text>
                </View>
            </TouchableOpacity>

            <View style={{ marginBottom: 15 }} />

            {/* TouchableNativeFeedback */}
            {/*Hanya tersedia di platform Android. Komponen ini memberikan umpan balik sentuhan yang mirip dengan perilaku default dari platform Android yang menggunakan efek sentuhan bawaan dari sistem.*/}
            <TouchableNativeFeedback
                background={
                    Platform.OS === "android"
                        ? TouchableNativeFeedback.SelectableBackground()
                        : ""
                }
                onPress={onPressButton}
            >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        TouchableNativeFeedback{" "}
                        {Platform.OS !== "android" ? "(Android only)" : ""}
                    </Text>
                </View>
            </TouchableNativeFeedback>

            <View style={{ marginBottom: 15 }} />

            {/* TouchableWithoutFeedback */}
            {/* Komponen ini memberikan respons saat disentuh tanpa memberikan umpan balik visual yang terlihat kepada pengguna. Biasanya digunakan ketika respons visual tidak diperlukan atau ketika respons telah dirancang melalui logika kustom.*/}
            <TouchableWithoutFeedback onPress={onPressButton}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
                </View>
            </TouchableWithoutFeedback>

            <View style={{ marginBottom: 15 }} />

            {/* OnLonggPress */}
            {/*Menggunakan event listener onLongPress. event di panggil ketika tombol ditekan lama*/}
            <TouchableHighlight
                onPress={onPressButton}
                onLongPress={onLongPressButton}
                underlayColor="white"
            >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Touchable with Long Press</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        width: 260,
        alignItems: "center",
        backgroundColor: "#AAAAAA",
    },
    buttonText: {
        textAlign: "center",
        padding: 20,
        color: "black",
        fontWeight: "bold",
    },
});

export default TouchableScreen;
