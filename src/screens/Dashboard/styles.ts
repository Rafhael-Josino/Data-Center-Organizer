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
     margin-top: ${RFPercentage(15)}px;
     margin-bottom: ${RFPercentage(20)}px;
     height: ${RFPercentage(10)}px;
     background-color: ${({ theme }) => theme.colors.headerBackground};
     align-items: center;
     justify-content: center;
     flex-direction: row;
     gap: ${RFPercentage(10)}px;
     `;

export const HeaderText = styled.Text`
     font-family: ${({ theme }) => theme.fonts.bold};
     font-size: ${RFValue(18)}px;
     `;

export const Photo = styled.Image`
     width: ${RFValue(50)}px;
     height: ${RFValue(50)}px;
     border-radius: 10px;
     `;

export const Menu = styled.View`
     border-radius: 10px;
     flex-direction: row;
     align-items: center;
     justify-content: space-between;
     gap: ${RFValue(50)}px;
`

export const MenuIcon = styled.View`
     background-color: ${({ theme }) => theme.colors.headerBackground};
     width: ${RFValue(70)}px;
     height: ${RFValue(70)}px;
     align-items: center;
     justify-content: center;
     border-radius: 15px;
`

export const NewDataCenterIcon = styled(Foundation)`
     color: black;
     font-size: ${RFValue(35)}px;
`

export const OpenDataCenterIcon = styled(AntDesign)`
     color: black;
     font-size: ${RFValue(35)}px;
`