// CuisineDetailsScreen.js

import React from 'react';
import { View, Text, Image, SectionList, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { Meal, MealCategory } from '../types/types';

type CuisineDetailsScreenRouteProp = RouteProp<RootStackParamList, 'CuisineDetails'>;

type Props = {
  route: CuisineDetailsScreenRouteProp;
};

const CuisineDetailsScreen: React.FC<Props> = ({ route }) => {
  const { cuisine } = route.params;

  const renderMealItem = ({ item }: { item: Meal }) => (
    <View style={styles.mealItem}>
      <Image source={{ uri: item.image }} style={styles.mealImage} />
      <Text style={styles.mealName}>{item.name}</Text>
      <Text style={styles.mealChef}>By {item.chefEmail}</Text>
      <Text style={styles.mealDate}>Posted on {item.date}</Text>
      <Text style={styles.mealCategory}>Category: {item.category}</Text>
      <Text style={styles.mealDescription}>{item.description}</Text>
    </View>
  );

  const renderSectionHeader = ({ section }: { section: MealCategory }) => (
    <Text style={styles.categoryTitle}>{section.categoryName}</Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.cuisineTitle}>{cuisine.name}</Text>
      <SectionList
        sections={cuisine.mealCategories.map(category => ({
            id: category.id,
            categoryName: category.categoryName,
            meals: category.meals,
            title: category.categoryName,
            data: category.meals
          }))}
        renderItem={renderMealItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  cuisineTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
  },
  mealItem: {
    marginBottom: 24, // Increased gap between meals
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  mealImage: {
    width: '100%',
    height: 200,
    marginBottom: 8,
    borderRadius: 8,
  },
  mealName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  mealChef: {
    fontSize: 14,
    color: 'gray',
  },
  mealDate: {
    fontSize: 12,
    color: 'gray',
  },
  mealCategory: {
    fontSize: 14,
    color: 'gray',
  },
  mealDescription: {
    fontSize: 14,
  },
});

export default CuisineDetailsScreen;
