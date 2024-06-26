// ExampleData.ts

import { Chef, Cuisine, MealCategory, Testimonial, User } from "../types/types";

export const MainImageUri = 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&h=400&fit=crop';

export const LoginUsers: User[] = [
  {
    id: '11',
    firstName: 'Mohaimen',
    lastName: 'Khan',
    email: 'mohaimen@example.com',
    phone: '123-123-1234',
    address: '276 Scarboro Cres, Toronto, ON, Canada',
    verified: true,
  },
  {
    id: '12',
    firstName: 'Muhtasim',
    lastName: 'Khan',
    email: 'muhtasim@example.com',
    phone: '234-234-2345',
    address: '276 Scarboro Cres, Toronto, ON, Canada',
    verified: true,
  },
  {
    id: '13',
    firstName: 'Khurshid',
    lastName: 'Liza',
    email: 'liza@example.com',
    phone: '345-345-3456',
    address: '276 Scarboro Cres, Toronto, ON, Canada',
    verified: true,
  },
  {
    id: '14',
    firstName: 'Manzur',
    lastName: 'Khan',
    email: 'manzur@example.com',
    phone: '456-456-4567',
    address: '276 Scarboro Cres, Toronto, ON, Canada',
    verified: true,
  }
];

const BangladeshiBreakfast: MealCategory = {
  id: '1',
  categoryName: 'Breakfast',
  meals: [
    {
      id: '1',
      name: 'Paratha',
      image: 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg',
      description: 'A popular flatbread made with wheat flour, typically served with curries or yogurt.',
      chefEmail: 'chefA@example.com',
      date: '2024-06-01',
      category: 'Breakfast',
    },
    {
      id: '2',
      name: 'Bhapa Pitha',
      image: 'https://www.themealdb.com/images/media/meals/txsupu1511815755.jpg',
      description: 'Steamed rice cakes filled with jaggery and coconut, a traditional winter delicacy.',
      chefEmail: 'chefB@example.com',
      date: '2024-06-02',
      category: 'Breakfast',
    },
    {
      id: '3',
      name: 'Luchi and Aloo Dum',
      image: 'https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg',
      description: 'Deep-fried flatbread served with a spicy potato curry.',
      chefEmail: 'chefC@example.com',
      date: '2024-06-03',
      category: 'Breakfast',
    },
  ],
};

const BangladeshiLunch: MealCategory = {
  id: '2',
  categoryName: 'Lunch',
  meals: [
    {
      id: '4',
      name: 'Biryani',
      image: 'https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg',
      description: 'A mixed rice dish with its origins among the Muslims of the Indian subcontinent.',
      chefEmail: 'chefA@example.com',
      date: '2024-06-04',
      category: 'Lunch',
    },
    {
      id: '5',
      name: 'Bhuna Khichuri',
      image: 'https://www.themealdb.com/images/media/meals/xvrrux1511783685.jpg',
      description: 'A popular Bangladeshi dish made with rice, lentils, and meat or fish.',
      chefEmail: 'chefB@example.com',
      date: '2024-06-05',
      category: 'Lunch',
    },
    {
      id: '6',
      name: 'Shorshe Ilish',
      image: 'https://www.themealdb.com/images/media/meals/sytvww1511886980.jpg',
      description: 'Hilsa fish cooked in a mustard seed paste, a delicacy of Bengali cuisine.',
      chefEmail: 'chefC@example.com',
      date: '2024-06-06',
      category: 'Lunch',
    },
  ],
};

const BangladeshiDinner: MealCategory = {
  id: '3',
  categoryName: 'Dinner',
  meals: [
    {
      id: '7',
      name: 'Kacchi Biryani',
      image: 'https://www.themealdb.com/images/media/meals/urxywu1511816700.jpg',
      description: 'A special type of Biryani where raw marinated meat is cooked with rice.',
      chefEmail: 'chefA@example.com',
      date: '2024-06-07',
      category: 'Dinner',
    },
    {
      id: '8',
      name: 'Tehari',
      image: 'https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg',
      description: 'A spicier version of biryani, typically made with beef or chicken.',
      chefEmail: 'chefB@example.com',
      date: '2024-06-08',
      category: 'Dinner',
    },
    {
      id: '9',
      name: 'Morog Polao',
      image: 'https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg',
      description: 'Chicken pilaf, a popular dish in Bangladeshi cuisine.',
      chefEmail: 'chefC@example.com',
      date: '2024-06-09',
      category: 'Dinner',
    },
  ],
};

const BangladeshiSnacks: MealCategory = {
  id: '4',
  categoryName: 'Snacks',
  meals: [
    {
      id: '10',
      name: 'Fuchka',
      image: 'https://www.themealdb.com/images/media/meals/utxryw1511721587.jpg',
      description: 'A popular street food, known as pani puri in other parts of India.',
      chefEmail: 'chefA@example.com',
      date: '2024-06-10',
      category: 'Snacks',
    },
    {
      id: '11',
      name: 'Chotpoti',
      image: 'https://www.themealdb.com/images/media/meals/txwypw1511389395.jpg',
      description: 'A spicy dish made with peas, potatoes, and tamarind water.',
      chefEmail: 'chefB@example.com',
      date: '2024-06-11',
      category: 'Snacks',
    },
    {
      id: '12',
      name: 'Jhalmuri',
      image: 'https://www.themealdb.com/images/media/meals/uuxwvq1483907861.jpg',
      description: 'A spicy puffed rice snack mixed with vegetables and mustard oil.',
      chefEmail: 'chefC@example.com',
      date: '2024-06-12',
      category: 'Snacks',
    },
  ],
};

