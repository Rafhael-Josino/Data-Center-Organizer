import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const GestureContainer = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.inputBackground};
  width: 100%;
  height: ${RFPercentage(8)}px;
  padding: 16px 18px;
  border-radius: 5px;
`;

export const Container = styled(TouchableOpacity)`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Category = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    
    color: ${({ theme }) => theme.colors.rack};
`;

export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.rack};
    font-size: ${RFValue(20)}px;
`;