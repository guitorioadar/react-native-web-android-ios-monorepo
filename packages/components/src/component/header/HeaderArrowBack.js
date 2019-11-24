import React from 'react';
import {View, TouchableOpacity} from 'react-native'
import {Icon} from 'react-native-elements';

const HeaderArrowBack = (properties) => {
    console.log('Header Menu properties');
    console.log(properties);
    const visible = properties.leftButtonProp.leftIconVisible;
    const dashboardVisible = properties.leftButtonProp.leftIconDashboardVisible;
    return (
        <View>
            {
                visible === false ? null :
                    <TouchableOpacity
                        onPress={() =>
                            // properties.leftButtonProp.headerProp.navigation.goBack()
                            console.log('Back Button Press')
                        }
                    >
                        <Icon
                            color='#000'
                            name='arrow-back'
                            size={30}
                        />
                    </TouchableOpacity>
            }
            {
                dashboardVisible === true ?
                    <TouchableOpacity onPress={() => {
                        // properties.leftButtonProp.headerProp.navigation.openDrawer()
                        console.log('Drawer Pressed')
                    }}>
                        <Icon name="menu" size={30} color="black"/>
                    </TouchableOpacity>
                    : null
            }
        </View>
    );
};
export default HeaderArrowBack
