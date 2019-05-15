
import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput,Alert,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            companyName:'',
            userName:'',
            password:'',
            twoPassword:''

         };
    }
    onLogin(){
        Alert.alert(this.state.userName,this.state.password)
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.avatarview}>
          <Text style={styles.avatarTitle}>账号注册</Text>
        </View>
        <View style={styles.inputview}>
					<View style={styles.inputItem}>
							<Icon name='home' style={styles.item_icon} />
							<TextInput  
									underlineColorAndroid='transparent' 
									style={styles.textinput} 
									placeholder='请输入企业名称'
									onChangeText = {(text) => {
											this.setState({companyName: text});
									}}
							/>
					</View>
					<View style={styles.dividerview}>
						<Text style={styles.divider}></Text>
					</View>
					<View style={styles.inputItem}>
						<Icon name='user' style={styles.item_icon} />
						<TextInput 
								underlineColorAndroid='transparent' 
								style={styles.textinput} 
								placeholder='请输入账号' 
								onChangeText = {(text) => {
										this.setState({userName: text});
								}}
						/>
					</View>
					<View style={styles.dividerview}>
						<Text style={styles.divider}></Text>
					</View>
					<View style={styles.inputItem}>
							<Icon name='lock' style={styles.item_icon} />
							<TextInput 
									underlineColorAndroid='transparent' 
									style={styles.textinput} 
									placeholder='请输入登录密码' 
									secureTextEntry={true}
									onChangeText = {(text) => {
											this.setState({password: text});
									}}
							/>
					</View>
					<View style={styles.dividerview}>
						<Text style={styles.divider}></Text>
					</View>
					<View style={styles.inputItem}>
							<Icon name='lock' style={styles.item_icon} />
							<TextInput 
									underlineColorAndroid='transparent' 
									style={styles.textinput} 
									placeholder='请再次输入登录密码' 
									secureTextEntry={true}
									onChangeText = {(text) => {
											this.setState({twoPassword: text});
									}}
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
        height: 203,
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
	bottombtnsview: {
		flexDirection: 'row',
	},
	bottomleftbtnview: {
		flex: 1,
		height: 50,
		paddingLeft: 10,
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	bottomrightbtnview: {
		flex: 1,
		height: 50,
		paddingRight: 10,
		alignItems: 'flex-end',
		justifyContent: 'center',
	},
	bottombtn: {
		fontSize: 15,
		color: '#1DBAF1',
	}
});

export default Register;
