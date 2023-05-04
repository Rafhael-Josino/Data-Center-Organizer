import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { AntDesign, Foundation } from '@expo/vector-icons';


export const Main = styled.View`
     flex: 1;
     background-color: ${({ theme }) => theme.colors.background};
     align-items: center;     
`

export const Header = styled.View`
     width: 100%;
     margin-bottom: ${RFPercentage(20)}px;
     height: ${RFPercentage(20)}px;
     background-color: ${({ theme }) => theme.colors.headerBackground};
     align-items: center;
     justify-content: space-around;
     flex-direction: row;
`;

export const HeaderText = styled.Text`
     font-family: ${({ theme }) => theme.fonts.bold};
     font-size: ${RFValue(28)}px;

     color: white;
`;

export const Photo = styled.Image`
     width: ${RFValue(50)}px;
     height: ${RFValue(50)}px;
     border-radius: 10px;
`;