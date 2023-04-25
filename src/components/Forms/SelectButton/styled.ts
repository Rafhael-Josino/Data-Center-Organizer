import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity)`
    background-color: ${({ theme }) => theme.colors.inputBackground};
    
    width: 100%;
    height: ${RFPercentage(8)}px;
    padding: 16px 18px;
    border-radius: 5px;

    flex-direction: row;
    align-items: center;
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