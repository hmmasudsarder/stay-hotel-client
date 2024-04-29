import axiosSecure from ".";

export const saveUserDB = async user => {
    const currentUSer = {
        email: user.email,
        role: "guest",
       status: "verify",
    }
    const {data} = await axiosSecure.put(`/users/${user.email}`, currentUSer)
    return data
}

export const getToken = async email => {
    const {data} = await axiosSecure.post('/jwt', email);
    console.log(data);
    return data;
}

export const clearCookie = async () => {
    const {data} = await axiosSecure.get('/logout');
    return data
}