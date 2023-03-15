// import React from "react"
// import { graphql, Link } from "gatsby"
// import Layout from "../components/layout"

// const BlogIndex = ({ data }) => {
//   const posts = data.allMarkdownRemark.nodes

//   return (
//     <Layout>
//       <h1>Blog Posts</h1>
      
//       {posts.map(post => (
//         <article key={post.id}>
//           <h2>
//             <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
//           </h2>
//           <small>{post.frontmatter.date}</small>
//           <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
//         </article>
//       ))}
//     </Layout>
//   )
// }

// export const query = graphql`
//   query {
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       nodes {
//         id
//         excerpt(pruneLength: 250)
//         fields {
//           slug
//         }
//         frontmatter {
//           date(formatString: "MMMM DD, YYYY")
//           title
//         }
//       }
//     }
//   }
// `

// export default BlogIndex


// import React from "react"
// import { Link, graphql } from "gatsby"
// import { Container, Row, Col, Card, CardImg, CardBody, CardTitle } from "reactstrap"
// import { Navbar, Nav, NavItem } from "reactstrap"
// import { StaticImage } from "gatsby-plugin-image"

// const IndexPage = ({ data }) => {
//   const posts = data.allMarkdownRemark.edges

//   return (
//     <div>
//       <div>
//         <Navbar color="light" light expand="md">
//           <Nav className="mr-auto" navbar>
//             <NavItem>
//               <a className="nav-link" href="#">Home</a>
//             </NavItem>
//             <NavItem>
//               <a className="nav-link" href="#">About</a>
//             </NavItem>
//             <NavItem>
//               <a className="nav-link" href="#">Contact</a>
//             </NavItem>
//           </Nav>
//         </Navbar>
//         <header className="jumbotron">
//           <div className="container">
//             <h1>My Blog</h1>
//             <p>A blog about all things interesting</p>
//           </div>
//         </header>
//       </div>
    
//     <Container>
//       <Row>
//         {posts.map(({ node }) => {
//           const title = node.frontmatter.title || node.fields.slug
//           return (
//             <Col md={6} className="mb-4">
//               <Card>
//                 <Link to={node.fields.slug}>
//                 <StaticImage src={post.frontmatter.image} alt="My image" />
//                   {/* <CardImg top src={node.frontmatter.images} alt={node.frontmatter.title} /> */}
//                 </Link>
//                 <CardBody>
//                   <CardTitle>
//                     <Link to={node.fields.slug}>{title}</Link>
//                   </CardTitle>
//                 </CardBody>
//               </Card>
//             </Col>
//           )
//         })}
//       </Row>
//     </Container>
//     </div>)
// }

// export default IndexPage

// export const query = graphql`
//   query {
//     allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
//       edges {
//         node {
//           excerpt(truncate: true)
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             image
//           }
//         }
//       }
//     }
//   }
// `


import * as React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import PostList from "../components/post-list"

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Container>
            <a className="navbar-brand" href="/">
              My Blog
            </a>
          </Container>
        </nav>
      </header>
      <Container className="py-4">
        <Row>
          <Col>
            <h1 className="mb-4">Latest Posts</h1>
            <PostList posts={posts} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  width: 640
                  height: 320
                  quality: 100
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage

// works but no image
// import React from "react"
// import { Container, Row, Col } from "reactstrap"
// import { graphql } from "gatsby"
// import PostList from "../components/post-list"

// const IndexPage = ({ data }) => {
//   const posts = data.allMarkdownRemark.edges

//   return (
//     <Container>
//       <Row>
//         <Col>
//           <h1 className="my-4">Welcome to my blog</h1>
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <PostList posts={posts} />
//         </Col>
//       </Row>
//     </Container>
//   )
// }

// export default IndexPage

// export const query = graphql`
//   query {
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           excerpt(pruneLength: 250)
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             description
//             featuredImage {
//               childImageSharp {
//                 gatsbyImageData(
//                   width: 600
//                   placeholder: BLURRED
//                   formats: [AUTO, WEBP, AVIF]
//                 )
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
