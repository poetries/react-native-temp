
import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput,Alert,TouchableOpacity,Button } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';



class ForgetPwd extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userName:'',
            password:''
         };
    }
    onLogin(){
        Alert.alert(this.state.userName,this.state.password)
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.avatarview}>
          <Text style={styles.avatarTitle}>找回密码</Text>
        </View>
        <View style={styles.inputview}>
            <View style={styles.inputItem}>
                <Icon name='smartphone' style={styles.item_icon} />
                <TextInput  
                    style={styles.textinput} 
                    placeholder='请输入手机号'
                />
            </View>
            <View style={styles.dividerview}>
                <Text style={styles.divider}></Text>
            </View>
            <View style={styles.inputItem} >
                <Icon name='check-square' style={styles.item_icon} />
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                    <TextInput  
                        style={{width:'60%',flex:1,fontSize:16}} 
                        placeholder='请输入验证码'
                    />
                    <View style={styles.codeView}>
                        <Button 
                        title="获取验证码"
                        color="#1DBAF1"
                        ></Button>
                    </View>
                </View>
            </View>
            <View style={styles.dividerview}>
                <Text style={styles.divider}></Text>
            </View>
            <View style={styles.inputItem}>
                <Icon name='lock' style={styles.item_icon} />
                <TextInput  
                    style={styles.textinput} 
                    placeholder='请重值密码（6-12位）'
                />
            </View>
		</View>
        <View style={styles.bottomview}>
            <TouchableOpacity onPress={()=>this.onLogin()}>
                    <View style={styles.buttonview}>
                            <Text style={styles.logintext}>完成</Text>
                    </View>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	avatarview: {
		height: 150,
		backgroundColor: '#ECEDF1',
		justifyContent: 'center',
	},
	avatarTitle: {
		alignSelf: 'center',
		fontSize: 32,
		color: '#000000',
	},
	inputview: {
        height: 152,
        marginLeft: 10,
        marginRight: 10
    },
    inputItem:{
        height:50,
        flex: 1,
        flexDirection:'row',
    },
    item_icon:{
        width:20,
        fontSize:20,
        lineHeight:48
    },
	textinput: {
		flex: 1,
		fontSize: 16,
	},
	dividerview: {
		flexDirection: 'row',
	},
	divider: {
		flex: 1,
		height: 1,
		backgroundColor: '#ECEDF1'
	},
	bottomview: {
		backgroundColor: '#ECEDF1',
		flex: 1,
	},
	buttonview: {
		backgroundColor: '#1DBAF1',
		margin: 10,
		borderRadius: 6,
		justifyContent: 'center',
		alignItems: 'center',
	},
	logintext: {
		fontSize: 17,
		color: '#FFFFFF',
		marginTop: 10,
		marginBottom: 10,
    },
    codeView:{
        width: '30%',
        height: 38,
        alignSelf: 'flex-end',
        lineHeight: 42,
        borderRadius:4,
        marginBottom: 6
    },
});

export default ForgetPwd;
