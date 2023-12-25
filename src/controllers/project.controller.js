import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_URI

const projectFn = async () => {
  try {
    const { data } = await axios.get(`project`);

    // console.log(data);

    return data
  } catch (error) {
    console.log(error.message);
    return { success: false, message: "Can't load projects." };

  }
};




export { projectFn }