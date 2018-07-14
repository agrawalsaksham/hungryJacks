import React, { Component } from 'react';
import {
	ImageBackground,
	StyleSheet,
	View,
	Image,
	TouchableOpacity
} from 'react-native';	

export class Home extends Component {

	
	render() {

		const { navigate } = this.props.navigation;

		return (

			<ImageBackground 
				source = {require('./img/background1.jpeg')} 
				style = {styles.backgroundContainer}>
				<View style = {styles.buttonContainer}>
					<TouchableOpacity
						onPress={() => navigate('MenuScreen')}
					>
					<Image
						source = {require('./img/taphere.jpeg')}
						style = {styles.button}
					/>
					</TouchableOpacity>
				</View>

			</ImageBackground>
		);
	}

}


let styles = StyleSheet.create({
	backgroundContainer: {
		width: '100%',
		height: '100%',
	},
	buttonContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		width: 200,
		height: 150,
	},

});

export default Home;