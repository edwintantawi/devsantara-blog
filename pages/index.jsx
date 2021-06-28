import { useEffect, useState } from 'react';
import AppShell from '../components/organisms/AppShell';
import AppBlogCard from '../components/atoms/AppBlogCard';
import AppBlogCardSkeleton from '../components/atoms/AppBlogCardSkeleton';

const Home = () => {
  const [blogposts, setBlogposts] = useState([]);

  const getBlogposts = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/blogposts`
    );
    const responseJson = await response.json();
    setBlogposts(responseJson.results);
  };

  useEffect(() => {
    getBlogposts();
  }, []);

  return (
    <AppShell>
      <div>
        {!blogposts.length && (
          <>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
              <AppBlogCardSkeleton key={id} />
            ))}
          </>
        )}
        {blogposts.map(({ id, data }, index) => (
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
};

export default Home;
