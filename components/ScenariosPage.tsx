import { Text, View, StyleSheet, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {Image} from 'expo-image';
import React, { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from "@expo/vector-icons";

export default function Scenarios() {
    const [screen, setScreen] = useState<'index' | 'restaurant'>('index');
    const [status, setStatus] = useState<'listening' | 'paused'>('paused');

    return <View>
        
        {screen === 'index' && <ScrollView contentContainerStyle={styles.container}>
        <Pressable style={({pressed}) => ({
            transform: [{scale: pressed ? 0.95 : 1}]
            }) }
            onPress={() => setScreen('restaurant')}>
        <View style={styles.card}>
            <Text style={styles.cardtitle}>Order food at a restaurant</Text>
            <Image
                style={styles.image}
                source="https://i.dailymail.co.uk/i/pix/2017/03/31/09/3ECD970F00000578-4367262-image-a-1_1490950018230.jpg"
                contentFit="cover"
            />
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.75)']}
                style={styles.overlay}
            />     
        </View>
        </Pressable>
        <View style={styles.card}>
            <Text style={styles.cardtitle}>Ask the info booth for directions</Text>
            <Image
                style={styles.image}
                source="https://images.ctfassets.net/1aemqu6a6t65/4AR5iidyi2hFuZ0aAujEiK/b5ecc609cd0e6533381c930476e3ecc7/tsvisitorcenter_timessquare_manhattan_nyc_mollyflores__x9a8140?q=72&w=1200&h=630&fit=fill"
                contentFit="cover"
            />
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.75)']}
                style={styles.overlay}
            />
        </View>
        <View style={styles.card}>
            <Text style={styles.cardtitle}>Ask for sizes at a clothing store</Text>
            <Image
                style={styles.image}
                source="https://deltaskyshop.com/wp-content/uploads/2020/01/Clothes-Shopping-Tips.jpg"
                contentFit="cover"
            />
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.75)']}
                style={styles.overlay}
            />
        </View>
        <View style={styles.card}>
            <Text style={styles.cardtitle}>Order pizza for delivery</Text>
            <Image
                style={styles.image}
                source="https://grandstandpizza.com/wp-content/uploads/2020/04/Pizza-Delivery-Near-Me-1.jpg"
                contentFit="cover"
            />
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.75)']}
                style={styles.overlay}
            />
        </View>
        <View style={styles.card}>
            <Text style={styles.cardtitle}>Call a cab</Text>
            <Image
                style={styles.image}
                source="https://c.stocksy.com/a/Kt6200/z9/503150.jpg"
                contentFit="cover"
            />
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.75)']}
                style={styles.overlay}
            />
        </View>
        <View style={styles.card}>
            <Text style={styles.cardtitle}>Go through airport customs</Text>
            <Image
                style={styles.image}
                source="https://www.dhs.gov/medialibrary-ns-assets/prod/dhs/1/1/d/5/9/e/f/d/6037/090819-h-cbpxx999-0003.jpg"
                contentFit="cover"
            />
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.75)']}
                style={styles.overlay}
            />
        </View>
        <View style={styles.card}>
            <Text style={styles.cardtitle}>Order food at a restaurant</Text>
            <Image
                style={styles.image}
                source="https://i.dailymail.co.uk/i/pix/2017/03/31/09/3ECD970F00000578-4367262-image-a-1_1490950018230.jpg"
                contentFit="cover"
            />
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.75)']}
                style={styles.overlay}
            />     
        </View>
        <View style={styles.card}>
            <Text style={styles.cardtitle}>Ask the info booth for directions</Text>
            <Image
                style={styles.image}
                source="https://images.ctfassets.net/1aemqu6a6t65/4AR5iidyi2hFuZ0aAujEiK/b5ecc609cd0e6533381c930476e3ecc7/tsvisitorcenter_timessquare_manhattan_nyc_mollyflores__x9a8140?q=72&w=1200&h=630&fit=fill"
                contentFit="cover"
            />
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.75)']}
                style={styles.overlay}
            />
        </View>
        <View style={styles.card}>
            <Text style={styles.cardtitle}>Ask for sizes at a clothing store</Text>
            <Image
                style={styles.image}
                source="https://deltaskyshop.com/wp-content/uploads/2020/01/Clothes-Shopping-Tips.jpg"
                contentFit="cover"
            />
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.75)']}
                style={styles.overlay}
            />
        </View>
        <View style={styles.card}>
            <Text style={styles.cardtitle}>Order pizza for delivery</Text>
            <Image
                style={styles.image}
                source="https://grandstandpizza.com/wp-content/uploads/2020/04/Pizza-Delivery-Near-Me-1.jpg"
                contentFit="cover"
            />
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.75)']}
                style={styles.overlay}
            />
        </View>
        <View style={styles.card}>
            <Text style={styles.cardtitle}>Call a cab</Text>
            <Image
                style={styles.image}
                source="https://c.stocksy.com/a/Kt6200/z9/503150.jpg"
                contentFit="cover"
            />
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.75)']}
                style={styles.overlay}
            />
        </View>
        <View style={styles.card}>
            <Text style={styles.cardtitle}>Go through airport customs</Text>
            <Image
                style={styles.image}
                source="https://www.dhs.gov/medialibrary-ns-assets/prod/dhs/1/1/d/5/9/e/f/d/6037/090819-h-cbpxx999-0003.jpg"
                contentFit="cover"
            />
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.75)']}
                style={styles.overlay}
            />
        </View>
        </ScrollView>}

        {screen === 'restaurant' && <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Order food at a restaurant</Text>
            <View style={styles.content}>
                <Image
                    style={styles.imageside}
                    source="https://i.cbc.ca/1.4587175.1521673703!/fileImage/httpImage/waiter.jpg"
                    contentFit="cover"
                />
                <View style={styles.controller}>
                    <FontAwesome5 name="backward" size={80} color="white" />
                    <FontAwesome5 name={
                        status === 'listening' ? 'pause' : 'play'
                    } size={80} color="white" onPress={() => setStatus(status === 'listening' ? 'paused' : 'listening')} />
                    <FontAwesome5 name="forward" size={80} color="white" />
                </View>
                <Image
                    style={styles.imagealt}
                    source="https://shizensushi.ca/wp-content/uploads/2023/06/Web-Menu-2.jpg"
                    contentFit="contain"
                />
            </View>
            </ScrollView>}

    </View>
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexGrow: 1,
        justifyContent: 'center',
        gap: 16,
        padding: 8,
        paddingTop: 24,
        paddingBottom: 160,
    },
    card: {
        backgroundColor: '#A6C7DA',
        borderRadius: 12,
        width: 160,
        height: 160,
        position: 'relative',
    },
    controller: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'center',
    },
    cardtitle: {
        position: 'absolute',
        padding: 12,
        bottom: 0,
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
        zIndex: 2,
    },
    title: {
        fontSize: 28,
        fontFamily: 'Capriola',
        textAlign: 'center',
        color: '#A6C7DA',
        marginBottom: 24,
    },
    black: {
        color: 'black',
    },
    white: {
        color: 'white',
    },
    image: {
        flex: 1,
        borderRadius: 12,
        width: 160,
        height: 160,
        zIndex: 0,
    },
    imagealt: {
        flex: 1,
        borderRadius: 12,
        width: 300,
        height: 400,
        zIndex: 0,
    },
    imageside: {
        flex: 1,
        borderRadius: 12,
        width: 300,
        height: 240,
        zIndex: 0,
    },
    // gradient overlay going from transparent at the top to black at the bottom
    overlay: {
        position: 'absolute',
        left: 0,
        top: 0,
        borderRadius: 12,
        width: '100%',
        height: '100%',
        zIndex: 1,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        gap: 64,
        alignItems: 'center',
    },
})