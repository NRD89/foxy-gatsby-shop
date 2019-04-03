import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Post = ({ data: { prismicProduct } }) => {
  const { data } = prismicProduct
  return (
    <Layout>
      <h1>{data.title.text}</h1>
      <img src={`${data.image.url}`} alt="" />
      <h4>Price: {data.price}</h4>
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
        <label className="label_left">Qty:</label>
        <input type="text" name="quantity||29fb36fb922702382c472cf0de2481106c3c2b36173c20001ad0ef14210cd351||open" placeholder="1" />
        <input type="submit" value="Add To Cart" class="submit" />
      </form>
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query ProductBySlug($uid: String!) {
    prismicProduct(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        image {
          url
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
      }
    }
  }
`




{/* <form action="https://upsafetysolutions.foxycart.com/cart" method="post" accept-charset="utf-8">
<input type="hidden" name="name" value="BearKat Protective Eyewear, Clear Lens, Duramass Scratch-Resistant" />
<input type="hidden" name="price" value="1.49" />
<input type="hidden" name="code" value="135-BK110" />
<input type="hidden" name="image" value=""https://upsafetysolutions.cdn.prismic.io/upsafetysolutions/f1dfb962f70cb01e082c14794398d66420997968_135-bk110.jpg"" />
<input type="hidden" name="weight" value="1" />
<label class="label_left">Size</label>
<select name="size">
    <option value="small">Small</option>
    <option value="medium">Medium</option>
    <option value="large">Large</option>
</select>
<input type="submit" value="Add a Cool Example" class="submit" />
</form> */}

