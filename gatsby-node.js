const _ = require('lodash')

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const productTemplate = require.resolve('./src/templates/product.js')
  const categoryTemplate = require.resolve('./src/templates/category.js')
  const postTemplate = require.resolve('./src/templates/post.js')
  const topicTemplate = require.resolve('./src/templates/topic.js')
  

  const result = await wrapper(
    graphql(`
      {
        allPrismicProduct {
          edges {
            node {
              id
              uid
              data {
                categories {
                  category {
                    document {
                      data {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
        allPrismicPost {
          edges {
            node {
              id
              uid
              data {
                date
                title {
                  text
                }
                content {
                  html
                }
                topics {
                  topic {
                    document {
                      data {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `)
  )

  const categorySet = new Set()
  const productsList = result.data.allPrismicProduct.edges

  // Double check that the product has a category assigned
  productsList.forEach(edge => {
    if (edge.node.data.categories[0].category) {
      edge.node.data.categories.forEach(cat => {
        categorySet.add(cat.category.document[0].data.name)
      })
    }

    // The uid you assigned in Prismic is the slug!
    createPage({
      path: `/${edge.node.uid}`,
      component: productTemplate,
      context: {
        // Pass the unique ID (uid) through context so the template can filter by it
        uid: edge.node.uid,
      },
    })
  })

  const categoryList = Array.from(categorySet)

  categoryList.forEach(category => {
    createPage({
      path: `/${_.kebabCase(category)}`,
      component: categoryTemplate,
      context: {
        category,
      },
    })
  })


  const topicSet = new Set()
  const postsList = result.data.allPrismicPost.edges

  // Double check that the product has a category assigned
  postsList.forEach(edge => {
    if (edge.node.data.topics[0].topic) {
      edge.node.data.topics.forEach(top => {
        topicSet.add(top.topic.document[0].data.name)
      })
    }

    // The uid you assigned in Prismic is the slug!
    createPage({
      path: `/${edge.node.uid}`,
      component: postTemplate,
      context: {
        // Pass the unique ID (uid) through context so the template can filter by it
        uid: edge.node.uid,
      },
    })
  })

  const topicList = Array.from(topicSet)

  topicList.forEach(topic => {
    createPage({
      path: `/${_.kebabCase(topic)}`,
      component: topicTemplate,
      context: {
        topic,
      },
    })
  })
}


























// const path = require("path")

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   const productPages = await graphql(`
//     {
//       allPrismicProduct {
//         edges {
//           node {
//             id
//             uid
//           }
//         }
//       }
//     }
//   `)

//   const productTemplate = path.resolve("src/templates/product.js")

//   productPages.data.allPrismicProduct.edges.forEach(edge => {
//     createPage({
//       path: `/${edge.node.uid}`,
//       component: productTemplate,
//       context: {
//         uid: edge.node.uid,
//       },
//     })
//   })

//   const categoryPages = await graphql(`
//     {
//       allPrismicCategory {
//         edges {
//           node {
//             id
//             uid
//           }
//         }
//       }
//     }
//   `)

//   const categoryTemplate = path.resolve("src/templates/category.js")

//   categoryPages.data.allPrismicCategory.edges.forEach(edge => {
//     createPage({
//       path: `/${edge.node.uid}`,
//       component: categoryTemplate,
//       context: {
//         uid: edge.node.uid,
//       },
//     })
//   })
// }
