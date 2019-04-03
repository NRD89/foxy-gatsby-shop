import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    
    <a href="https://upsafetysolutions.foxycart.com/cart?name=Cool%20Example&price=10&color=red&code=sku123">Add a red Cool Example</a>
    
    <form action="https://upsafetysolutions.foxycart.com/cart" method="post" accept-charset="utf-8">
    <input type="hidden" name="name||ba7ce593279da0497c70cdc16654e75ed5b7e0006e7b4564b5f746f5c108c3e7" value="Cool Example" />
    <input type="hidden" name="price||e216e6b83e00c3c16f293187b3fc5aa9eff1d111b33cfa5a591796736ebb3db3" value="10" />
    <input type="hidden" name="code||c9a10008b55f77285bf6f288e912300051fc09c1caf8fd71aca97d45dd0a09f9" value="sku123" />
    <label class="label_left">Size</label>
    <select name="size">
        <option value="small||4edfbae16a8429a5a881205c57098d91450cc02beb06a7c23677182be5e65aff">Small</option>
        <option value="medium||5f2641c499f4367333e85e6de9e16a1378e0ae90ad8a72aa199d176a0bbbaac4">Medium</option>
        <option value="large||15248042f10e978d647eed83125b52d683ddb53deabab2560c8f43c618429459">Large</option>
    </select>
    <input type="submit" value="Add a Cool Example" class="submit" />
    </form>


    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage















