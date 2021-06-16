export function generateURL(
  protocol: string, domain: string, secure: boolean, url: string,
) {
  return `${protocol}${secure ? 's' : ''}://${domain}${url}`;
}

export default {
  generateURL,
};
