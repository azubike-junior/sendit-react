import {cloudinaryUrl} from '../../helpers/constants'
import Axios from 'axios';

export const getCloudUrl = (imageUrl) =>  {
    const formData = new FormData();
    formData.append('file', imageUrl);
    formData.append('upload_preset', 'u7w9zall')
    formData.append('api_key', '744289297171196')

    return Axios.post(`${cloudinaryUrl}`, formData, {
        headers: {
            "X-Requested-With": "XMLHttpRequest"
        }
    })
        .then(resp => resp.data)
        .catch(e => {
        console.log(e.response)
    })
}