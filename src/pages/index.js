import React from "react"
import PageTransition from "gatsby-v2-plugin-page-transitions"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import Header from "../components/header"
import Footer from "../components/Footer"
import FeaturedFrontPage from "../components/FeaturedFrontPage"
import styled from "styled-components"
import PropTypes from "prop-types"

import smallBanner1 from "../images/small-banner1.jpg"
import smallBanner2 from "../images/small-banner2.jpg"
import smallBanner3 from "../images/small-banner3.jpg"
import SEO from "../components/seo"
import sliderBanner1 from "../images/sliderbanner-1.jpg"
import sliderBanner2 from "../images/sliderbanner-2.jpg"
import sliderBanner3 from "../images/sliderbanner-3.jpg"

const SmallBannerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  justify-content: space-evenly;
  margin-top: 1.45rem;

  @media (max-width: 568px) {
    grid-template-columns: 1fr;
    justify-items: center;
    align-content: center;
    grid-gap: 0;
  }
`

const FeaturedProducts = styled.div`
  text-align: center;

  h2 {
    font-size: 2rem;
    text-transform: uppercase;
  }
`

const IndexPage = ({
  data: {
    products: { edges },
  },
}) => {
  return (
    <>
      <Header />
      <PageTransition>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Carousel showStatus={false} showThumbs={false}>
          <div>
            <img src={sliderBanner1} alt="" />
          </div>
          <div>
            <img src={sliderBanner2} alt="" />
          </div>
          <div>
            <img src={sliderBanner3} alt="" />
          </div>
        </Carousel>
        <div
          style={{
            margin: `1rem auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <SmallBannerContainer>
            <img
              style={{
                width: `100%`,
                maxWidth: `300px`,
                height: `auto`,
                marginBottom: `1.45rem`,
              }}
              src={smallBanner1}
              alt=""
            />
            <img
              style={{
                width: `100%`,
                maxWidth: `300px`,
                height: `auto`,
                marginBottom: `1.45rem`,
              }}
              src={smallBanner2}
              alt=""
            />
            <img
              style={{
                width: `100%`,
                maxWidth: `300px`,
                height: `auto`,
                marginBottom: `1.45rem`,
              }}
              src={smallBanner3}
              alt=""
            />
          </SmallBannerContainer>
          <FeaturedProducts>
            <h2>Featured Products</h2>
          </FeaturedProducts>
          <FeaturedFrontPage products={edges} />
        </div>
        <Footer />
      </PageTransition>
    </>
  )
}

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.shape({
    products: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
  query HomePage {
    products: allPrismicProduct(
      filter: {
        data: {
          front_page_products: {
            elemMatch: {
              featured_on: {
                document: {
                  elemMatch: { data: { featured: { eq: "Front Page" } } }
                }
              }
            }
          }
        }
      }
    ) {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 300, quality: 90) {
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
            front_page_products {
              featured_on {
                document {
                  data {
                    featured
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
