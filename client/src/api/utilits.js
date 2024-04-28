import axios from "axios";

export const imageUpoad =async image => {
    const fromData = new FormData();
    fromData.append("image", image);
    const { data } = await axios.post(
      "https://api.imgbb.com/1/upload?key=daf9cf30ab650385c130c35ffad543e0",
      fromData
    );
    return data
}