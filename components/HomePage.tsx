import { AntDesign, FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { PossiblePages } from "../app/(tabs)";
import { Link } from "expo-router";

export default function HomePage({setScreen}: {
    setScreen: (screen: PossiblePages) => void;
}) {
    return <>
    <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }}>
        
        <Text style={styles.subtitle}>
        Pick an activity:
      </Text>
      <Link href="/modal" asChild>
            <Pressable>
            {({ pressed }) => (
                // <FontAwesome
                // name="info-circle"
                // size={25}
                // color="white"
                // style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                // />
                <MaterialCommunityIcons name="robot" size={32} color="white" style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }} />
            )}
            </Pressable>
        </Link>
      </View>
      <View style={styles.cardlist}>
        <Pressable style={({pressed}) => ({
          transform: [{scale: pressed ? 0.95 : 1}]
        })} onPress={() => setScreen('listening')}>
          <View style={styles.card}>
            <FontAwesome5 name="headphones-alt" size={48} color="#29357B" />
            <Text style={styles.cardtitle}>Listening</Text>
          </View>
        </Pressable>
        <Pressable style={({pressed}) => ({
          transform: [{scale: pressed ? 0.95 : 1}]
        }) } onPress={() => setScreen('conversations')}>
          <View style={styles.card}>
            <Ionicons name="chatbubbles" size={48} color="#29357B" />
            <Text
              style={styles.cardtitle}
            >Conversation</Text>
          </View>
        </Pressable>
        <Pressable style={({pressed}) => ({
          transform: [{scale: pressed ? 0.95 : 1}]
        }) } onPress={() => setScreen('scenario')}>
          <View style={styles.card}>
            <AntDesign name="enviroment" size={48} color="#29357B" />
            <Text
              style={styles.cardtitle}
            >Scenario</Text>
          </View>
        </Pressable>
      </View>
    </>
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#29357B',
      padding: 20,
      flex: 1,
      border: 'none',
    },
    card: {
      backgroundColor: '#A6C7DA',
      padding: 42,
      borderRadius: 12,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 20,
    },
    cardlist: {
      backgroundColor: '#29357B',
      display: 'flex',
      marginTop: 20,
      gap: 20,
    },
    cardtitle: {
      fontSize: 28,
      fontFamily: 'Capriola',
      textAlign: 'left',
      color: '#29357B'
    },
    subtitle: {
      fontSize: 24,
      fontFamily: 'Capriola',
      textAlign: 'left',
      color: 'white'
    },
  });
  