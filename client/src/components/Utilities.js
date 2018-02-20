import superagent from 'superagent';

export const postLogin = (data) => {
        return new Promise((resolve, reject) => {
            superagent
                .post('/auth/v1')
                .send({
                    username: data.username,
                    password: data.password
                })
                .set('Accept', 'application/json')
                .end((error, res) => {
                    error ? reject(error) : resolve(res);
                });
        });
}

export const postRegister = (data) => {
    console.log("data", data);
    // return new Promise((resolve, reject) => {
        superagent
            .post('/registerUser')
            .send({
                username: data.username,
                password: data.password
            })
            .set('Accept', 'application/json');
            // .end((error, res) => {
            //     error ? reject(error) : resolve(res);
            // });
    // });
}



