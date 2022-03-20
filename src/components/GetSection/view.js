import React, { useState } from "react";
import "../../App.css";

import apiClient from "../../http-common";
import formatResponse from "../../utils/formatResponse";

function GetSection() {
  const [getResult, setGetResult] = useState(null);
  const [isError, setIsError] = useState(false);

  async function getAllData() {
    setIsError(false);
    try {
      const res = await apiClient.get("/products");

      const result = {
        status: res.status,
        headers: res.headers,
        data: res.data,
      };

      setGetResult(result);
    } catch (err) {
      setGetResult(err.message);
      setIsError(true);
    }
  }

  const clearGetOutput = () => {
    setGetResult(null);
  };

  return (
    <div className="card mt-3">
      <div className="card-header">React Axios GET</div>
      <div className="card-body">
        <div className="input-group input-group-sm">
          <button className="btn btn-sm btn-primary" onClick={getAllData}>
            Get All
          </button>
          <button
            className="btn btn-sm btn-warning ml-2"
            onClick={clearGetOutput}
          >
            Clear
          </button>
        </div>

        {getResult && (
          <>
            <div className="alert alert-secondary mt-2" role="alert">
              <pre>{formatResponse(getResult)}</pre>
            </div>
            {!isError && (
              <div className="alert alert-success mt-2" role="alert">
                <span>{`Total Products: ${getResult?.data?.data?.length}`}</span>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default GetSection;
