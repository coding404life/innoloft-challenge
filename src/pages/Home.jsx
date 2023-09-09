import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Home</h1>

      <Helmet>
        <title>Home - InnoLoft</title>
        <meta name="description" content="This is the Home page description." />
      </Helmet>
    </div>
  );
}
