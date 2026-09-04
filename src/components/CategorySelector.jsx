import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
const categories = [
  { id: 'general', name: 'General Knowledge', desc: 'A little bit of everything', icon: 'public', color: '#F0A93A' },
  { id: 'logic', name: 'Logic', desc: 'Puzzles and reasoning', icon: 'extension', color: '#5FD9A8' },
  { id: 'entertainment', name: 'Entertainment', desc: 'Movies, music, and pop culture', icon: 'play-circle-outline', color: '#F08A8A' },
];
export default function CategorySelector({ onSelect }) {
  return (
    <View style={styles.screen}>

      <View style={styles.topBar}>
        <MaterialIcons name="menu" size={24} color="#2A2118" />
        <Text style={styles.title}>Quiz Éclair</Text>
        <View style={styles.avatar} />
      </View>

      <Text style={styles.heading}>Choose Your Category</Text>
      <Text style={styles.subheading}>Select a topic to test your knowledge.</Text>

      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          style={styles.card}
          onPress={() => onSelect(category.id)}
        >
          <View style={[styles.badge, { backgroundColor: category.color }]}>
            <MaterialIcons name={category.icon} size={26} color="#fff" />
          </View>
          <Text style={styles.cardTitle}>{category.name}</Text>
          <Text style={styles.cardDesc}>{category.desc}</Text>
        </TouchableOpacity>
      ))}
      <View style={styles.navBar}>
        <View style={styles.navItem}>
          <MaterialIcons name="explore" size={20} color="#F0A93A" />
          <Text style={styles.navText}>Explore</Text>
        </View>
        <View style={styles.navItem}>
          <MaterialIcons name="leaderboard" size={20} color="#888" />
          <Text style={styles.navText}>My Stats</Text>
        </View>
        <View style={styles.navItem}>
          <MaterialIcons name="settings" size={20} color="#888" />
          <Text style={styles.navText}>Settings</Text>
        </View>
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
     screen: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 30,
    justifyContent: 'space-between',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D9A441',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#ddd',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 9,
    textAlign:'center',
    
  },
  subheading: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
    textAlign:'center',
  },
  card: {
    backgroundColor: '#FDF9F3',
    borderWidth: 1,
    borderColor: '#EEE',
    borderRadius: 14,
    padding: 30,
    alignItems: 'center',
    marginBottom: 10,
  },
  badge: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  cardDesc: {
    fontSize: 10,
    color: '#B8863B',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 9,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
});