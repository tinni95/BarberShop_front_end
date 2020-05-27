import React from "react"
import { View,Text } from "react-native"
import RoundButton from "../components/RoundButton"
import colors from "../constants/Colors"

export default function AppWrapper({logout}){
    return <View style={{flex:1,alignContent:"center",justifyContent:"center",alignItems:"center"}}>
        <Text>Logged in</Text>
        <RoundButton text="Logout" onPress={logout} color={colors.primary} ></RoundButton>
    </View>
}

