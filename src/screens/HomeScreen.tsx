import * as React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';
import { styles } from '../styles/HomeScreenStyles';
import { MainImageUri, Cuisines, Chefs, Testimonials } from '../assets/ExampleData';
import { Chef, Cuisine, Testimonial } from '../types/types';

const { width: screenWidth } = Dimensions.get('window');
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const renderCuisineItem = ({ item }: { item: Cuisine }) => (
    <View style={styles.cuisineItem}>
      <Image source={{ uri: item.image }} style={styles.cuisineImage} />
      <Text style={styles.cuisineName}>{item.name}</Text>
    </View>
  );

  const renderChefItem = ({ item }: { item: Chef }) => (
    <TouchableOpacity style={styles.chefItem} onPress={() => navigation.navigate('Profile', { chef: item })}>
      <Image source={{ uri: item.image }} style={styles.chefImage} />
      <Text style={styles.chefName}>{item.name}</Text>
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
          <Text style={styles.tagline}>Bringing Local Bangladeshi Caterers to Your Home</Text>
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
        <View style={styles.footer}>
          <Text style={styles.footerText}>About | Contact | Privacy Policy</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
