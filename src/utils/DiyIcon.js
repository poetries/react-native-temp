import createIconSet from 'react-native-vector-icons/lib/create-icon-set';
import glyphMap from './iconfont.json';

const iconSet = createIconSet(glyphMap, 'DIYIcon', 'iconfont.ttf');   //  ‘DIYIcon‘可自定义名称

export default iconSet;

export const Button = iconSet.Button;
export const TabBarItem = iconSet.TabBarItem;
export const TabBarItemIOS = iconSet.TabBarItemIOS;
export const ToolbarAndroid = iconSet.ToolbarAndroid;
export const getImageSource = iconSet.getImageSource;