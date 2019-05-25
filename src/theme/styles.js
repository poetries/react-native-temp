import { Platform, Dimensions } from 'react-native';
import Colors from './color';

export default {
  appContainer: {
    backgroundColor: '#000',
  },
  navbar: {
    headerStyle:{
      backgroundColor: Colors.brand.primary,
      ...Platform.select({
        ios: {
          borderBottomWidth: 0
        },
        android: {
          elevation: 0,
        },
      }),
    },
    headerTitleStyle:{
      color: '#fff',
      fontWeight: 'normal',
      textAlign:'center',
      flex:1,
      fontSize:16
    },
    headerTintColor: "#fff",
  }
};

