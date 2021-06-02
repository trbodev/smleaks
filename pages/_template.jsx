export const getStaticProps = () => ({
  props: {
    title: 'Template',
    id: 'template',
  },
});

export default function Template() {
  return (
    <div>
      <div className="content">
        <h1 className="content-title">Template Page</h1>
      </div>
      <div className="card">
        <h2 className="card-title">Template Card Title</h2>
      </div>
    </div>
  );
}
