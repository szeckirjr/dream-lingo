import { View, Text, StyleSheet } from "react-native";
import RandomAudioWaves from "./RandomAudioWaves";
import { Entypo, FontAwesome } from "@expo/vector-icons";

export default function conversations() {
    return <View style={styles.container}>
        <Text style={styles.title}>Conversation</Text>
        <RandomAudioWaves />
        <View style={styles.controller}>
        <FontAwesome name="microphone" size={48} color="white" />

    </View>
    </View>
}

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 48,
        fontFamily: 'Capriola',
    },
    container: {
        marginTop: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 40,
    },
    controller: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
    }
})