var conf = require("../config/" + (process.env.NODE_ENV || "development" || "test"));

// export const postLogin = (data) => {
//         return new Promise((resolve, reject) => {
//             superagent
//                 .post('/auth/v1')
//                 .send({
//                     username: data.username,
//                     password: data.password
//                 })
//                 .set('Accept', 'application/json')
//                 .end((error, res) => {
//                     error ? reject(error) : resolve(res);
//                 });
//         });
// }

export const postLogin = (data) => {
	let url = conf.serverUrl + 'login/';
	return fetch(url, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	}).then((response) => response.json())
	.catch((error) => {
		console.error(error);
	})
}

/////////////////////////Logout user/////////////////////////
export const handleOnLogout = (data) => {
	let url = conf.serverUrl + 'logoutUser/';
	fetch(url, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	.then(function(response) {
		return response.json();
	  }).then(function(responseJson) {
		  	window.location = "/";
			localStorage.removeItem('token');
	  })
	.catch((error) => {
		console.error(error);
	})
}

/////////////////////////Registrater user/////////////////////////
export const postRegister = (data) => {
	let url = conf.serverUrl + 'registerUser/';
	console.log("data", data);
	return fetch(url, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
	// .then((response) => {
	// 	if(response.status == 409) {
	// 		//user exists
	// 		return response.status;
	// 	}
	// 	else if(response.status == 202) {
	// 		//user created
	// 		localStorage.setItem('loggedUser', data.username);
	// 		return response.status;
			

	// 		//login new user
	// 		// let url = conf.serverUrl + 'login/';
	// 		// return fetch(url, {
	// 		// 	method: 'POST',
	// 		// 	headers: {
	// 		// 		'Accept': 'application/json',
	// 		// 		'Content-Type': 'application/json'
	// 		// 	},
	// 		// 	body: JSON.stringify(data)
	// 		// })
	// 		// .then((response) => response.json())
	// 		// .then((responseJson) => {
	// 		// 	if(responseJson.status == 202) {
	// 		// 		localStorage.setItem('loggedUser', responseJson.username);
	// 		// 		return responseJson.status;
	// 		// 	}
	// 		// })
	// 		// .catch((error) => {
	// 		// 	console.error(error);
	// 		// })
	// 	}
	// })
	// .catch((error) => {
	// 	console.error(error);
	// })
}



