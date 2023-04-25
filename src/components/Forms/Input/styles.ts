import styled from "styled-components/native";
import { TextInput } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TextInput)`
        background-color: ${({ theme }) => theme.colors.inputBackground};
        color: ${({ theme }) => theme.colors.rack};

        width: 100%;
        height: ${RFPercentage(8)}px;
        padding: 16px 18px;
        border-radius: 5px;

        font-family: ${({ theme }) => theme.fonts.regular};
        font-size: ${RFValue(18)}px;
`;