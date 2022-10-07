import { gql, GraphQLClient } from 'graphql-request';
import compress from 'graphql-query-compress';

export default class ContentfulApi {
  static async callContentful(query: string, variables = {}, preview = false) {
    const client = new GraphQLClient(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master`,
      {
        headers: {
          Authorization: `Bearer ${
            preview
              ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN
              : process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
          }`,
        },
      }
    );
    try {
      return await client.request(compress(query), variables);
    } catch (error) {
      throw new Error('Could not fetch data from Contentful');
    }
  }

  static async getAllShoes() {
    const query = gql`
      query {
        productCollection(preview: false) {
          items {
            sys {
              id
            }
            name
            description {
              json
            }
            releaseDate
            brand
            style
            price
            inStock
            size
            numberOfSales
            activity
            colors
            imagesCollection {
              items {
                url
                width
                height
                title
              }
            }
        }
      }
    `;

    const { productCollection } = await this.callContentful(query);

    return productCollection.items;
  }
}
