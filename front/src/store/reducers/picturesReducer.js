import {FETCH_PICTURE_SUCCESS, FETCH_PICTURES_SUCCESS} from "../actions/picturesActions";

const initialState = {
  pictures: [],
  picture: []
};

const picturesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PICTURES_SUCCESS:
      return {...state, pictures: action.pictures};
    case FETCH_PICTURE_SUCCESS:
      return {...state, picture: action.picture};
    default:
      return state;
  }
};

export default picturesReducer;