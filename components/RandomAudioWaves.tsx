import { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Animated } from "react-native";

export default function RandomAudioWaves({playing, setPlaying}: {
    playing: boolean;
    setPlaying: (playing: boolean) => void;
}) {
    const waveAnimRefs = Array.from({ length: 8 }, () => useRef(new Animated.Value(20)).current);

    useEffect(() => {
        if(playing) {
        waveAnimRefs.forEach((anim, index) => {
            const minWaveHeight = index % 2 === 0 ? 50 : 40;
            const sequence = [
                Animated.timing(anim, {
                    toValue: Math.random() * (180 - minWaveHeight) + minWaveHeight, // Random height between minWaveHeight and 180
                    duration: 200 + Math.random() * 500, // Random duration between 500 and 1000ms
                    useNativeDriver: false,
                }),
                Animated.timing(anim, {
                    toValue: minWaveHeight,
                    duration: 200 + Math.random() * 500, // Random duration
                    useNativeDriver: false,
                }),
            ];

            Animated.loop(Animated.sequence(sequence)).start();
        });
    } else {
        waveAnimRefs.forEach((anim) => {
            anim.setValue(20); // Reset to initial value when not playing
        });
    }
    }, [playing]); // Empty dependency array to run only once

    return (
        <View style={styles.container}>
            {waveAnimRefs.map((anim, index) => (
                <Animated.View
                    key={index}
                    style={[
                        styles.wave,
                        {
                            height: anim,
                        },
                    ]}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        gap: 10,
        marginTop: 20,
    },
    wave: {
        backgroundColor: '#A6C7DA',
        width: 20,
        borderRadius: 10,
    }
});
