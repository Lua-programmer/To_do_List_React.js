const Api = {
  apiUrl: "http://localhost:8000/tasks",
  fetchGetAll: () => fetch(Api.apiUrl),
  fetchGetById: (id) => fetch(`${Api.apiUrl}/${id}`),
  fetchPost: (task) => {
    return fetch(Api.apiUrl, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(task),
    });
  },
  fetchPut: (task, id) => {
    return fetch(`${Api.apiUrl}/${id}`, {
      method: "PUT",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(task),
    });
  },
  fetchDelete: (id) => {
    return fetch(`${Api.apiUrl}/${id}`, {
      method: "DELETE",
    });
  },
};

export default Api;
