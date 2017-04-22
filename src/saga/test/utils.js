export function getJSON(url){
  return fetch(
    url,
    {
      method: 'GET',
      headers: {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
      }
    })
    .then(res => {
      if(res.ok){
	return res.json();
      }else{
	throw new Error(`Failed to fetch "${res.url}". ${res.status} ${res.statusText}`);
      }
    })
    .then(payload => ([payload, undefined]))
    .catch(error => ([undefined, error.message]));
}
