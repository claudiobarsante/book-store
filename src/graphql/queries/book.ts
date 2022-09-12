import { gql } from '@apollo/client';

export const FEATURED_QUERY = gql`
  query Featured {
    books(where: { featured: true }) {
      title
      authors {
        name
      }
      price
      rating
    }
  }
`;
