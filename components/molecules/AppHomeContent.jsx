import { useEffect, useState } from 'react';
import AppBlogpostCard from '../atoms/AppBlogpostCard';
import AppBlogpostCardSkeleton from '../atoms/AppBlogpostCardSkeleton';
import AppErrorState from '../atoms/AppErrorState';

const AppHomeContent = () => {
  const [blogposts, setBlogposts] = useState([]);
  const [error, setError] = useState(false);

  const getBlogposts = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/blogposts`
      );
      const responseJson = await response.json();
      setBlogposts(responseJson.results);
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    getBlogposts();
  }, []);

  if (error) {
    return <AppErrorState />;
  }

  return (
    <main>
      {!blogposts.length && (
        <>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
            <AppBlogpostCardSkeleton key={id} />
          ))}
        </>
      )}
      {blogposts.map(({ id, data }, index) => (
        <AppBlogpostCard
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
    </main>
  );
};

export default AppHomeContent;
