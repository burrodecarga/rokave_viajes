import axios from 'axios'

export const getPlaceData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
  
  try {
    
    const {data:{data}} = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: bl_lat ? bl_lat :  '11.847676',
          tr_latitude: tr_lat ? tr_lat :  '12.838442',
          bl_longitude: bl_lng ? bl_lng : '109.095887',
          tr_longitude: tr_lng ? tr_lng : '109.149359',
          limit: "30",
          currency: "USD",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          'X-RapidAPI-Key': '5bc6eeccb6msh741b021d5630aebp1d199fjsnf9255e70ad2e',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      }
    )
    return data
    
  } catch (error) {
    console.log(error.message)
    return null
  }
}
