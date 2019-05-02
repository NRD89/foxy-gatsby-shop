import React from "react"
import PageTransition from "gatsby-v2-plugin-page-transitions"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutUs = () => (
  <Layout>
    <PageTransition>
      <SEO title="About Us" />
      <h1>ABOUT US</h1>
      <p>
        Organic freegan readymade chambray keytar, next level single-origin
        coffee gentrify whatever lumbersexual edison bulb skateboard. Stumptown
        normcore yuccie you probably haven't heard of them plaid. Bespoke
        ethical godard, flexitarian marfa selfies church-key mixtape umami plaid
        cardigan poutine keffiyeh helvetica. Viral offal deep v beard tbh put a
        bird on it. Cray succulents thundercats mixtape.
      </p>
      <p>
        Bushwick cliche kickstarter hammock readymade. Semiotics man braid tofu
        iPhone. Vaporware la croix irony franzen meggings dreamcatcher
        intelligentsia distillery aesthetic palo santo lo-fi taxidermy. Umami
        vinyl meditation cornhole succulents.
      </p>
    </PageTransition>
  </Layout>
)

export default AboutUs
