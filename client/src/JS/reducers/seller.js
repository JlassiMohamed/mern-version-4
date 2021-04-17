import { FAIL_SELLERS, GET_SELLER, GET_SELLERS, LOAD_SELLERS } from "../actionTypes/seller";


const initialState = {
    sellerList:[],
    errors:null,
    load:false,
    seller:{}
}

const sellerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_SELLERS:
      return { ...state, load: true };
    case GET_SELLERS:
      return { ...state, load: false, sellerList: payload.sellers };
    case GET_SELLER:
      return { ...state, load: false, seller: payload.seller };
    case FAIL_SELLERS:
      return { ...state, load: false, errors: payload };
    default:
      return state;
  }
};

export default sellerReducer;