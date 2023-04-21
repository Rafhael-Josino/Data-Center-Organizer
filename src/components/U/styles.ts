import styled from 'styled-components/native';

type Uprops = {
    asset?: string
}

export const U_view = styled.View`
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 0 5px 0 5px;
    height: 30px;
    width: 100%;
    background-color: black;
    border: 1px solid #eee;
`

export const U_text = styled.Text<Uprops>`
    color: ${({ theme, asset }) => 
        asset !== '-'? theme.colors.rack : theme.colors.rackEmpty
    };

    font-family: ${({ theme }) => theme.fonts.regular};
    `

export const U_edit = styled.TextInput`
    background-color: ${({ theme}) => theme.colors.inputBackground};
    color: ${({ theme}) => theme.colors.rack};
    
    font-family: ${({ theme }) => theme.fonts.regular};

`