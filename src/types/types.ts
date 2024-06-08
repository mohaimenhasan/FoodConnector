// types.ts

export type Cuisine = {
  id: string;
  name: string;
  image: string;
  mealCategories: MealCategory[];
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  verified: boolean;
};

export type Chef = User & {
  description: string;
  image: string;
  followers: number;
  reviews: number;
  rating: number;
  gallery: Array<{ uri: string }>;
  reviewsList: Array<{
    id: string;
    reviewer: string;
    comment: string;
    rating: number;
  }>;
};

export type Testimonial = {
  id: string;
  name: string;
  review: string;
  rating: number;
};

export type Meal = {
  id: string;
  name: string;
  image: string;
  description: string;
  chefEmail: string;
  date: string;
  category: string;
};

export type MealCategory = {
  id: string;
  categoryName: string;
  meals: Meal[];
};
