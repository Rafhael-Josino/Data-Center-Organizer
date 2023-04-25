import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    background-color: ${({ theme }) => theme.colors.headerBackground};
    height: ${RFValue(113)}px;
    
    align-items: center;
    justify-content: center;    
`;

export const Title = styled.Text`   
    color: ${({ theme }) => theme.colors.rack};

    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(24)}px;
`;

export const Form = styled.View`
    flex: 1;
    justify-content: space-between;
    width: 100%;
    padding: 24px;
`;

export const Fields = styled.View`
    width: 100%;
    height: ${RFPercentage(45)}px;

    align-items: center;
    justify-content: space-between;
`;