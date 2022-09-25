import React, { useEffect } from 'react';
import { Container, H1, P } from '../../../utils/components';
import Ionicons from "react-native-vector-icons/Ionicons";
import AppColors from '../../../utils/colors';
import { Width } from '../../../utils/dimensions';
import TouchableWrapper from '../../../utils/TouchableWrapper';
import styles from './styles';
import { FlatList, Image } from 'react-native';

interface ProfileProps{
    navigation : any
}
interface ImageType{
    title? : string,
    link? : string
}

interface PostType{
    title? : string,
    body? : string
}
export default function Profile({navigation} : ProfileProps){
    const [tab,setTab] = React.useState("Posts")
    const PostList : Array<PostType> = [
        {
            title : "Header",
            body : "He'll want to use your yacht, and I don't want this thing smelling like fish."
        },
        {
            title : "Header",
            body : "He'll want to use your yacht, and I don't want this thing smelling like fish."
        },
        {
            title : "Header",
            body : "He'll want to use your yacht, and I don't want this thing smelling like fish."
        },
        {
            title : "Header",
            body : "He'll want to use your yacht, and I don't want this thing smelling like fish."
        },
        {
            title : "Header",
            body : "He'll want to use your yacht, and I don't want this thing smelling like fish."
        },
        {
            title : "Header",
            body : "He'll want to use your yacht, and I don't want this thing smelling like fish."
        }
    ]
    const ImageList : Array<ImageType> = [
        {
            title : "Header",
            link : "He'll want to use your yacht, and I don't want this thing smelling like fish."
        },
        {
            title : "Header",
            link : "He'll want to use your yacht, and I don't want this thing smelling like fish."
        },
        {
            title : "Header",
            link : "He'll want to use your yacht, and I don't want this thing smelling like fish."
        },
        {
            title : "Header",
            link : "He'll want to use your yacht, and I don't want this thing smelling like fish."
        },
        {
            title : "Header",
            link : "He'll want to use your yacht, and I don't want this thing smelling like fish."
        },
        {
            title : "Header",
            link : "He'll want to use your yacht, and I don't want this thing smelling like fish."
        }
    ]
    const renderItem = (data : any) => {
        if(tab === "Posts") return(
            <Container direction='row' horizontalAlignment='space-between' marginTop={2}
                width={90}
                alignSelf='center'
            >
                <Container width={10}
                    height={5}
                    backgroundColor={AppColors.gray4}
                    borderRadius={5}
                />
                <Container width={75}>
                    <H1 fontSize={3.5} bold={600}>{data?.item?.title}</H1>
                    <P fontSize={3.3}>{data?.item?.body}</P>
                </Container>
            </Container>
        )
        return(
            <Container backgroundColor={AppColors.gray4} height={20} width={90} alignSelf='center' marginTop={2}>

            </Container>
        )
    }

    return(
        <Container 
            width={100}
            backgroundColor={AppColors.primary}
            flex={1}
        >
            <Container 
                direction='row' 
                horizontalAlignment='space-between' width={90}
                alignSelf='center'
                marginTop={3}
                verticalAlignment='center'
                paddingBottom={25}
            >
                <TouchableWrapper onPress={()=>null} isText>
                    <H1 color={AppColors.white} fontSize={3.5} bold={500}>Settings</H1>
                </TouchableWrapper>
                <H1 color={AppColors.white} fontSize={6} bold={600}>Profile</H1>
                <TouchableWrapper onPress={()=>null} isText>
                    <H1 color={AppColors.white} fontSize={3.5} bold={500}>Logout</H1>
                </TouchableWrapper>
            </Container>
            <Container backgroundColor={AppColors.white} flex={1}>
                <Container
                    style={styles.profileImageWrapper}
                >
                    <Image 
                        source={{uri : "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg"}}
                        style={styles.profileImage}
                    />
                </Container>
                <Container marginTop={10}>
                    <H1 textAlign='center' fontSize={6} bold={600}>Victoria Robertson</H1>
                    <H1 textAlign='center' fontSize={3.5} bold={600}>A mantra goes here</H1>
                </Container>
                <Container flex={1}>
                    <Container width={90} alignSelf='center' direction='row'
                        borderRadius={Width(10)}
                        backgroundColor={AppColors.gray4}
                        paddingVertical={0.4}
                        paddingHorizontal={1}
                        marginTop={3}
                        horizontalAlignment='space-between'
                    >
                        {
                            [
                                "Posts","Photos"
                            ].map((item,i)=><TouchableWrapper key={i} onPress={()=>setTab(item)} isText
                                style={tab === item ? styles.currentTab : styles.tab}
                                rippleColor={AppColors.transparent}
                            >
                                <H1 key={i} color={tab === item ? AppColors.primary : AppColors.gray2}
                                    fontSize={3.5}
                                >{item}</H1>
                            </TouchableWrapper>)
                        }
                    </Container>
                    <FlatList 
                        data={tab === "Posts" ? PostList : ImageList}
                        renderItem={renderItem}
                    />
                </Container>
            </Container>
        </Container>
    )
}