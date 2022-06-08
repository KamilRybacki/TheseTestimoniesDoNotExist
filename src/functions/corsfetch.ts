
const CORS_PROXY_URL = 'https://dry-forest-06322.herokuapp.com';

const cetch = (url: string) => {
  return location.host.includes('localhost:') ?
    fetch(`${CORS_PROXY_URL}/${url}`):
    fetch(url);
};

export default cetch;
