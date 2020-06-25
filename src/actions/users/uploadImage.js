import {
    UPLOAD_IMAGE,
    CLOSE_PROFILE_MODAL,
    isDisabled,
    isLoadingImg
} from '../types';
import {
    baseUrl
} from '../../helpers/constants';
import Axios from 'axios';
import { getCloudUrl } from './Cloudinary';
import { toast } from 'react-toastify';


export const UploadUserImage = (imageUrl) => dispatch => {
  dispatch({
      type:isDisabled
  })
  dispatch({
    type:isLoadingImg
  })
    const cloudData = getCloudUrl(imageUrl)

    cloudData.then(resp => {
        const token = window.localStorage.getItem('token');
        return Axios.put(
          `${baseUrl}/user`,
          {
            imageUrl: resp.secure_url,
          },
          {
            headers: {
              Authorization: token,
            },
          },
        )
          .then((resp) => {
            dispatch({
              type: UPLOAD_IMAGE,
              payload: resp.data.data,
            });
            toast('uploaded successfully', {
              position: toast.POSITION.TOP_RIGHT,
              className: 'uploadToast'
            })
              dispatch({
                type: CLOSE_PROFILE_MODAL
            })
          })
          .catch((e) => {
            console.log(e);
          });
    }).catch(e => {
        console.error(e)
    })
    
}