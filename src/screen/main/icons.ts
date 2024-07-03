import Ionicon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import OctIcon from 'react-native-vector-icons/Octicons';

export type IconModule = typeof Ionicon | typeof FeatherIcon;

export const getIconModule = (module: string): IconModule => {
  switch (module) {
    case 'Ionicon':
      return Ionicon;
    case 'FeatherIcon':
      return FeatherIcon;
    case 'Octicon':
      return OctIcon;
    default:
      return Ionicon;
  }
};
