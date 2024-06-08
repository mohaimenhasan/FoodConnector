// navigation/types.ts

import { Chef } from "../types/types";

export type RootStackParamList = {
  Home: undefined; // No parameters for the Home screen
  Profile: {
    chef: Chef;
  };
  Orders: undefined;
};