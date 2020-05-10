import React, { Component } from 'react'
import { Button, View, StyleSheet } from 'react-native'

export default class HomeScreen extends Component {
    render() {
        return (
            <View>
                <Button title="Go to the first screen" onPress={() => this.props.navigation.navigate("First")}/>
                <Button title="Go to the second screen" onPress={() => this.props.navigation.navigate("Second")}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
})