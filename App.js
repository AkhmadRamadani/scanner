import * as React from 'react'
import { View } from 'react-native'
import { MainNavigator } from './src/systems/Config'

export default class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
          
        }

    }

    render = () => {

        const Navigator = MainNavigator()

        return <Navigator />

    }

}
