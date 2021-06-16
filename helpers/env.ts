export function flag(
  envFlag:string,
  // eslint-disable-next-line no-undef
  enabled: string | JSX.Element,
  // eslint-disable-next-line no-undef
  disabled?: string | JSX.Element,
) {
  return process.env[`NEXT_PUBLIC_${envFlag}`] === 'true' ? enabled : disabled;
}

export default {
  flag,
};
