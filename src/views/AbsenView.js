import * as React from 'react'
import { View, Text } from 'react-native'

export default class AbsenView extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

        }

    }

    componentDidMount(){
        
    }

    render(){
        return (
            <View>
                <Text>{this.props.state.dataUser.name}</Text>
            </View>
        )
    }
}