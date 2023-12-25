
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_URI

const homePageFn = async () => {
    try {
        const { data } = await axios.get(`/profile/home`);

        // console.log(data);

        return data
    } catch (error) {
        // console.log(error.message);
        return { success: false, message: "Can't load home page" };
    }
};

const AboutMeFn = async () => {
    try {
        const { data } = await axios.get(`/profile/aboutme`);
        // console.log(data);
        return data
    } catch (error) {
        // console.log(error.message);
        return { success: false, message: "Can't load about me " };
    }
}


export { homePageFn, AboutMeFn }