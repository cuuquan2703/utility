import axios from "axios";
import { useState } from "react";

export default function useApi(baseurl) {
  const [base, setBase] = useState("");
  const [header, setHeader] = useState("");

  const _base = (baseURL) => {
    setBase(baseURL);
  };

  const _header = (str) => {
    setHeader(str);
  };

  const get = (entry) => {
    return new Promise((resolve, reject) =>
      axios
        .get(baseurl + entry)
        .then((res) => {
          return resolve({ data: res.data });
        })
        .catch((err) => {
          if (!err.response) return reject(err.message);
          return reject(err.response);
        })
    );
  };

  const put = (entry, data) => {
    return new Promise((resolve, reject) =>
      axios
        .post(baseurl + entry, data)
        .then((res) => {
          return resolve({ data: res.data });
        })
        .catch((err) => {
          if (!err.response) return reject(err.message);
          return reject(err.response);
        })
    );
  };

  const patch = (entry, data) => {
    return new Promise((resolve, reject) =>
      axios
        .post(baseurl + entry, data)
        .then((res) => {
          return resolve({ data: res.data });
        })
        .catch((err) => {
          if (!err.response) return reject(err.message);
          return reject(err.response);
        })
    );
  };

  const post = (entry, data) => {
    return new Promise((resolve, reject) =>
      axios
        .post(baseurl + entry, data)
        .then((res) => {
          return resolve({ data: res.data });
        })
        .catch((err) => {
          if (!err.response) return reject(err.message);
          return reject(err.response);
        })
    );
  };

  const _delete = (entry) => {
    return new Promise((resolve, reject) =>
      axios
        .delete(baseurl + entry)
        .then((res) => {
          return resolve({ data: res.data });
        })
        .catch((err) => {
          if (!err.response) return reject(err.message);
          return reject(err.response);
        })
    );
  };

  return { _base, _header, get, put, patch, post, _delete };
}