const BangladeshiDesserts: MealCategory = {
  id: '5',
  categoryName: 'Desserts',
  meals: [
    {
      id: '13',
      name: 'Pithas',
      image: 'https://www.themealdb.com/images/media/meals/1550440209.jpg',
      description: 'Traditional homemade cakes, usually made from rice flour and filled with sweet or savory ingredients.',
      chefEmail: 'chefA@example.com',
      date: '2024-06-13',
      category: 'Desserts',
    },
    {
      id: '14',
      name: 'Rasgulla',
      image: 'https://www.themealdb.com/images/media/meals/ytvwtp1483908615.jpg',
      description: 'A syrupy dessert made from ball-shaped dumplings of chhena and semolina dough.',
      chefEmail: 'chefB@example.com',
      date: '2024-06-14',
      category: 'Desserts',
    },
    {
      id: '15',
      name: 'Chomchom',
      image: 'https://www.themealdb.com/images/media/meals/1525876468.jpg',
      description: 'A traditional Bengali sweet made from milk and sugar.',
      chefEmail: 'chefC@example.com',
      date: '2024-06-15',
      category: 'Desserts',
    },
  ],
};

export const Cuisines: Cuisine[] = [
  {
    id: '1',
    name: 'Bangladeshi',
    image: 'https://foodish-api.com/images/biryani/biryani7.jpg',
    mealCategories: [BangladeshiBreakfast, BangladeshiLunch, BangladeshiDinner, BangladeshiSnacks, BangladeshiDesserts],
  },
  {
    id: '2',
    name: 'Indian',
    image: 'https://foodish-api.com/images/butter-chicken/butter-chicken1.jpg',
    mealCategories: [],
  },
  {
    id: '3',
    name: 'Italian',
    image: 'https://foodish-api.com/images/pasta/pasta4.jpg',
    mealCategories: [],
  },
  {
    id: '4',
    name: 'Chinese',
    image: 'https://foodish-api.com/images/dessert/dessert30.jpg',
    mealCategories: [],
  },
  {
    id: '5',
    name: 'Mexican',
    image: 'https://foodish-api.com/images/rice/rice32.jpg',
    mealCategories: [],
  },
];

export const Chefs: Chef[] = [
  {
    id: '1',
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, USA',
    verified: true,
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
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@example.com',
    phone: '987-654-3210',
    address: '456 Elm St, Othertown, USA',
    verified: true,
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
    firstName: 'Emily',
    lastName: 'Clark',
    email: 'emily.clark@example.com',
    phone: '555-123-4567',
    address: '789 Maple St, Sometown, USA',
    verified: true,
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
    firstName: 'Michael',
    lastName: 'Lee',
    email: 'michael.lee@example.com',
    phone: '321-654-9870',
    address: '321 Oak St, Anycity, USA',
    verified: true,
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
    firstName: 'Maria',
    lastName: 'Garcia',
    email: 'maria.garcia@example.com',
    phone: '456-789-0123',
    address: '654 Pine St, Newtown, USA',
    verified: false,
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

export const Users: User[] = [
  {
    id: '1',
    firstName: 'Nguyen Thi',
    lastName: 'Anh',
    email: 'nguyen.thi.anh@example.com',
    phone: '111-222-3333',
    address: '123 Cherry Lane, Springfield, USA',
    verified: true,
  },
  {
    id: '2',
    firstName: 'Dewi',
    lastName: 'Sartika',
    email: 'dewi.sartika@example.com',
    phone: '444-555-6666',
    address: '456 Maple Street, Metropolis, USA',
    verified: false,
  },
  {
    id: '3',
    firstName: 'Ahmad',
    lastName: 'Zulkifli',
    email: 'ahmad.zulkifli@example.com',
    phone: '777-888-9999',
    address: '789 Oak Avenue, Smallville, USA',
    verified: true,
  },
  {
    id: '4',
    firstName: 'Chen',
    lastName: 'Wei',
    email: 'chen.wei@example.com',
    phone: '101-202-3030',
    address: '101 Pine Court, Gotham, USA',
    verified: false,
  },
  {
    id: '5',
    firstName: 'Maria',
    lastName: 'Santos',
    email: 'maria.santos@example.com',
    phone: '404-505-6060',
    address: '202 Birch Boulevard, Star City, USA',
    verified: true,
  },
  {
    id: '6',
    firstName: 'Siti',
    lastName: 'Aishah',
    email: 'siti.aishah@example.com',
    phone: '505-606-7070',
    address: '303 Cedar Drive, Riverdale, USA',
    verified: true,
  },
  {
    id: '7',
    firstName: 'Lee',
    lastName: 'Min-ho',
    email: 'lee.minho@example.com',
    phone: '606-707-8080',
    address: '404 Elm Street, Central City, USA',
    verified: false,
  },
  {
    id: '8',
    firstName: 'Anita',
    lastName: 'Krishnan',
    email: 'anita.krishnan@example.com',
    phone: '707-808-9090',
    address: '505 Spruce Lane, Coast City, USA',
    verified: true,
  },
  {
    id: '9',
    firstName: 'Tran Quoc',
    lastName: 'Khanh',
    email: 'tran.quoc.khanh@example.com',
    phone: '808-909-1010',
    address: '606 Fir Street, Bludhaven, USA',
    verified: false,
  },
  {
    id: '10',
    firstName: 'Laila',
    lastName: 'Majnun',
    email: 'laila.majnun@example.com',
    phone: '909-101-1111',
    address: '707 Willow Road, Keystone City, USA',
    verified: true,
  },
];
