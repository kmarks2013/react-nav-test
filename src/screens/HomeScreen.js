import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class HomeScreen extends Component {
    render() {
        return (
            <View>
                <Text style={styles.homeFont}> Welcome to your App! </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    homeFont: {
        fontSize: 45
    }
})