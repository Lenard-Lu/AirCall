/*
Function module that can send ajax request
 */
import axios from 'axios'
const baseUrl = 'https://aircall-job.herokuapp.com'

export default function ajax(url,data={},type='GET') {
  url = baseUrl + url
  if(type==='GET') { // Send GET request
    // Combine request parameter string
   
    let paramStr = ''
    Object.keys(data).forEach(key => {
      paramStr += '/' + data[key]
    })
    if(paramStr) {
      paramStr = paramStr.substring(0, paramStr.length)
    }
    // Use axios to send get request
    return axios.get(url + paramStr)
  } else {// Send POST request
    // Use axios to send post request
    return axios.post(url,data)
  }
}
