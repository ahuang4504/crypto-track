import { useQuery } from "@tanstack/react-query";

const cryptos = ['bitcoin', 'ethereum', 'dogecoin', 'stellar', 'solana'];

const fetchPosts = async () => {
  const res = await fetch('api.coincap.io/v2/assets');
  return res.json();
};

const Home = () => {
  const { data, isLoading, error } = useQuery(["prices"], fetchPosts);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;