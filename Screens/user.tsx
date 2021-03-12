import { url } from 'inspector';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export const User =  (props: any) => {
  return (
    <View style={styles.container}>
      <Text>User Details Screen</Text>



	<View testID="user-wrapper" style={styles.details}>

		<Image style={{height: 150, width: 150, borderRadius: 75}} source={{uri: props.route.params.picture.large}} />

		{/* <Text> */}
			<Text style={styles.mainText}>
		
			{ props.route.params.name.title} {props.route.params.name.first} {props.route.params.name.last}
			</Text>

			<Text style={styles.subText}>
			Phone- {props.route.params.phone}
			</Text>

			<Text style={styles.subText}>
			address- {props.route.params.location.city},
			{props.route.params.location.state}, 
			{props.route.params.location.country},
			Pin: {props.route.params.location.postcode}
			</Text>
		{/* </Text> */}
	</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
		// justifyContent: 'center',
		height: '100%'
	},
	details: {
		borderColor: '#333',
		padding: 5,
		width: '50%',
		height: 300,
		color: '#333'
	},
	mainText: {
		fontSize: 18,
		fontWeight: "bold",
		padding: 10,
	},
	subText: {
		fontSize: 18,
		padding: 10,
	}
});
