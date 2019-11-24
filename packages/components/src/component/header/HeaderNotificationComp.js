import React from 'react';
import { Icon } from 'react-native-elements';
import {TouchableOpacity, Text} from 'react-native'
// import Icon from 'react-native-vector-icons/MaterialIcons';

const HeaderNotificationComp = (properties) => {
    return (
        <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={()=> properties.rightButtonProp.headerProp.navigation.navigate('Notifications')}
        >
            <Icon
                color='#000'
                name='arrow-back'
                size={30}
            />
            <Text style={{
                height: 12,
                width: 12,
                color: 'red',
                fontSize: 8,
                backgroundColor: 'white',
                borderRadius: 6,
                textAlign: 'center',
                marginLeft: -13,
                borderColor: 'red',
                borderWidth: 2,
                padding: 2,
            }}>{}</Text>
        </TouchableOpacity>
    )
};
export default HeaderNotificationComp
