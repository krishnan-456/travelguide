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
            'X-RapidAPI-Key': '81a0d179aemshd22cc26f1de1e91p1c85ebjsn9166402f8aa4',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        return data;
    } catch (error) {
        console.log(error);
    }
}


export default getPlaces