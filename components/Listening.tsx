import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import AnimatedTimer from "./AnimatedTimer";

export default function Listening() {
    const [status, setStatus] = useState<'listening' | 'paused'>('paused');

    return <ScrollView style={styles.container}>
        <Text style={styles.title}>Listening</Text>
        <AnimatedTimer />
    </ScrollView>
}

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 40,
    },
    title: {
        color: 'white',
        fontSize: 48,
        fontFamily: 'Capriola',
    },
    controller: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'center',
    }
})