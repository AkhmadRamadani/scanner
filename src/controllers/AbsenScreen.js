import * as React from 'react'
import { View, Text } from 'react-native'
import AbsenView from "../views/AbsenView";

export default class AbsenScreen extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            dataUser: {},
            newName: '',
            newPhone: '',
            newEmail: '',
            newGeneration: '',
            newPic: null
        }
        this.method = {
            onChangeState: this._onChangeState.bind(this)
        }
    }

    // componentDidMount(){
    //     Object.assign(this.state.dataUser,this.props.navigation.state.params.scanResult);
    //     console.log('data',this.props.navigation.state.params.scanResult);
    //     console.log('dataUser : ' , this.state.dataUser.name);
        
    // }

    _onChangeState(key,value){
        this.setState({
            [key]: [value]
        })
    }

    UNSAFE_componentWillMount(){
        Object.assign(this.state.dataUser,this.props.navigation.state.params.scanResult);
        this.setState({
            newName: this.props.navigation.state.params.scanResult.name,
            newEmail: this.props.navigation.state.params.scanResult.email,
            newPhone: this.props.navigation.state.params.scanResult.phone,
            newGeneration: this.props.navigation.state.params.scanResult.generation,
            newPic: this.props.navigation.state.params.scanResult.newPic
        })
        console.log('data',this.props.navigation.state.params.scanResult);
        console.log('dataUser : ' , this.state.dataUser);
    }

    render(){
        return <AbsenView state={this.state} method={this.method}></AbsenView>
    }
}