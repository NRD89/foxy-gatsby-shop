import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import PageTransition from "gatsby-v2-plugin-page-transitions"
import Layout from "../components/layout"
import AddToCartBtn from "../components/AddToCartBtn"
import Categories from "../components/Listing/Categories"
import SEO from "../components/seo"
import styled from "styled-components"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"

const Category = styled.h4`
  padding-bottom: 1.45rem;

  a {
    color: #000;
    text-decoration: none;
    transition: all ease-in-out 0.4s;
    border-bottom: 1px solid #ff5100;
    margin-left: .6rem;
    margin-right: .2rem;

    &:hover {
      color: #ff5100;
      border-bottom: 1px solid #000;
    }
  }
`

const Title = styled.h1`
  font-size: 1.7rem;
`

const Input = styled.input`
  border: 3px solid #000;
  border-radius: 0 3px 3px 0;
  width: 50px;
  font-family: inherit;
  font-size: inherit;
  color: #000 !important;
  background: none;
  display: inline-block;
  margin: 0 10px 10px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  outline: none;
  padding: 10px 3px 13px 3px;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  h3 {
    color: #ff5100;
  }

  @media (max-width: 767px) {
    display: block;
  }
`

const Product = ({ data: { prismicProduct }, location }) => {
  const { data } = prismicProduct
  let categories = false
  if (data.categories[0].category) {
    categories = data.categories.map(c => c.category.document[0].data.name)
  }
  return (
    <Layout>
      <SEO title={`${data.title.text}`} pathname={location.pathname} description={`${data.desc.text}`} />
      <PageTransition>
        <Category>
          {categories && <Categories categories={categories} />}
        </Category>
        <GridContainer>
          <Img
            style={{ gridColumn: `1 / 4` }}
            fluid={data.image.localFile.childImageSharp.fluid}
            alt={`${data.title.text}`}
          />
          <div
            style={{
              padding: `30px`,
              gridColumn: `4 / 6`,
              alignItems: `center`,
              display: `grid`,
            }}
          >
            <Title>{data.title.text}</Title>
            <h3>Price: ${data.price}</h3>
            <form
              action="https://upsafetysolutions.foxycart.com/cart"
              method="post"
              accept-charset="utf-8"
            >
              <input
                type="hidden"
                name={`${data.name_hmac.text}`}
                value={`${data.name.text}`}
              />
              <input
                type="hidden"
                name={`${data.price_hmac.text}`}
                value={`${data.price}`}
              />
              <input
                type="hidden"
                name={`${data.item_code_hmac.text}`}
                value={`${data.item_code_sku.text}`}
              />
              <input
                type="hidden"
                name={`${data.cart_image_hmac.text}`}
                value={`${data.cart_image.url}`}
              />
              <input
                type="hidden"
                name={`${data.weight_hmac.text}`}
                value={`${data.weight}`}
              />
              <label
                style={{
                  background: `#000`,
                  color: `#ffd100`,
                  padding: `15px 3px 18px 3px`,
                  borderRadius: `3px 0 0 3px`,
                }}
                className="label_left"
              >
                Qty:
              </label>
              <Input
                type="text"
                name={`${data.quantity_hmac.text}`}
                placeholder="1"
              />
              <AddToCartBtn
                type="submit"
                value="Add To Cart"
                className="submit"
                style={{ borderRadius: `0 3px 3px 0 !important` }}
              >
                ADD TO CART
              </AddToCartBtn>
            </form>
          </div>
        </GridContainer>
        <Tabs style={{marginTop: `1.45rem`,}}>
          <TabList>
            <Tab>Description</Tab>
            <Tab>Specifications</Tab>
          </TabList>
          <TabPanel>
            <h3>{data.desc_title.text}</h3>
            <p style={{fontWeight: `bold`}}>Product Description</p>
            <p>{data.desc.text}</p>

          </TabPanel>
          <TabPanel>
            <div style={{ overflowX: `auto` }}>
              <table style={{paddingLeft: `15px`}}>
                <tbody>
                  <tr>
                    <td>{data.td1.text}</td>
                    <td>{data.td2.text}</td>
                  </tr>
                  <tr>
                    <td>{data.td3.text}</td>
                    <td>{data.td4.text}</td>
                  </tr>
                  <tr>
                    <td>{data.td5.text}</td>
                    <td>{data.td6.text}</td>
                  </tr>
                  <tr>
                    <td>{data.td7.text}</td>
                    <td>{data.td8.text}</td>
                  </tr>
                  <tr>
                    <td>{data.td9.text}</td>
                    <td>{data.td10.text}</td>
                  </tr>
                  <tr>
                    <td>{data.td11.text}</td>
                    <td>{data.td12.text}</td>
                  </tr>
                  <tr>
                    <td>{data.td13.text}</td>
                    <td>{data.td14.text}</td>
                  </tr>
                  <tr>
                    <td>{data.td15.text}</td>
                    <td>{data.td16.text}</td>
                  </tr>
                  <tr>
                    <td>{data.td17.text}</td>
                    <td>{data.td18.text}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabPanel>
        </Tabs>
      </PageTransition>
    </Layout>
  )
}

export default Product

Product.propTypes = {
  data: PropTypes.shape({
    prismicProduct: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query ProductBySlug($uid: String!) {
    prismicProduct(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 600, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
        name_hmac {
          text
        }
        name {
          text
        }
        price_hmac {
          text
        }
        price
        cart_image_hmac {
          text
        }
        cart_image {
          url
        }
        item_code_hmac {
          text
        }
        item_code_sku {
          text
        }
        weight_hmac {
          text
        }
        weight
        quantity_hmac {
          text
        }
        desc_title {
          text
        }
        desc {
          text
        }
        td1 {
          text
        }
        td2 {
          text
        }
        td3 {
          text
        }
        td4 {
          text
        }
        td5 {
          text
        }
        td6 {
          text
        }
        td7 {
          text
        }
        td8 {
          text
        }
        td9 {
          text
        }
        td10 {
          text
        }
        td11 {
          text
        }
        td12 {
          text
        }
        td13 {
          text
        }
        td14 {
          text
        }
        td15 {
          text
        }
        td16 {
          text
        }
        td17 {
          text
        }
        td18 {
          text
        }
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
`