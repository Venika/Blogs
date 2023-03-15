import React from "react"
import { Link } from "gatsby"
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Row, Col } from "reactstrap"

const PostList = ({ posts }) => {
  return (
    <div>
      <Row xs="1" md="2" className="g-4">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const featuredImgFluid = node.frontmatter.featuredImage?.childImageSharp?.fluid

          return (
            <Col key={node.fields.slug}>
              <Card>
                {featuredImgFluid && (
                  <Link to={node.fields.slug}>
                    <CardImg top width="100%" src={featuredImgFluid.src} alt={title} />
                  </Link>
                )}
                <CardBody>
                  <CardTitle>
                    <Link to={node.fields.slug}>{title}</Link>
                  </CardTitle>
                  <CardSubtitle>{node.frontmatter.date}</CardSubtitle>
                  <CardText>{node.excerpt}</CardText>
                </CardBody>
              </Card>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default PostList


// //This doesn't display as 2 cards
// import React from "react"
// import { Link } from "gatsby"
// import { Card, CardTitle, CardText, CardSubtitle, CardBody } from "reactstrap"
// import { StaticImage } from "gatsby-plugin-image"

// const PostList = ({ posts }) => {
//   return (
//     <div>
//       {posts.map(({ node }) => {
//         const title = node.frontmatter.title || node.fields.slug
//         return (
//           <Card key={node.fields.slug} className="mb-4">
//             <StaticImage
//               src={node.frontmatter.featuredImage.publicURL}
//               alt={title}
//               placeholder="blurred"
//               layout="fixed"
//               width={600}
//               height={400}
//             />
//             <CardBody>
//               <CardTitle>
//                 <Link to={node.fields.slug}>{title}</Link>
//               </CardTitle>
//               <CardSubtitle>{node.frontmatter.date}</CardSubtitle>
//               <CardText>{node.excerpt}</CardText>
//             </CardBody>
//           </Card>
//         )
//       })}
//     </div>
//   )
// }

// export default PostList
