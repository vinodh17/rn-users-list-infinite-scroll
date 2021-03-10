import { Dispatch } from "redux";
import http from "../../utils/http";

export const getUsers = (page=1, limit = 10) => (dispatch: Dispatch) => {
	return http.get(`?page=${page}&results=${limit}`)
	.then(res => {
		console.log(res.data);
		dispatch({type: (page===1) ? 'SET_USERS' : 'ADD_USERS', payload: res.data.results})
	})
	.catch(error => {
		alert(error);
	})
}