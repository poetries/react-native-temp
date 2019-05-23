
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, TextInput,Alert,TouchableOpacity,AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Toast, {DURATION} from 'react-native-easy-toast'

@connect(({ user }) => ({
	user
}))
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:'',
            password:''
         };
    }
    async onLogin(){
			const {dispatch} = this.props
			const { navigate } = this.props.navigation;
			const {username,password} = this.state
			// dispatch({
			// 	type: 'user/login',
			// 	payload: {
			// 		username,
			// 		password
			// 	},
			// 	callback: res=>{
			// 		if(res.code == 200) {
			// 			alert('登录成功')
			// 			navigate('Monitor');
			// 		}else {
			// 			this.refs.toast.show(res.message);
			// 		}
			// 	}
			// })

			if(!username || !password) {
				return this.refs.toast.show('账号密码不能为空');
			}
			// TEST LOGIN
			await AsyncStorage.setItem('userToken', 'abc');
			this.props.navigation.navigate('App');

    }
  render() {
		const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.avatarview}>
          <Text style={styles.avatarTitle}>账号登录</Text>
        </View>
        <View style={styles.inputview}>
					<View style={styles.inputItem}>
							<Icon name='user' style={styles.item_icon} />
							<TextInput  
									style={styles.textinput} 
									placeholder='请输入账号'
									onChangeText = {(text) => {
											this.setState({username: text});
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
				</View>
				<View style={styles.bottomview}>
						<TouchableOpacity onPress={()=>this.onLogin()}>
								<View style={styles.buttonview}>
										<Text style={styles.logintext}>登 录</Text>
								</View>
						</TouchableOpacity>
					<View style={styles.bottombtnsview}>
						<View style={styles.bottomleftbtnview}>
							<Text 
								style={styles.bottombtn} 
								onPress={() =>
								navigate('Register')
								}
							>注册账号</Text>
						</View>
						<View style={styles.bottomrightbtnview}>
							<Text 
								style={styles.bottombtn}
								onPress={() =>
									navigate('ForgetPwd')
								}
							>找回密码</Text>
						</View>
					</View>
				</View>
				<Toast 
						ref="toast"
						position='top'
					/>
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
        height: 100,
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

export default Login