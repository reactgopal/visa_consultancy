import { useEffect, useState } from "react";
import axios from "axios";
import {
  MAIN_CATEGORY_DETAIL_API,
  SUB_CATEGORY_DETAIL_API,
} from "../utils/constants";

/**
 * Custom hook for fetching visa details based on category type.
 * @param {string} id - The category or subcategory ID.
 * @param {boolean} isSubCategory - Whether it's a subcategory.
 * @returns {Object} { visaDetails, loading, error }
 */
const useVisaData = (id, isSubCategory) => {
  const [visaDetails, setVisaDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = isSubCategory
          ? `${SUB_CATEGORY_DETAIL_API}/${id}`
          : `${MAIN_CATEGORY_DETAIL_API}/${id}`;
        const response = await axios.get(url);
        setVisaDetails(response.data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchData();
  }, [id, isSubCategory]);

  return { visaDetails, loading, error };
};

export default useVisaData;
