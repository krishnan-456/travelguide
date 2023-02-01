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
            'X-RapidAPI-Key': 'f61e08c61amsh257539127a3468fp14c5b9jsnaba738ad21a1',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        return data;
    } catch (error) {
        console.log(error);
    }
}


export default getPlaces