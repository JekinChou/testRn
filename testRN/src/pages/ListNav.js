import React, { Component } from 'react';
import List from "./List";
import {
    NavigatorIOS,
} from 'react-native';
export default class ListNavigator extends Component {
    render() {
        return (
            <NavigatorIOS
        initialRoute={{
            component: List,
                title: '电影列表',
        }}
        style={{flex: 1}}
        />
    )
    }
}