export const request = (method, route) => {
  return new Promise((resolve, reject) => {
    let url = `${route}`;

    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Content-type', 'application/json');
    //xhr.send();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
        if (xhr.getResponseHeader('content-type').includes('json')) {
          return resolve(JSON.parse(xhr.response));
        } else {
          return resolve(xhr.response);
        }
      } else if (xhr.readyState === 4) {
        return reject(xhr.responseText);
      }
    };
  });
};
