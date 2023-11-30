import { Pressable, StatusBar, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useState } from 'react';
import HomePage from '../../components/HomePage';
import Listening from '../../components/Listening';
import Scenarios from '../../components/ScenariosPage';
import RandomAudioWaves from '../../components/RandomAudioWaves';
import Conversations from '../../components/Conversations';

export type PossiblePages = 'index' | 'listening' | 'conversations' | 'scenario';

export default function TabOneScreen() {
  const [screen, setScreen] = useState<PossiblePages>('index');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Text style={styles.title}>Dream<Text style={styles.orange}>Lingo</Text></Text>
      <View style={styles.separator} lightColor="rgba(255,255,255,0.2)" darkColor="rgba(255,255,255,0.2)" />
      {screen === 'index' && <HomePage setScreen={setScreen}  />}
      {screen !== 'index' && <Pressable onPress={() => setScreen('index')} style={({pressed}) => ({
        transform: [{scale: pressed ? 0.95 : 1}]
      })}>
      <View style={styles.smallcard}>
        <Feather name="arrow-left" size={32} color="#29357B" />
      </View>
      </Pressable>}
      {screen === 'listening' && <Listening />}
      {screen === 'scenario' && <Scenarios />}
      {screen === 'conversations' && <Conversations />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#29357B',
    padding: 20,
    flexGrow: 1,
    border: 'none',
    height: '100%',
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
  smallcard: {
    backgroundColor: '#A6C7DA',
    padding: 16,
    borderRadius: 12,
    width: 64,
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
  title: {
    fontSize: 54,
    fontFamily: 'Capriola',
    textAlign: 'center',
    color: '#A6C7DA'
  },
  subtitle: {
    fontSize: 24,
    fontFamily: 'Capriola',
    textAlign: 'left',
    color: 'white'
  },
  orange: {
    color: '#F2B985'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    marginHorizontal: 'auto',
    textAlign: 'center',
    alignSelf: 'center',
  },
});
