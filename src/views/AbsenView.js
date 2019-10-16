import * as React from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity, ActivityIndicator} from 'react-native'
import InputText from './components.js/InputText'

const {width,height} = Dimensions.get('window')

export default class AbsenView extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: false
        }

    }

    componentDidMount(){
        
    }

    render(){
        return (
            <View style={{flex: 1, marginTop: width/5}}>
                <View style={{width:150, height: 150, zIndex: 50, borderRadius: 75, alignSelf:'center'}} >
                    <Image 
                        style={{width: 150, height: 150, borderRadius: 75}} 
                        source={{uri: this.props.state.dataUser.photo}}/>
                    
                </View>
                
                <View style={{backgroundColor:'white',alignItems:'center',paddingTop: width/4, width: width, height: width * 1.3, marginTop: -width/5, borderRadius: 25}}>
                    <View style={{justifyContent:'space-between', height: width/1.2}}>
                        
                        <InputText
                            defaultValue={this.props.state.dataUser.name}
                            onChangeText={(text) => this.props.method.onChangeState('newName',text)}
                        />

                        <InputText
                            defaultValue={this.props.state.dataUser.phone}                    
                            keyboardType="phone-pad"
                            onChangeText={(text) => this.props.method.onChangeState('newPhone',text)}
                        />

                        <InputText
                            defaultValue={this.props.state.dataUser.email}
                            onChangeText={(text) => this.props.method.onChangeState('newEmail',text)}
                        />

                        <InputText
                            defaultValue={this.props.state.dataUser.generation}
                            onChangeText={(text) => this.props.method.onChangeState('newGeneration',text)}
                        />

                        <TouchableOpacity onPress={() => alert(this.props.state.newName)}>
                            <View style={{backgroundColor:'#F2C94C' ,width: width/ 1.2, height: 50,borderRadius: 50, justifyContent:'center', alignItems:'center', marginTop: 10}}>
                                <Text style={{fontSize: 28, fontWeight:'bold'}}>Update</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}