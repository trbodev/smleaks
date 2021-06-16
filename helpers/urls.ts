export function generateURL(
  protocol: string, domain: string, secure: boolean, url: string,
) {
  return `http${secure ? 's' : ''}://${domain}${url}`;
}

export default {
  generateURL,
};
