export default function Image({ src, ...rest }) {
  src = src && src.includes('https://')
      ? src
      : 'https://taskify-production-a5f2.up.railway.app/uploads/' + src;
  return (
      <img {...rest} src={src} alt="" />
  );
}