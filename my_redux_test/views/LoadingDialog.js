import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Image,
    View,
    Modal,
    TouchableOpacity

} from 'react-native';

const Dimensions = require('Dimensions'); //必须要写这一行，否则报错，无法找到这个变量
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
export default class LoadingDialog extends React.Component {
    static propTypes = {
        ...View.propTypes,
        onRequestClose: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {isVisible: false}
    }

    render() {
        return (
            <Modal animationType={'slide'} visible={this.state.isVisible} onRequestClose={this.props.onRequestClose}
                   transparent={true}>
                <TouchableOpacity
                    onPress={()=>{
                        this.setState((prevState) => ({isVisible: false}));
                    }}
                    style={{flex:1}}>

                    <View style={{
                        marginTop: 0,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1,
                        backgroundColor: '#E3E3E36F'
                    }}>


                        <View style={{
                            width: ScreenWidth * 0.36, height: ScreenWidth * 0.36, backgroundColor: '#EAEAEAB4',
                            alignItems: 'center', justifyContent: 'center', borderRadius: 2,
                        }}>
                            <Image style={{width: 0.05 * ScreenHeight, height: 0.05 * ScreenHeight}}
                                   source={require('../../images/loading.gif')}/>
                        </View>


                    </View>
                </TouchableOpacity>
            </Modal>
        )
    }

    close() {
        //  console.log('自定义的loadmodal内部收到了关闭的方法')
        this.setState((prevState) => ({isVisible: false}),()=>{
            //console.log('自定义收到关闭后的数值'+this.state.isVisible);
        });
    }

    show() {
        this.setState((prevState) => ({isVisible: true}));
    }

    onChangeState() {
        this.setState((prevState) => ({isVisible: false}));
    }

}