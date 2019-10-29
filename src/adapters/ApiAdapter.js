import axios from "axios";

class ApiAdapter {
  static async uploadProfilePicture(base64PicString, genderValue) {
    console.log({ genderValue });
    const response = await axios.post("http://localhost:5005/pic", {
      pic: base64PicString,
      genderValue
    });
    const responseData = response.data;
    return responseData;
  }
}

export default ApiAdapter;
