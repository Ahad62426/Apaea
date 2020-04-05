import { GetSecured, ApiEndpoints } from '../../data';

const setCategory = category => ({
  type: 'SET_CATEGORIES',
  Info: category,
});

const setSubCategory = categoryID => ({
  type: 'SET_SUB_CATEGORIES',
  Info: categoryID,
});

const setBumperSale = products => ({
  type: 'SET_BUMPER_SALE',
  Info: products,
});

const setOnSale = products => ({
  type: 'SET_ON_SALE',
  Info: products,
});

const setProductSale = products => ({
  type: 'SET_PRODUCT_SALE',
  Info: products,
});

const setProducts = products => ({
  type: 'SET_PRODUCTS',
  Info: products,
});

const setProduct = product => ({
  type: 'SET_PRODUCT',
  Info: product,
});

const setWishlist = product => ({
  type: 'SET_WISHLIST',
  Info: product,
});

const getCategories = () => async dispatch => {
  try {
    
    let response = await GetSecured(ApiEndpoints.categories);
    
    if (response.error) {
      return dispatch(error(response || 'ERROR'));
    } else {
      return dispatch(setCategory(response));
    }
  } catch (error) {
    dispatch(error('Something Went Wrong' || 'ERROR'));
  }
};

const getSubCategories = categoryID => async dispatch => {
  try {
    
    return dispatch(setSubCategory(categoryID));
  } catch (error) {
    dispatch(error('Something Went Wrong' || 'ERROR'));
  }
};

const getBumperSale = () => async dispatch => {
  try {
    let response = await GetSecured(ApiEndpoints.bumperSale);
    if (response.error) {
      return dispatch(error(response || 'ERROR'));
    } else {
      return dispatch(setBumperSale(response));
    }
  } catch (error) {
    dispatch(error('Something Went Wrong' || 'ERROR'));
  }
};

const getOnSale = () => async dispatch => {
  try {
    let response = await GetSecured(ApiEndpoints.bumperSale);
    if (response.error) {
      return dispatch(error(response || 'ERROR'));
    } else {
      return dispatch(setOnSale(response));
    }
  } catch (error) {
    dispatch(error('Something Went Wrong' || 'ERROR'));
  }
};

const getProducts = (CategoryId, SubCategoryId) => async dispatch => {
  try {
    
    var URL = CategoryId === undefined ? ApiEndpoints.products :`${ApiEndpoints.products}?CategoryId=${CategoryId}&SubCategoryId=${SubCategoryId}`
    
    let response = await GetSecured(URL);
    
    if (response.error) {
      return dispatch(error(response || 'ERROR'));
    } else {
      return dispatch(setProducts(response));
    }
  } catch (error) {
    dispatch(error('Something Went Wrong' || 'ERROR'));
  }
};

const getProduct = (ProductId) => async dispatch => {
  try {
    
    let response = await GetSecured(
      `${ApiEndpoints.products}?Id=${ProductId}`,
    );
    
    if (response.error) {
      return dispatch(error(response || 'ERROR'));
    } else {
      return dispatch(setProduct(response));
    }
  } catch (error) {
    dispatch(error('Something Went Wrong' || 'ERROR'));
  }
};

const getProductSale = () => async dispatch => {
  try {
    let response = await GetSecured(ApiEndpoints.productSale);
    if (response.error) {
      return dispatch(error(response || 'ERROR'));
    } else {
      return dispatch(setProductSale(response));
    }
  } catch (error) {
    dispatch(error('Something Went Wrong' || 'ERROR'));
  }
};

const getWishList = (CategoryId, SubCategoryId) => async dispatch => {
  try {
    
    let response = await GetSecured(ApiEndpoints.wishlist);
    
    if (response.error) {
      return dispatch(error(response || 'ERROR'));
    } else {
      return dispatch(setWishlist(response));
    }
  } catch (error) {
    dispatch(error('Something Went Wrong' || 'ERROR'));
  }
};

export {
  getCategories,
  getBumperSale,
  getOnSale,
  getProductSale,
  getSubCategories,
  getProducts,
  getProduct,
  getWishList
};
