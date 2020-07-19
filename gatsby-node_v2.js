const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    // 这个函数负责查找父“文件”节点以及创建 slug
    console.log(createFilePath({ node, getNode, basePath: `pages` }))
  }
}
