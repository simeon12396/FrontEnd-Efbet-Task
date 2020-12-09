const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const makeHttpService = async (endPoint, requestType) => {
  if (requestType === "get") {
    const response = await fetch(endPoint, {
      method: "get",
      headers,
    });

    return response.json();
  }
};

export { makeHttpService };
