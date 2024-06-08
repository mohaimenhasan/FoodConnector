import * as React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Dimensions, Button, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

const BangladeshiFood = require('../assets/bangladeshi.png');
const { width: screenWidth } = Dimensions.get('window');

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const cuisines = [
  { id: '1', name: 'Bangladeshi', image: BangladeshiFood },
  { id: '2', name: 'Indian', image: 'https://images.unsplash.com/photo-1573920012757-cfba4c36f7ff?w=800&h=400&fit=crop' },
  { id: '3', name: 'Italian', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=400&fit=crop' },
  { id: '4', name: 'Chinese', image: 'https://images.unsplash.com/photo-1586396273621-aba320e6e2ab?w=800&h=400&fit=crop' },
  { id: '5', name: 'Mexican', image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&h=400&fit=crop' }
];

const chefs = [
  { id: '1', name: 'Jane Doe', description: 'Expert in Bangladeshi cuisine', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop' },
  { id: '2', name: 'John Smith', description: 'Specializes in Indian dishes', image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop' },
  // More chefs
];

const testimonials = [
  { id: '1', name: 'Customer A', review: 'Amazing food!', rating: 5 },
  { id: '2', name: 'Customer B', review: 'Loved the flavors!', rating: 4 },
  // More testimonials
];

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const renderCuisineItem = ({ item }: { item: { id: string, name: string, image: string } }) => (
    <View style={styles.cuisineItem}>
      <Image source={typeof item.image === 'string' ? { uri: item.image } : item.image} style={styles.cuisineImage} />
      <Text style={styles.cuisineName}>{item.name}</Text>
    </View>
  );
  
  const renderChefItem = ({ item }: { item: { id: string, name: string, description: string, image: string } }) => (
    <View style={styles.chefItem}>
      <Image source={{ uri: item.image }} style={styles.chefImage} />
      <Text style={styles.chefName}>{item.name}</Text>
      <Text style={styles.chefDescription}>{item.description}</Text>
    </View>
  );
  
  const renderTestimonialItem = ({ item }: { item: { id: string, name: string, review: string } }) => (
    <View style={styles.testimonialItem}>
      <Text style={styles.testimonialReview}>{item.review}</Text>
      <Text style={styles.testimonialName}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.hero}>
          <Text style={styles.tagline}>Local Caterers to Home</Text>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&h=400&fit=crop' }} style={styles.heroImage} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Cuisines</Text>
          <FlatList
            data={cuisines}
            renderItem={renderCuisineItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToAlignment="center"
            decelerationRate="fast"
            snapToInterval={screenWidth * 0.6 + 20} // Adjust the interval to match item width
            contentContainerStyle={{ paddingHorizontal: 10 }} // Add padding to the FlatList
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top Chefs</Text>
          <FlatList
            data={chefs}
            renderItem={renderChefItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 10 }} // Add padding to the FlatList
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Customer Testimonials</Text>
          <FlatList
            data={testimonials}
            renderItem={renderTestimonialItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToAlignment="center"
            decelerationRate="fast"
            snapToInterval={screenWidth * 0.8 + 10} // Adjust the interval to match item width
            contentContainerStyle={{ paddingHorizontal: 10 }} // Add padding to the FlatList
          />
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Log In</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.navigationButtons}>
          <Button
            title="Go to Profile"
            onPress={() => navigation.navigate('Profile')}
          />
          <Button
            title="Go to Orders"
            onPress={() => navigation.navigate('Orders')}
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>About | Contact | Privacy Policy</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollViewContent: {
    paddingBottom: 20 // Ensure the content is scrollable
  },
  hero: {
    alignItems: 'center',
    padding: 20
  },
  tagline: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10
  },
  heroImage: {
    width: '100%',
    height: 200,
    borderRadius: 10
  },
  section: {
    marginTop: 20
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 10
  },
  cuisineItem: {
    alignItems: 'center',
    marginHorizontal: 10 // Adjust spacing as needed
  },
  cuisineImage: {
    width: screenWidth * 0.6,
    height: 150,
    borderRadius: 10
  },
  cuisineName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  chefItem: {
    alignItems: 'center',
    marginHorizontal: 10 // Adjust spacing as needed
  },
  chefImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc' // Placeholder color for loading
  },
  chefName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  chefDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center'
  },
  testimonialItem: {
    alignItems: 'center',
    marginHorizontal: 10, // Adjust spacing as needed
    padding: 20
  },
  testimonialReview: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  testimonialName: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
  },
  actionButton: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
    width: '40%'
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc'
  },
  footerText: {
    fontSize: 14,
    color: '#666'
  }
});

export default HomeScreen;
