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