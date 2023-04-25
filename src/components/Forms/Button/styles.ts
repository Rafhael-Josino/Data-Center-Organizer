import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TouchableOpacity)`
    width: 100%;
    border-radius: 5px;
    padding: 18px;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.headerBackground};
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    
    color: ${({ theme }) => theme.colors.rack};
`;