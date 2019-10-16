import * as React from 'react'
import { View, Text } from 'react-native'
import AbsenView from "../views/AbsenView";

export default class AbsenScreen extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            dataUser: {}
        }

    }

    componentDidMount(){
        Object.assign(this.state.dataUser,this.props.navigation.state.params.scanResult);
        console.log('data',this.props.navigation.state.params.scanResult);
        console.log('dataUser : ' , this.state.dataUser);
        
    }

    render(){
        return <AbsenView state={this.state}></AbsenView>
    }
}