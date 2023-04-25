import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

type Uprops = {
    asset: string
    selected: boolean
}

export const Container = styled(TouchableOpacity)`
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 0 5px 0 5px;
    height: 30px;
    width: 100%;
    background-color: black;
    border: 1px solid #eee;
`;

export const U_text = styled.Text<Uprops>`
    color: ${({ theme, asset, selected }) => 
        selected? theme.colors.formUSelected :
        asset !== '-'? theme.colors.formUOcupied : theme.colors.formUEmpty
    };

    font-family: ${({ theme }) => theme.fonts.regular};
`;