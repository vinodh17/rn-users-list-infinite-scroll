import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { getUsers } from '../Redux/Actions/userAction';
// import userReducer from '../Redux/Reducers/reducer'
const Users =  (props: any) => {

	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);

	useEffect(() => {
		setLoading(true)
    props.getUsers(page, 10);
    setLoading(false)
	}, [page])
	
	const toDetails = () => {
		console.log(props.users);
		props.navigation.navigate('User', props.users)
	}

	const navToDetails = (val:any) => {
		props.navigation.navigate('User', val)
	}

  return (
    <View testID="users-wrapper" style={styles.container}>
      <Text onPress={toDetails}>Users Screen</Text>
	<FlatList 

	data={props.users}
	renderItem={({item}) => (
		<Text onPress={() => navToDetails(item)} style={styles.listItem}>
			{item.email}
		</Text>)
	}
	keyExtractor={(item) => item.email}
	onEndReached={() => setPage(page+1)}
	onEndReachedThreshold={5}
	refreshing={ loading }
	onRefresh={() => setPage(1)}
	/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
	},
	listItem: {
		height: 50,
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#333',
		borderColor: '#fff',
		borderWidth: 1,
		borderRadius: 10,
		marginBottom: 20,
		color: '#fff',
		padding: 15
	}
});


const mapStateToProps = (state:any) => ({
	users: state.userReducer.users
})

export default connect(mapStateToProps, {getUsers})(Users);