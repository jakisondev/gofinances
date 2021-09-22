import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};

    border-radius: 5px;
    padding: 18px;

    align-items:center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(16)}px;

    color: ${({ theme }) => theme.colors.shape};
`;