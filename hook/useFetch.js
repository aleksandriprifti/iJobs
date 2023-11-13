import { useState, useEffect } from "react";
import axios from "axios";

//import { Try } from "expo-router/build/views/Try";

//const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": "fd86407919msh41f25c8aecf069ap1a79f8jsne761308ad4b5",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setisLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setisLoading(false);
    } catch (error) {
      setError(error);
      alert("Thre is an error");
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setisLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
