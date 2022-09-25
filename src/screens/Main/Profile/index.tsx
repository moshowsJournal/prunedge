import React, { useEffect } from 'react';
import { Container, H1, P } from '../../../utils/components';
import Ionicons from "react-native-vector-icons/Ionicons";
import AppColors from '../../../utils/colors';
import { Width } from '../../../utils/dimensions';
import TouchableWrapper from '../../../utils/TouchableWrapper';
import styles from './styles';

interface ProfileProps{
    navigation : any
}

export default function Profile({navigation} : ProfileProps){
    return(
        <Container direction='row' horizontalAlignment='space-between' width={90} alignSelf='center'>
            <H1>Profile</H1>
        </Container>
    )
}