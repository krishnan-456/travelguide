import axios from "axios";
const URL = 'https://travel-advisor.p.rapidapi.com/locations/auto-complete';



const getLocations = async (input) =>
{
    try {
        const {data:{data}} = await axios.get(URL, 
          {
          params: {
            query: input,
            
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


export default getLocations
