// navigation/types.ts

import { Chef, Cuisine, MealCategory } from "../types/types";

export type RootStackParamList = {
  Login: undefined; // No parameters for the Login screen
  Signup: undefined; // No parameters for the Signup screen
  Home: undefined; // No parameters for the Home screen
  Profile: {
    chef: Chef;
    isCurrentUser: boolean;
  };
  Orders: undefined;
  CuisineDetails: {
    cuisine: Cuisine;
  };
};