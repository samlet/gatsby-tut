// http://localhost:8000/my-files
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  // 在控制台打印出从 GraphQL 查询到的数据通常会很有帮助。
  // 你在构建 UI 时就可以在浏览器控制台中浏览数据。
  console.log(data)
  return (
    <Layout>
      <div>Hello world</div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`