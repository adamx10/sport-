import axios from "axios";



const apiData = async () => {
    const urlApi = "https://6a22dd275c610353286a6f08.mockapi.io/api/v1/sport";

    try{
        const data = await axios.get(urlApi);
        return data.data
    }catch(error){
        console.log(error)
    }

}



export default apiData