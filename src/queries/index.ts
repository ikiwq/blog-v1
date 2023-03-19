import {gql} from "@apollo/client"

export const GET_ARTICLES = gql`
    query MyQuery {
      postsConnection(where: {featuredPost: false}, orderBy: createdAt_DESC, last: 5) {
        edges {
          node {
            id
            createdAt
            slug
            title
            featureImage {
              id
              url
            }
            categories {
              id
              name
              slug
            }
            author {
              name
              id
              photo {
                url
              }
              bio
            }
            excerpt
          }
        }
      }
    }
    `

export const GET_CATEGORIES = gql`
query GetCategories{
  categories {
    id
    name
    slug
  }
}
`

export const GET_SIMILAR_ARTICLES = gql`
query GetPostDetails($slug: String!, $categories: [String!]){
  posts(
    where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
    last: 3
  ){
    id
    title
    featureImage{
      id
      url
    }
    createdAt
    slug
  }
  }
`

export const GET_CATEGORY_ARTICLES = gql`
query GetCategoryPost($slug: String!) {
  postsConnection(where: {categories_some: {slug: $slug}}, orderBy: createdAt_DESC) {
    edges{
      cursor
      node {
        id
        author {
          bio
          name
          id
          photo {
            url
          }
        }
        createdAt
        slug
        title
        excerpt
        featureImage {
          id
          url
        }
        categories {
          id
          name
          slug
        }
      }
    }
  }
}
`

export const GET_FEATURED_ARTICLES = gql`
    query GetPostDetails{
      posts(where: {featuredPost: true} orderBy: createdAt_DESC
        last: 5){
          title
          id
          featureImage{
            id
            url
          }
          createdAt
          slug
          excerpt
          categories {
          name
          slug
        }
        }
    }
  `

export const GET_POST_DETAILS = gql`
query GetPostDetails($slug : String!) {
  post(where: {slug: $slug}) {
    id
    title
    excerpt
    slug
    featureImage {
      id
      url
    }
    author{
      name
      bio
      photo {
        id
        url
      }
    }
    createdAt
    contentMarkdown
    categories {
      id
      name
      slug
    }
  }
}
`