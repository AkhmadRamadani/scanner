import * as React from 'react'
import { View, Text } from 'react-native'
import LoginView from "../views/LoginView";

export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

        }

    }

    componentDidMount(){
        
    }

    render(){
        return <LoginView state={this.state}></LoginView>
    }
}