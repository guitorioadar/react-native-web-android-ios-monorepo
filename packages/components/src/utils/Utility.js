import {Dimensions, Platform} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


export const shouldDrawerCollapse = () => {
    return !(screenWidth > 800 && Platform.OS === 'web');
};
