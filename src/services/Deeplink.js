function queryStringToJSON(queryString) {
  if (queryString) {
    return Object.fromEntries(
      new Map(queryString.split('&').map(item => item.split('=')))
    );
  }

  return {};
}

export default function parseDeeplinkData(url) {
  return queryStringToJSON(url.split('?')[1]);
}
