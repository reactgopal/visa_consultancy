import axios from "axios";
import { useEffect, useState } from "react";
import { MAIN_CATEGORY_API } from "./constants";

const useCategories = () => {
  const [visaCategory, setVisaCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(MAIN_CATEGORY_API);
      setVisaCategory(response.data?.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return { visaCategory, loading, error };
};

export default useCategories;
