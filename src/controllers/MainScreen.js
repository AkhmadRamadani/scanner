import * as React from 'react'
import { View, Text } from 'react-native'
import MainView from "../views/MainView";

export default class MainScreen extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

        }

    }

    componentDidMount(){
        
    }

    render(){
        return <MainView state={this.state} navigation={this.props.navigation}></MainView>
    }
}