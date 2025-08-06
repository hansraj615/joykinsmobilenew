import API from './auth';

export const getCategories = async () => {
  const { data } = await API.get('/api/v1/categories', {
    params: { sort: 'id' },
  });
  return data;
};

export const getProducts = async () => {
  const { data } = await API.get('/api/v1/products', {
    params: { sort: 'id' },
  });
  return data;
};
