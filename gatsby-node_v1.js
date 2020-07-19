// exports.onCreateNode = ({ node }) => {
//   console.log(node.internal.type)
// }
// 仅记录 MarkdownRemark 节点。
exports.onCreateNode = ({ node, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    // 如何从 MarkdownRemark 节点中获取文件名称呢？你需要 遍历 一遍它的
    // 父节点 File 的 “节点图”。因为 File 节点包含了磁盘中你所需要的文件数据。
    const fileNode = getNode(node.parent)
    console.log(`\n`, fileNode.relativePath)
  }
}

