import { View } from 'react-native'
import React from 'react'
import AuthenticationContainer from '../components/AuthenticationContainer'
import OTPInput from '../components/OTPInput'


const OTP = () => {
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
        <AuthenticationContainer title="Enter OTP Code" subtitle="Code has been sent to your email" secondTag={<OTPInput/>}/>
    </View>
  )
}

export default OTP