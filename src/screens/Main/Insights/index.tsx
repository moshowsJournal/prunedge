import React from 'react';
import { Container, H1, P } from '../../../utils/components';
import TouchableWrapper from '../../../utils/TouchableWrapper';
import Ionicons from "react-native-vector-icons/Ionicons";
import AppColors from '../../../utils/colors';
import styles from './styles';
import { FlatList } from 'react-native';

interface InsightsProps{
    navigation : any,
    route : any
}
export default function Insights({navigation,route} : InsightsProps){
    const data = [
        {
            title : "Item",
            label : "Statistic",
            color : AppColors.primary
        },
        {
            title : "Item",
            label : "Statistic",
            color : AppColors.darkGreen
        },
        {
            title : "Item",
            label : "Statistic",
            color : AppColors.primary
        },
        {
            title : "Item",
            label : "Statistic",
            color : AppColors.darkGreen
        },
        {
            title : "Item",
            label : "Statistic",
            color : AppColors.primary
        },
        {
            title : "Item",
            label : "Statistic",
            color : AppColors.darkGreen
        },
        {
            title : "Item",
            label : "Statistic",
            color : AppColors.primary
        },
        {
            title : "Item",
            label : "Statistic",
            color : AppColors.darkGreen
        },
        {
            title : "Item",
            label : "Statistic",
            color : AppColors.darkGreen
        },
        {
            title : "Item",
            label : "Statistic",
            color : AppColors.primary
        },
        {
            title : "Item",
            label : "Statistic",
            color : AppColors.darkGreen
        },
    ]
    const renderItem = (data : any) => {
        return(
            <Container width={90} alignSelf='center' paddingVertical={2}
                direction='row'
                horizontalAlignment='space-between'
                borderBottomWidth={1}
                borderColor={AppColors.gray}
                verticalAlignment='center'
            >
                <Container style={styles.icon} backgroundColor={data?.item?.color} />
                <Container width={80} direction='row' horizontalAlignment='space-between'>
                    <H1>{data?.item?.title}</H1>
                    <P>{data?.item?.label}</P>
                </Container>
            </Container>
        )
    }
    return(
        <Container flex={1} backgroundColor={AppColors.white}>
            <Container direction='row' verticalAlignment='center'
                horizontalAlignment='space-between'
                marginTop={3}
                width={63}
            >
                <TouchableWrapper onPress={()=>null} isText>
                    <H1 fontSize={3.5} color={AppColors.primary}>Back</H1>
                </TouchableWrapper>
                <H1 fontSize={6}>Insights</H1>
            </Container>
            <Container marginTop={3} alignSelf='center'>
                <Container style={styles.graph2}>
                    <Container style={styles.graph1}>
                        <H1 fontSize={5.3} color={AppColors.primary}>$32.01</H1>
                        <P fontSize={3} color={AppColors.gray2}>100% spent</P>
                    </Container>
                </Container>
            </Container>
            <Container width={90} alignSelf='center'>
                <H1 fontSize={5}>Expenses</H1>
            </Container>
            <FlatList 
                data={data}
                renderItem={renderItem}
                keyExtractor={(item,i)=>i.toString()}
            />
        </Container>
    )
}