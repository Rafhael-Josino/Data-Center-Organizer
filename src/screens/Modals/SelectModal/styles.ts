import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

type OptionProps = {
    isActive: boolean;
}

export const Container = styled.View`
    flex: 1;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFValue(113)}px;
    margin-bottom: 10px;

    background-color: ${({ theme }) => theme.colors.headerBackground};

    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(28)}px;

    color: ${({ theme }) => theme.colors.rack};  
`;

export const Option = styled.TouchableOpacity<OptionProps>`
    width: 100%;
    padding: ${RFValue(15)}px;

    flex-direction: row;

    background-color: ${({ isActive, theme }) => 
        isActive? theme.colors.headerBackground : theme.colors.background
    };
`;

export const Name = styled.Text`
    color: ${({ theme }) => theme.colors.rack};

    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
`;

export const Separator = styled.View`
     height: 1px;
     width: 100%;
     background-color: ${({ theme }) => theme.colors.rack};
`;

export const Footer = styled.View`
    width: 100%;
    padding: 24px;
`;