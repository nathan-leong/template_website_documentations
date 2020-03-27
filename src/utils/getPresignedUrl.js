import axios from 'axios'
import {generate_url} from '../CONSTANTS.json'

const getPresignedUrl = async key => {
  const res = await axios.post(generate_url, {key})
  return res.data
}

export default getPresignedUrl
