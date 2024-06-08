import * as React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Dimensions, Button, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { styles } from '../styles/HomeScreenStyles';
import { MainImageUri, Cuisines, Chefs, Testimonials } from '../assets/ExampleData'; // replace this with API

const { width: screenWidth } = Dimensions.get('window');
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const renderCuisineItem = ({ item }: { item: { id: string, name: string, image: string } }) => (
    <View style={styles.cuisineItem}>
      <Image source={{ uri: item.image }} style={styles.cuisineImage} />
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
      <Text style={styles.testimonialName}>- {item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.hero}>
          <Text style={styles.tagline}>Local Bangladeshi Caterers to Home</Text>
          <Image source={{ uri: MainImageUri }} style={styles.heroImage} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Cuisines</Text>
          <FlatList
            data={Cuisines}
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
            data={Chefs}
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
            data={Testimonials}
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

export default HomeScreen;
