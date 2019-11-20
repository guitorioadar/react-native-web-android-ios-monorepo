import React, {Component} from 'react';
import {Platform, StyleSheet, TouchableOpacity, Button, Text, View} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
    web: 'Press the reload button to refresh or save project and it will reload automatically',
});

// type Props = {};
export class HomeScreen extends Component {

    constructor(props){
        super(props);
        console.log('Home 1. Constructor')
    }

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Home',
            headerBackTitle: 'Return',
            headerLeft: () => (
                <Button
                    onPress={() => {
                        console.log('Home 2 Button Press Log: ');
                        console.log(navigation);
                        navigation.openDrawer()
                    }}
                    title="Menu"
                    color="black"
                />
            ),
        }
    };

    render() {
        console.log('Home 3 Screen Log: ');
        console.log(this.props);
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native monorepo with Web Android & IOS</Text>
                <Text style={styles.instructions}>To get started, edit App.js from component/src</Text>
                <Text style={styles.instructions}>{instructions}</Text>
                <Button title={'Go to Detail'} onPress={
                    () => this.props.navigation.navigate('Details')
                    // () => this.props.navigation.openDrawer()
                }/>
            </View>
        );
    }
}

export default HomeScreen

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
