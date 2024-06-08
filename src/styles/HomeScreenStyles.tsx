import { Dimensions, StyleSheet } from "react-native";
const { width: screenWidth } = Dimensions.get('window');

export const styles = StyleSheet.create({
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
    marginHorizontal: 5 // Adjust spacing as needed
  },
  cuisineImage: {
    width: screenWidth * 0.8,
    height: 200,
    borderRadius: 10
  },
  cuisineName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },
  chefItem: {
    alignItems: 'center',
    marginRight: 20
  },
  chefImage: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  chefName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold'
  },
  chefDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center'
  },
  testimonialItem: {
    alignItems: 'center',
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
    fontWeight: 'bold'
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