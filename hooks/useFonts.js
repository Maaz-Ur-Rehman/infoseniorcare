import * as Font from 'expo-font';

const useFonts = async () => {
  try {
    await Font.loadAsync({
      'Gilroy-Bold': require('./../assets/fonts/Gilroy-Bold.ttf'),
      'Gilroy': require('./../assets/fonts/Gilroy-Regular.ttf'),

    });
    console.log('Font loaded successfully');
  } catch (error) {
    console.error('Error loading font:', error);
  }
};

export default useFonts;