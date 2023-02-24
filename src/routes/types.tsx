import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  SignIn: undefined;
  Dashboard: undefined;
};

export type NavigateProps = StackNavigationProp<RootStackParamList>;
