import { useStaticQuery, graphql } from "gatsby";

export const useLatestBlogPost = () => {
    const data = useStaticQuery(graphql`
    query LatestQuery {
        allWpPost(sort: {fields: date, order: DESC}, limit: 1) {
            edges {
                node {
                id
                excerpt
                title
                uri
                }
            }
        }
    }`)

return data

}

