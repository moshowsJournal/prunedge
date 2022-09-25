import React from 'react';
import { BackHandler, Container, H1, P } from '../../../utils/components';
import ScreenWrapper from '../../../utils/ScreenWrapper';
import TouchableWrapper from '../../../utils/TouchableWrapper';
import Ionicons from "react-native-vector-icons/Ionicons";
import AppColors from '../../../utils/colors';
import { Width } from '../../../utils/dimensions';
import { Image } from 'react-native';
import styles from './styles';
import { useSelector } from 'react-redux';

interface InsightsProps{
    navigation : any,
    route : any
}
export default function Insights({navigation,route} : InsightsProps){
    
    return(
        <Container>
            <H1>Insights</H1>
        </Container>
    )
}