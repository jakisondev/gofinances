import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import theme from '../../global/styles/theme';

interface CategoryProps {
    isActive: boolean;
}

const { colors, fonts } = theme;

export const Container = styled(GestureHandlerRootView)`
    flex: 1;
    background-color: ${colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFValue(113)}px;

    background-color: ${colors.primary};
    
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 19px;
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.shape};
    font-size: ${RFValue(18)}px;
`;

export const Category = styled.TouchableOpacity<CategoryProps>`
    width: 100%;
    padding:${RFValue(15)}px;

    flex-direction: row;
    align-items: center;

    background-color: ${({ isActive }) =>
        isActive ? colors.secondary_light : colors.background
    };
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    margin-right: 16px;
`;

export const Name = styled.Text`
    font-family: ${fonts.regular};
    font-size: ${RFValue(14)}px;
`;

export const Separator = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${colors.text};
`;

export const Footer = styled.View`
    width: 100%;
    padding: 24px;
`;