import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text, Button, Dimensions} from 'react-native';
import {shouldDrawerCollapse} from '../utils/Utility';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
    web: 'Press the reload button to refresh or save project and it will reload automatically',
});

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

type Props = {};
export default class HomeScreen extends Component<Props> {
    render() {
        console.log('Home Screen Log: ');
        console.log(this.props);
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Platform: {Platform.OS}</Text>
                <Text style={styles.welcome}>Welcome to React Native monorepo with Web Android & IOS</Text>
                <Text style={styles.instructions}>To get started, edit App.js from component/src</Text>
                <Text style={styles.instructions}>========== Device Info ==========</Text>
                <Text style={styles.instructions}>Width: {screenWidth}</Text>
                <Text style={styles.instructions}>Height: {screenHeight}</Text>
                {
                    shouldDrawerCollapse() === true ?
                        <Text style={styles.instructions}>Drawer Should be Collapsible</Text>
                        :
                        <Text style={styles.instructions}>Drawer Should not be Collapsible</Text>
                }
                <Text style={styles.instructions}>========== Device Info ==========</Text>
                <Text style={styles.instructions}>{instructions}</Text>
                <Button title={'Go to Detail'} onPress={
                    () => this.props.navigation.navigate('Details')
                }/>
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
