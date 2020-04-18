import axiosApi from "../../axiosApi";

export const FETCH_PICTURES_SUCCESS = 'FETCH_PICTURES_SUCCESS';
export const FETCH_PICTURE_SUCCESS = 'FETCH_PICTURE_SUCCESS';

export const fetchPicturesSuccess = pictures => ({type: FETCH_PICTURES_SUCCESS, pictures});
export const fetchPictureSuccess = picture => ({type: FETCH_PICTURE_SUCCESS, picture});

export const fetchPictures = userId => {
  return async (dispatch) => {
    let url = '/pictures';

    if (userId) {
      url += '?user=' + userId;
    }

    const response = await axiosApi.get(url);
    dispatch(fetchPicturesSuccess(response.data));
  };
};

export const addPicture = pictureData => {
  return async (dispatch) => {
    await axiosApi.post('/pictures', pictureData);
  };
};

export const deletePicture = id => {
  return async dispatch => {
    await axiosApi.delete('/pictures/' + id);
  }
};

