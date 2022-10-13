import { gql, GraphQLClient } from 'graphql-request';
import compress from 'graphql-query-compress';
import { Product } from './helpers/types/product';

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

  static async getAllProducts() {
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
            rating
            department
            releaseDate
            brand
            style
            price
            inStock
            numberOfSales
            activity
            slug
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
      }
    `;

    const { productCollection } = await this.callContentful(query);

    return productCollection.items;
  }
  // "/Air-Force-1"
  static async getProductBySlug(slug: string) {
    const query = gql`
      query getProductBySlug($slug: String) {
        productCollection(where: { slug: $slug }, preview: false) {
          items {
            sys {
              id
            }
            name
            description {
              json
            }
            rating
            department
            releaseDate
            brand
            style
            price
            inStock
            activity
            slug
            skuCollection {
              items {
                colour
                size
                price
              }
            }
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
      }
    `;

    const { productCollection } = await this.callContentful(query, {
      slug,
    });

    return productCollection.items[0] as Product;
  }
  static async getProductsByDepartment(department: 'men' | 'women' | 'kids') {
    const query = gql`
      query getProductsByDepartment($department: String) {
        productCollection(where: { department: $department }, preview: false) {
          items {
            sys {
              id
            }
            name
            description {
              json
            }
            rating
            department
            releaseDate
            brand
            style
            price
            inStock
            numberOfSales
            activity
            slug
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
      }
    `;

    const { productCollection } = await this.callContentful(query, {
      department,
    });

    return productCollection.items as Product[];
  }
}
