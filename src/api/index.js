import axios from "axios";
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng';



const getPlaces = async (lt,ln) =>
{
    try {
        const {data:{data}} = await axios.get(URL, 
          {
          params: {
            latitude: lt,
            longitude: ln,
          },
          headers: {
            'X-RapidAPI-Key': 'c47da67876msh8d94c6e819bf7fep1a28eajsn3d1d8831c07a',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        return data;
    } catch (error) {
        console.log(error);
    }
}


export default getPlaces