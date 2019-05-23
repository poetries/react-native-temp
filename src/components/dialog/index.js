import React, { Component } from 'react';
import { Text, View, StyleSheet,Modal } from 'react-native';
import {global} from '../../util/common';
import Icon from 'react-native-vector-icons/Feather'; 

export default class ModalBox extends Component{
  constructor(props){
     super(props);
     this.state = {
       
     };
  }

  
  onCancel =()=>{
        const {onCancel} = this.props;

        if(onCancel){
            onCancel()
        }
    }
    onOk =()=>{
        const {onOk} = this.props;

        if(onOk){
            onOk()
        } 
    }
  render() {
      const {visible,renderHtml,title} = this.props;
    return (
        <Modal
            animationType='slide'           // 从底部滑入
            transparent={true}             // 不透明
            visible={visible}    // 根据isModal决定是否显示
            onRequestClose={() => {this.onCancel()}}
        >
            <View style={styles.modal_container}>
                <View style={styles.modal_content}>
                    <Text style={styles.title}>{title}</Text>
                    {renderHtml?renderHtml():<View></View>}
                    <Icon name="x-circle" style={styles.modal_close} onPress={this.onCancel}/>
                    <View style={styles.operate}>
                        <Text style={[styles.operate_btn,styles.cancel]} onPress={this.onCancel}>取消</Text>
                        <Text style={[styles.operate_btn,styles.ok]} onPress={this.onOk}>确认</Text>
                    </View>
                </View>
            </View>
        </Modal>
    )
  }
}
const styles = StyleSheet.create({
    modal_container:{
        flex: 1,
        justifyContent: 'center',
        padding: 40,
        backgroundColor: 'rgba(0,0,0,.5)'
    },
    modal_content:{
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 6
    },
    title:{
        color: '#666',
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center'
    },
    modal_close:{
        position: 'absolute',
        top: 6,
        right: 10,
        fontSize: 20
    },
    operate:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20
    },
    operate_btn:{
        width: 60,
        lineHeight: 30,
        fontSize: 16,
        borderRadius: 6,
        textAlign: 'center',
    },
    cancel:{
        borderWidth: 1,
        borderColor: '#ccc',
        marginRight: 10
    },
    ok:{
        color: '#fff',
        backgroundColor: global.color
    }
      
  });