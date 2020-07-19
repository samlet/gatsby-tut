const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // 创建页面还需要一样东西：一个页面模板组件。与 Gatsby 中所有其他东西一样，
  // 用编程生成的页面也是依靠 React 组件的。创建页面时，需要指定所使用的组件。
  //
  // 新建一个目录位于 src/templates，然后添加以下代码到一个新文件
  // src/templates/blog-post.js 中。
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}

// 找到新创建页面的一种简单方法是：随便转到一个不存在的路径，
// 在该路径中 Gatsby 会帮你显示出站点的页面列表。
// 比如转到 http://localhost:8000/sdf，就会看到你创建的新页面。

