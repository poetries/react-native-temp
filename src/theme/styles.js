import { Platform, Dimensions } from 'react-native';
import Colors from './color';

export default {
  appContainer: {
    backgroundColor: '#000',
  },
  navbar: {
    headerStyle:{
      backgroundColor: Colors.brand.primary
    },
    headerTitleStyle:{
      color: '#fff',
      fontWeight: 'normal',
      textAlign:'center',
      flex:1,
      fontWeight: 'normal',
      fontSize:14
    },
    headerTintColor: "#fff",
  }
};

