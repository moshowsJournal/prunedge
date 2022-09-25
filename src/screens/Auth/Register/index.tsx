import React from 'react'
import { Image, Keyboard } from 'react-native'
import { Checkbox, TextInput } from 'react-native-paper'
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

    const [checked,setChecked] = React.useState(false)
    const [show,setShow] = React.useState(false)

    const [data,setData] = React.useState({
        full_name : "",
        email_address : "",
        password : ""
    });

    const submitHandler = async () => {
        Keyboard.dismiss()
        dispatch(changeRoute("Main"))
    }
    return(
        <Container>
            <Container direction='row' horizontalAlignment='space-between' marginTop={3}
                verticalAlignment='center'
                width={90}
                alignSelf='center'
            >
                <TouchableWrapper onPress={()=>null}
                    size={5}
                >
                    <Ionicons name="close-outline" size={Width(7)} color={AppColors.primary} />
                </TouchableWrapper>
                <H1 fontSize={6}>Sign Up</H1>
                <TouchableWrapper onPress={()=>null}
                >
                    <H1 color={AppColors.primary} fontSize={3.5}>Login</H1>
                </TouchableWrapper>
            </Container>
            <KeyboardAwareScrollView>
                <Container width={90} horizontalAlignment='center' alignSelf='center' marginTop={3}>
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
                            onChangeText={(value : string)=>setData({...data, password : value})}
                            value={data.password}
                            right={<TextInput.Icon 
                            name={show ? "eye-off" : "eye"}
                            color={AppColors.primary}
                            onPress={()=>setShow(!show)}
                            style={styles.icon}
                        />}
                        />
                    </Container>
                    <Container direction='row' marginTop={3} marginBottom={3}
                        verticalAlignment='flex-start'
                    >
                        <Checkbox color={AppColors.primary} onPress={()=>setChecked(!checked)}
                            uncheckedColor={AppColors.gray}
                            status={checked ? 'checked' : 'unchecked'}
                        />
                        <Container>
                            <P fontSize={4} color={AppColors.gray3}>I would like to receive your newsletter and other promotional information.</P>
                        </Container>
                    </Container>
                    <Button text={"Sign Up"} onPress={submitHandler} primaryColor={AppColors.primary} />
                    <TouchableWrapper onPress={()=>null} isText width={70} style={styles.forgot}>
                        <H1 color={AppColors.primary} bold={600}>Already registered? Go to Login</H1>
                    </TouchableWrapper>
                </Container>
            </KeyboardAwareScrollView>
        </Container>
    )
}