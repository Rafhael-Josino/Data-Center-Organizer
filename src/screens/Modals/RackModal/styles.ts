import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
     flex: 1;
     background-color: ${({ theme }) => theme.colors.background};
     align-items: center;     
     justify-content: center;
`;

export const Header = styled.View`
    background-color: ${({ theme }) => theme.colors.headerBackground};
    height: ${RFValue(113)}px;
    width: 100%;
    margin-bottom: 24px;
    
    align-items: center;
    justify-content: center; 
`;

export const HeaderText = styled.Text`
     color: ${({ theme }) => theme.colors.rack};

     font-family: ${({ theme }) => theme.fonts.bold};
     font-size: ${RFValue(24)}px;
`;

export const RackView = styled.View`
    width: 70%;
    height: 60%;
`;

export const Footer = styled.View`
    width: 100%;
    padding: 24px;
`;