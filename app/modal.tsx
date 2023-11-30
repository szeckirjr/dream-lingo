import { StatusBar } from 'expo-status-bar';
import { Platform, Pressable, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { AntDesign, FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="robot" size={32} color="white" style={{ marginRight: 15 }} />
      <Text style={styles.title}>Pick AI personality</Text>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }}>
      </View>
      <View style={styles.cardlist}>
        <Pressable style={({pressed}) => ({
          transform: [{scale: pressed ? 0.95 : 1}]
        })}>
          <View style={styles.card}>
            <FontAwesome5 name="black-tie" size={48} color="#29357B" />
            <Text style={styles.cardtitle}>Formal</Text>
          </View>
        </Pressable>
        <Pressable style={({pressed}) => ({
          transform: [{scale: pressed ? 0.95 : 1}]
        }) }>
          <View style={styles.card}>
            <FontAwesome5 name="hands-helping" size={48} color="#29357B" />
            <Text
              style={styles.cardtitle}
            >Helpful</Text>
          </View>
        </Pressable>
        <Link href="/" asChild>
          <Pressable style={({pressed}) => ({
            transform: [{scale: pressed ? 0.95 : 1}]
          }) }>
            <View style={styles.card}>
              <MaterialCommunityIcons name="skateboard" size={48} color="#29357B" />
              <Text
                style={styles.cardtitle}
              >Casual</Text>
            </View>
          </Pressable>
        </Link>
        <Pressable style={({pressed}) => ({
            transform: [{scale: pressed ? 0.95 : 1}]
          }) }>
            <View style={styles.card}>
              <FontAwesome5 name="brain" size={48} color="#29357B" />
              <Text
                style={styles.cardtitle}
              >Knowledgeable</Text>
            </View>
          </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 32,
    backgroundColor: '#29357B',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
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
});
