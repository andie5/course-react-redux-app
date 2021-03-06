export const createCourse = (name) => {
  return postData("http://localhost:8080/courses", { name });
};

const postData = (url = ``, data = {}) => {
  // Default options are marked with *
  return fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match Content-Type header
  }).then((response) => response.json());
};
