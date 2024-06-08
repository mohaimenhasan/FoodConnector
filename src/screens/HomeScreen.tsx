import * as React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Dimensions, ScrollView, Alert, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';
import { styles } from '../styles/HomeScreenStyles';
import { MainImageUri, Cuisines, Chefs, Testimonials } from '../assets/ExampleData';
import { Chef, Cuisine, Testimonial } from '../types/types';
import { useAuth } from '../contexts/AuthContext';

const { width: screenWidth } = Dimensions.get('window');
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
  route: any;
};

const HomeScreen: React.FC<Props> = ({ navigation, route }) => {
  const { authenticated, currentUser, logout } = useAuth();

  const renderCuisineItem = ({ item }: { item: Cuisine }) => (
    <TouchableOpacity
      style={styles.cuisineItem}
      onPress={() => {
        if (authenticated) {
          navigation.navigate('CuisineDetails', { cuisine: item });
        } else {
          Alert.alert('Please log in to view cuisines.');
        }
      }}
    >
      <Image source={{ uri: item.image }} style={styles.cuisineImage} />
      <Text style={styles.cuisineName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderChefItem = ({ item }: { item: Chef }) => (
    <TouchableOpacity
      style={styles.chefItem}
      onPress={() => {
        if (authenticated) {
          navigation.navigate('Profile', { chef: item, isCurrentUser: currentUser?.email === item.email });
        } else {
          Alert.alert('Please log in to view profiles.');
        }
      }}
    >
      <Image source={{ uri: item.image }} style={styles.chefImage} />
      <Text style={styles.chefName}>{item.firstName} {item.verified && <Image source={require('../assets/verified.png')} style={styles.verifiedIcon} />}</Text>
      <Text style={styles.chefDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  const renderTestimonialItem = ({ item }: { item: Testimonial }) => (
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
            snapToAlignment="center"
            decelerationRate="fast"
            snapToInterval={screenWidth * 0.8 + 20} // Adjust the interval to match item width
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
        {authenticated ? (
          <Button title="Logout" onPress={logout} />
        ) : (
          <Button title="Login" onPress={() => navigation.navigate('Login')} />
        )}
        <View style={styles.footer}>
          <Text style={styles.footerText}>About | Contact | Privacy Policy</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
