// ExampleData.ts

import { Chef, Cuisine, Testimonial } from "../types/types";

export const MainImageUri = 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&h=400&fit=crop';

export const Cuisines: Cuisine[] = [
  { id: '1', name: 'Bangladeshi', image: 'https://foodish-api.com/images/biryani/biryani7.jpg' },
  { id: '2', name: 'Indian', image: 'https://foodish-api.com/images/butter-chicken/butter-chicken1.jpg' },
  { id: '3', name: 'Italian', image: 'https://foodish-api.com/images/pasta/pasta4.jpg' },
  { id: '4', name: 'Chinese', image: 'https://foodish-api.com/images/dessert/dessert30.jpg' },
  { id: '5', name: 'Mexican', image: 'https://foodish-api.com/images/rice/rice32.jpg' }
];

export const Chefs: Chef[] = [
  {
    id: '1',
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    description: 'Passionate cook specializing in traditional Bangladeshi cuisine.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
    followers: 120,
    reviews: 45,
    rating: 4.5,
    gallery: [
      { uri: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&h=400&fit=crop' },
      // More images
    ],
    reviewsList: [
      { id: '1', reviewer: 'John Smith', comment: 'Great food!', rating: 5 },
      // More reviews
    ]
  },
  {
    id: '2',
    name: 'John Smith',
    email: 'john.smith@example.com',
    description: 'Specializes in Indian dishes',
    image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop',
    followers: 150,
    reviews: 60,
    rating: 4.7,
    gallery: [
      { uri: 'https://images.unsplash.com/photo-1573910545833-42c2a9a139d9?w=800&h=400&fit=crop' },
      // More images
    ],
    reviewsList: [
      { id: '1', reviewer: 'Emily Clark', comment: 'Amazing dishes!', rating: 5 },
      // More reviews
    ]
  },
  {
    id: '3',
    name: 'Emily Clark',
    email: 'emily.clark@example.com',
    description: 'Italian cuisine connoisseur',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=150&h=150&fit=crop',
    followers: 200,
    reviews: 80,
    rating: 4.8,
    gallery: [
      { uri: 'https://images.unsplash.com/photo-1561047029-597d8d7e46db?w=800&h=400&fit=crop' },
      // More images
    ],
    reviewsList: [
      { id: '1', reviewer: 'Michael Lee', comment: 'The best Italian food I\'ve ever had!', rating: 5 },
      // More reviews
    ]
  },
  {
    id: '4',
    name: 'Michael Lee',
    email: 'michael.lee@example.com',
    description: 'Master of Chinese flavors',
    image: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=150&h=150&fit=crop',
    followers: 180,
    reviews: 70,
    rating: 4.6,
    gallery: [
      { uri: 'https://images.unsplash.com/photo-1541698432862-6f6f7f33ffe4?w=800&h=400&fit=crop' },
      // More images
    ],
    reviewsList: [
      { id: '1', reviewer: 'Maria Garcia', comment: 'Delicious Chinese food!', rating: 5 },
      // More reviews
    ]
  },
  {
    id: '5',
    name: 'Maria Garcia',
    email: 'maria.garcia@example.com',
    description: 'Mexican food expert',
    image: 'https://images.unsplash.com/photo-1534330207526-8e6a4495396c?w=150&h=150&fit=crop',
    followers: 160,
    reviews: 65,
    rating: 4.7,
    gallery: [
      { uri: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop' },
      // More images
    ],
    reviewsList: [
      { id: '1', reviewer: 'Nguyen Thi Anh', comment: 'Authentic Mexican flavors!', rating: 5 },
      // More reviews
    ]
  }
];

export const Testimonials: Testimonial[] = [
  { id: '1', name: 'Nguyen Thi Anh', review: 'This site made my event unforgettable with its exceptional catering service. The Bangladeshi cuisine was a hit among my guests!', rating: 5 },
  { id: '2', name: 'Dewi Sartika', review: 'I was skeptical about finding a good caterer online, but this platform proved me wrong. The Indian dishes were authentic and delicious.', rating: 5 },
  { id: '3', name: 'Ahmad Zulkifli', review: 'The Italian catering I found here was top-notch. The chefs are genuine artisans. It made our corporate event stand out.', rating: 5 },
  { id: '4', name: 'Chen Wei', review: 'Our family gathering was a success thanks to the Chinese cuisine caterer we found here. The food was fresh, and the flavors were incredible.', rating: 5 },
  { id: '5', name: 'Maria Santos', review: 'Finding a Mexican cuisine expert for my birthday party was a breeze with this site. The food was vibrant, flavorful, and beautifully presented.', rating: 5 },
  { id: '6', name: 'Siti Aishah', review: 'The platform is a game-changer for event planning. It connected me to the best caterers in town, making my wedding day perfect.', rating: 5 },
  { id: '7', name: 'Lee Min-ho', review: 'I was impressed by the variety of cuisines and the ease of booking a caterer for my event. The service was professional and hassle-free.', rating: 5 },
  { id: '8', name: 'Anita Krishnan', review: 'Thanks to this website, I discovered a passion for diverse cuisines. The catering for our family reunion was exceptional.', rating: 5 },
  { id: '9', name: 'Tran Quoc Khanh', review: 'The detailed reviews and ratings helped me choose the perfect caterer for my company’s annual meet. The food was a major highlight.', rating: 5 },
  { id: '10', name: 'Laila Majnun', review: 'This site is a gem for food lovers and event planners. It connected me with a caterer who understood exactly what I needed for my boutique event.', rating: 5 },
];
