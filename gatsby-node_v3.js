const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // 使用每一个 Markdown 文件的名称来创建页面 slug。pandas-and-bananas.md
  // 就变成 /pandas-and-bananas/。
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    // 将新的 slug 直接添加到 MarkdownRemark 节点里。这非常有用，
    // 因为你添加到节点的任何数据都可以在以后使用 GraphQL 查询到。
    // 因此创建页面时很容易得到 slug。
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

/* 运行这条 GraphQL 查询语句来查看新的 slug:
{
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
 */

