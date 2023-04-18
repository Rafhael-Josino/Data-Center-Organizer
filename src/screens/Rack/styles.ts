import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Main = styled.View`
     flex: 1;
     background-color: ${({ theme }) => theme.colors.background};
     align-items: center;     
     justify-content: center;
`;

export const Header = styled.View`
     width: 100%;
     height: ${RFPercentage(10)}px;
     background-color: ${({ theme }) => theme.colors.rack};
     align-items: center;
     justify-content: center;
     margin-bottom: ${RFPercentage(5)}px;
     `;

export const HeaderText = styled.Text`
     font-family: ${({ theme }) => theme.fonts.bold};
`;

export const RackView = styled.View`
    width: 70%;
    height: 60%;
`