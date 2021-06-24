import AppShell from '../components/organisms/AppShell';
import AppNavigation from '../components/molecules/AppNavigation';
import AppBlogCard from '../components/atoms/AppBlogCard';

const Home = () => (
  <AppShell>
    <AppNavigation />
    <div>
      {[0, 1, 2, 3, 4, 5].map((id) => (
        <AppBlogCard
          key={id}
          index={id}
          data={{
            bannerImage: '/assets/dummy-post-banner.jpg',
            authorName: 'markZuck',
            timestamp: '02 Jan 2021',
            title:
              '30minutes Learn Next JS with firebase to build a blogs apps',
            tags: ['javascript', 'nextjs', 'reactjs', 'firebase'],
          }}
        />
      ))}
    </div>
  </AppShell>
);

export default Home;
