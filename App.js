import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './assets/styles/AppStyles'
import Header from './components/Header'
import appInfo from './data/appInfo'
import studentData from './data/studentData'
import StudentCard from './components/StudentCard'

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header title={appInfo.title} subtitle={appInfo.subtitle} schoolName={appInfo.schoolName} version={appInfo.version}/>

      <View style={styles.content}>
        {studentData.map((s) => (
          <StudentCard
            key={s.id}
            emoji={s.emoji}
            name={s.name}
            class={s.class}
            age={s.age}
            hobby={s.hobby}
          />
        ))}
      </View>
    </ScrollView>
  )
}