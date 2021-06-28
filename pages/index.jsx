import AppShell from '../components/organisms/AppShell';
import AppBlogCard from '../components/atoms/AppBlogCard';

const Home = ({ posts }) => (
  <AppShell>
    <div>
      {posts.results.map(({ id, data }, index) => (
        <AppBlogCard
          key={id}
          url={`/blogposts/${id}`}
          index={index}
          data={{
            bannerImage: data.bannerImage,
            authorPicture: data.authorPicture,
            authorName: data.authorName,
            timestamp: data.timestamp,
            title: data.title,
            tags: data.tags,
          }}
        />
      ))}
    </div>
  </AppShell>
);

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/blogposts');
  const responseJson = await response.json();

  return { props: { posts: responseJson } };
};

export default Home;
