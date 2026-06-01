import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';

import 'react-native-reanimated';
import Home from '../components/home'



export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
 
  return (
  
      <Stack>
      <Home />
      </Stack>
  

  );
}


