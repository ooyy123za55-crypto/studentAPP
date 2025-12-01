
import { View, Text } from 'react-native'
import React from 'react'
import styles from '../assets/styles/studentCardStyle'

const StudentCard = (props) => {
  return (
    <View style={styles.card}>
        <View style={styles.avatarContainer}>
            <Text style={styles.avatar}>ddddd</Text>
        </View>
        <Text style={styles.studentName}>ddddd</Text>
        <Text style={styles.studentClass}>aaaaaa</Text>
        <Text style={styles.studentAge}>rrrrrr</Text>
        <Text style={styles.studentHobby}>yyyyy</Text>
    </View>
  )
}

export default StudentCard