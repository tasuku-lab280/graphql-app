// Import
import { useQuery, gql } from '@apollo/client';

// Custom Import
import { PostItem } from './PostItem';
import { FeedQuery } from './__generated__/FeedQuery';
import BaseLayout from '../../layouts/BaseLayout';

// Query
const FEED_QUERY = gql`
  query FeedQuery {
    feed {
      id
      ...post
    }
  }
  ${PostItem.fragments.data}
`;

// Component
const TopTemplate = () => {
  // Hooks
  const { data } = useQuery<FeedQuery>(FEED_QUERY);

  // DOM
  return (
    <BaseLayout>
      {data?.feed.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </BaseLayout>
  );
};

// Default Export
export default TopTemplate;
