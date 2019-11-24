import React from 'react';
import HeaderArrowBack from './HeaderArrowBack';
import {Header} from 'react-native-elements/src/index';
import HeaderNotificationComp from "./HeaderNotificationComp";
import {getStatusBarHeight} from "react-native-status-bar-height";

const HeaderComponent = (properties) => {
    console.log('Header properties');
    console.log(properties);
    return (
        <Header
            containerStyle={{
                backgroundColor: 'transparent',
                borderBottomColor: 'transparent',
                // marginBottom: 8
                marginTop: properties.leftIconDashboardVisible === true ?  (- getStatusBarHeight()) : null
            }}

            // leftComponent={<HeaderArrowBack leftButtonProp={properties} />}
            leftComponent={
                <HeaderArrowBack
                    leftButtonProp={properties}
                    leftIconVisible={properties.leftIconVisible}
                    leftIconDashboardVisible={properties.leftIconDashboardVisible}
                />
            }
            centerComponent={{
                text: properties.title,
                style: {
                    color: '#000',
                    fontWeight: '800' ,
                    fontSize: properties.leftIconDashboardVisible === true ?  26 : 18,
                }
            }}
            rightComponent={<HeaderNotificationComp rightButtonProp={properties}/>}
            statusBarProps={{ barStyle: 'light-content' }}
        />
    )
};

export default HeaderComponent;
