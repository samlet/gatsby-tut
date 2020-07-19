import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => {
  // 只有页面可以进行页面查询。非页面组件（例如 Layout）可以使用 StaticQuery。
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            subtitle
          }
        }
      }
    `
  )
  return (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>{data.site.siteMetadata.subtitle}</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/slugs/">Slugs</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    {children}
  </div>
)}

