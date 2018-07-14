import React, { Component } from 'react';
import {
	FlatList,
	View,
	Text,
} from 'react-native';


export default class Menu extends Component {

	render () {

		return (
			<View>
				<FlatList
					data = {[{key: 'a'}, {key: 'b'}]}
					renderItem={({item}) => <Text>{item.key}</Text>}
				/>
			</View>
		);
	}
}