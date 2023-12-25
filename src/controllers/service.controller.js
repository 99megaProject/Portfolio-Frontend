import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_URI

const followMeFn = async () => {
    try {
        const { data } = await axios.get(`/follow`);

        // console.log(data);

        return data
    } catch (error) {
        // console.log(error.message);
        return { success: false, message: "Can't get follow me" };
    }
};


const serviceFn = async () => {
    try {
        const { data } = await axios.get(`/service`);

        // console.log(data);

        return data
    } catch (error) {
        // console.log(error.message);
        return { success: false, message: "Can't get services." };
    }
};


const myClientFn = async () => {
    try {
        const { data } = await axios.get(`/client`);

        // console.log(data);

        return data
    } catch (error) {
        // console.log(error.message);
        return { success: false, message: "Can't get my clients." };
    }
};


const contactMeFn = async (name = '', email = '', message = '') => {

    try {

        if ([name, email, message].some((field) => field.trim() == '')) return { success: false, message: "All credentail required." }

        const data = await axios.post(`/contact/create`, { name, email, message });

        // console.log(data);

        if (data && data?.data)
            return data.data
        else return ({ success: false, message: "Can't submit message." })
    } catch (error) {

        // console.log(error.message);
        return { success: false, message: "Can't submit message." };
    }
};





export { followMeFn, serviceFn, myClientFn, contactMeFn }