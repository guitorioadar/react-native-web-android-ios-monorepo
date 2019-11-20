import React, {Component} from 'react';
import {Platform, StyleSheet, TouchableOpacity, Button, Text, View} from 'react-native';

const instructions = Platform.select({
    ios: 'This is from ios Details,\n Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'This is from Android Details' +
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
    web: 'This is from Android Details \n'+'Press the reload button to refresh or save project and it will reload automatically',
});

type Props = {};
export default class DetailScreen extends Component<Props> {

    constructor(props){
        super(props);
        console.log('Detail 1. Constructor')
    }

    static navigationOptions = {
        title: 'Details',
    };
    render() {
        console.log('Detail 1. Constructor');
        console.log(this.props);
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native monorepo!</Text>
                <Text style={styles.instructions}>To get started, edit App.js from component/src</Text>
                <Text style={styles.instructions}>{instructions}</Text>
                <Button title={'Go to Detail'} onPress={() => {
                    console.log('Button Clicked');
                }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
