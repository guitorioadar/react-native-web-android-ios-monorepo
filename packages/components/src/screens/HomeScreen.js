import React, {Component} from 'react';
import {Platform, StyleSheet,TouchableOpacity, Text, View} from 'react-native';
import { Button } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';

import HeaderComponent from '../component/header/HeaderComponent';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
    web: 'Press the reload button to refresh or save project and it will reload automatically'
});

export default class HomeScreen extends Component {

    static navigationOptions = {
        header: null
    };

    render() {
        console.log('Home Screen Log: ');
        console.log(this.props);
        return (
            <View style={styles.container}>
                <HeaderComponent headerProp={this.props} title={'SOHOJ'} leftIconVisible={false} leftIconDashboardVisible={true} />
                <Text style={styles.welcome}>Welcome to React Native monorepo with Web Android & IOS</Text>
                <Text style={styles.instructions}>To get started, edit App.js from component/src</Text>
                <Text style={styles.instructions}>{instructions}</Text>
                <Button
                    title={'Go to Detail'}
                    onPress={
                    ()=>this.props.navigation.navigate('Details')
                }/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
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
