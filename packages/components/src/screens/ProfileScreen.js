import React, {Component} from 'react';
import {Platform, StyleSheet, TouchableOpacity, Button, Text, View} from 'react-native';

const instructions = Platform.select({
    ios: 'This is from ios Profile,\n Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'This is from Android Profile' +
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
    web: 'This is from Android Profile \n'+'Press the reload button to refresh or save project and it will reload automatically',
});

export class ProfileScreen extends Component {

    constructor(props){
        super(props);
        console.log('Profile 1. Constructor')
    }

    static navigationOptions = {
        title: 'Profile',
    };

    render() {
        console.log('Profile 2: Render');
        console.log(this.props);
        return (
            <View>
                <Text style={styles.welcome}>Welcome to Profile</Text>
                <Text style={styles.welcome}>Welcome to React Native monorepo!</Text>
                <Text style={styles.instructions}>To get started, edit App.js from component/src</Text>
                <Text style={styles.instructions}>{instructions}</Text>
                <Button
                    title={'Go to Detail'}
                    onPress={()=> this.props.navigation.goBack()}
                />
            </View>
        );
    }
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
