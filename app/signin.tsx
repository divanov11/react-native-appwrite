import { SafeAreaView } from 'react-native'
import React from 'react'
import { useAuth } from '@/context/AuthContext'
import { Redirect } from 'expo-router'
import TextCustom from './components/TextCustom'

const signin = () => {
    const {session} = useAuth()

    if(session) return <Redirect href="/"/>
  return (
    <SafeAreaView>
      <TextCustom fontSize={22}>signin</TextCustom>
    </SafeAreaView>
  )
}

export default signin