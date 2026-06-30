import React, { useEffect, useState } from "react";

const BasicApi = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function apiFetch() {
      setLoading(true);
      const respon = await fetch("https://dummyjson.com/carts");
      const data = await respon.json();
      setLoading(false);
      console.log(data, "data");
    }
    apiFetch();
  }, []);

  return <div>{loading && "loading"}</div>;
};

export default BasicApi;
