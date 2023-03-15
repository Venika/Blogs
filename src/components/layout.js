// /**
//  * Layout component that queries for data
//  * with Gatsby's useStaticQuery component
//  *
//  * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
//  */

// // import * as React from "react"
// // import { useStaticQuery, graphql } from "gatsby"

// // import Header from "./header"
// // import "./layout.css"

// // const Layout = ({ children }) => {
// //   const data = useStaticQuery(graphql`
// //     query SiteTitleQuery {
// //       site {
// //         siteMetadata {
// //           title
// //         }
// //       }
// //     }
// //   `)

// //   return (
// //     <>
// //       <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
// //       <div
// //         style={{
// //           margin: `0 auto`,
// //           maxWidth: `var(--size-content)`,
// //           padding: `var(--size-gutter)`,
// //         }}
// //       >
// //         <main>{children}</main>
// //         <footer
// //           style={{
// //             marginTop: `var(--space-5)`,
// //             fontSize: `var(--font-sm)`,
// //           }}
// //         >
// //           © {new Date().getFullYear()} &middot; Built with
// //           {` `}
// //           <a href="https://www.gatsbyjs.com">Gatsby</a>
// //         </footer>
// //       </div>
// //     </>
// //   )
// // }

// // export default Layout


// import React from "react"
// import { Link } from "gatsby"
// import { Navbar, Nav, NavItem, Jumbotron, Container } from "reactstrap"

// const Layout = ({ children }) => {
//   return (
//     <>
//       <Navbar color="light" light expand="md">
//         <Container>
//           <Link to="/" className="navbar-brand">
//             My Blog
//           </Link>
//           <Nav className="ml-auto" navbar>
//             <NavItem>
//               <Link to="/" className="nav-link">
//                 Home
//               </Link>
//             </NavItem>
//             <NavItem>
//               <Link to="/about" className="nav-link">
//                 About
//               </Link>
//             </NavItem>
//           </Nav>
//         </Container>
//       </Navbar>
//       <Jumbotron fluid className="mb-0">
//         <Container>
//           <h1 className="display-3">My Awesome Blog</h1>
//           <p className="lead">Welcome to my blog!</p>
//         </Container>
//       </Jumbotron>
//       <Container>
//         <main>{children}</main>
//       </Container>
//     </>
//   )
// }

// export default Layout
