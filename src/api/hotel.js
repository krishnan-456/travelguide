import axios from "axios";
const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng';



const getHotels = async (lt,ln) =>
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


export default getHotels

// const options = {
//   method: 'GET',
//   url: 'https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng',
//   params: {
//     latitude: '12.91285',
//     longitude: '100.87808',
//     lang: 'en_US',
//     hotel_class: '1,2,3',
//     limit: '30',
//     adults: '1',
//     amenities: 'beach,bar_lounge,airport_transportation',
//     rooms: '1',
//     child_rm_ages: '7,10',
//     currency: 'USD',
//     checkin: '2022-03-08',
//     zff: '4,6',
//     subcategory: 'hotel,bb,specialty',
//     nights: '2'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'f61e08c61amsh257539127a3468fp14c5b9jsnaba738ad21a1',
//     'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });