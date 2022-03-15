import { useHttp } from "../hooks/http.hooks";

export default function useStarWarsSrvice() {
  const { loading, request, error } = useHttp();

  const _apiBase = 'https://react-test-starwars.vercel.app/api/';

  const getAllProducts = async (page) => {
    const res = await request(_apiBase + 'products?page=' + page);
    return res.data;
  }

  const getProduct = async (id) => {
    const res = await request(_apiBase + 'products/' + id);
    return res.data;
  }

  const postPreOrder = async (productId, email) => {
    const res = await request(_apiBase + 'pre-order', 'POST', {
      "productId": productId,
      "email": email
    });
    return res;
  }

  return { getAllProducts, getProduct, postPreOrder, loading, error };
}