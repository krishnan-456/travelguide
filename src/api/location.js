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
            'X-RapidAPI-Key': 'a533b9995fmshb1ebf62582d2d8fp169fe7jsn74f940cca8be',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        return data;
    } catch (error) {
        console.log(error);
    }
}


export default getLocations
