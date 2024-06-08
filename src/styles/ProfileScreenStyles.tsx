import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666'
  },
  contact: {
    fontSize: 14,
    color: '#666'
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20
  },
  stat: {
    alignItems: 'center'
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  statLabel: {
    fontSize: 14,
    color: '#666'
  },
  about: {
    padding: 20
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  aboutText: {
    fontSize: 16,
    color: '#666'
  },
  gallery: {
    padding: 20
  },
  galleryImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 10
  },
  uploadButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center'
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16
  },
  reviews: {
    padding: 20
  },
  review: {
    marginBottom: 10
  },
  reviewer: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  comment: {
    fontSize: 14,
    color: '#666'
  },
  rating: {
    fontSize: 14,
    color: '#666'
  },
  editButton: {
    marginTop: 20,
    marginBottom: 40,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 20
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16
  },
  verifiedIcon: {
    width: 20,
    height: 20,
  },
});