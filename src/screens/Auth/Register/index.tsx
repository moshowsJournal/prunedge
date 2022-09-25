import React from 'react'
import { Image, Keyboard } from 'react-native'
import { TextInput } from 'react-native-paper'
import Button from '../../../utils/Button'
import { BackHandler, Container, H1, P } from '../../../utils/components'
import Images from '../../../utils/images'
import Input from '../../../utils/Input'
import ScreenWrapper from '../../../utils/ScreenWrapper'
import TouchableWrapper from '../../../utils/TouchableWrapper'
import styles from './styles';
import AppColors from '../../../utils/colors'
import { Width } from '../../../utils/dimensions'
import Ionicons from "react-native-vector-icons/Ionicons"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useDispatch, useSelector } from 'react-redux'
import { changeRoute } from '../../../store/routeReducer'


interface RegisterProps{
    navigation : any
}

export default function Register({navigation} : RegisterProps){
    const dispatch = useDispatch()
    const [data,setData] = React.useState({
        full_name : "",
        email_address : "",
        phone_number : ""
    });

    const submitHandler = async () => {
        Keyboard.dismiss()
        dispatch(changeRoute("Main"))
    }
    return(
        <Container>
            <Container>
                <TouchableWrapper onPress={()=>null}
                    size={5}
                >
                    <Ionicons name="close-outline" size={Width(3)} color={AppColors.gray} />
                </TouchableWrapper>
            </Container>
            <KeyboardAwareScrollView>
                <Container width={90} horizontalAlignment='center' alignSelf='center'>
                    <Container horizontalAlignment='center' verticalAlignment='center'>
                        <Image 
                             source={{uri : Images.logo}}
                            style={styles.logo}
                        />
                    </Container>
                    <Container>
                        <Input label='Name' placeholder='Enter Full Name'
                            onChangeText={(value : string)=>setData({...data, full_name : value})}
                            value={data.full_name}
                        />
                    </Container>
                    <Container>
                        <Input label='Email' placeholder='Enter Email Address'
                            keyboardType={"email-address"}
                            onChangeText={(value : string)=>setData({...data, email_address : value})}
                            value={data.email_address}
                        />
                    </Container>
                    <Container>
                        <Input label='Password' placeholder='*******'
                            keyboardType="default"
                            secureTextEntry={true}
                            onChangeText={(value : string)=>setData({...data, phone_number : value})}
                            value={data.phone_number}
                        />
                    </Container>
                    <TouchableWrapper onPress={()=>navigation.goBack()} isText width={40} style={styles.forgot}>
                        <H1 color={AppColors.primary} bold={600}>Go back to sign in?</H1>
                    </TouchableWrapper>
                    <Button text={"Register"} onPress={submitHandler} primaryColor={AppColors.primary} />
                    <Container marginTop={4}>
                        <Container direction='row' verticalAlignment='center' horizontalAlignment='space-between'
                            width={70}
                        >
                            <Container width={28} height={0.2} backgroundColor={AppColors.primary} />
                            <H1 fontSize={4} color={AppColors.primary}>OR</H1>
                            <Container width={28} height={0.2} backgroundColor={AppColors.primary} />
                        </Container>
                    </Container>
                    <TouchableWrapper onPress={()=>null} isText style={styles.register}>
                        <Container verticalAlignment='center' horizontalAlignment='center'>
                            <P>By signing up, you are agreeing to our</P>
                            <H1 color={AppColors.primary} marginLeft={1}>Terms and Conditions</H1>
                        </Container>
                    </TouchableWrapper>
                </Container>
            </KeyboardAwareScrollView>
        </Container>
    )
}