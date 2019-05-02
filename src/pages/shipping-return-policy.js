import React from "react"
import Layout from "../components/layout"
import PageTransition from "gatsby-v2-plugin-page-transitions"

const ShippingReturnPolicy = () => {
  return (
    <Layout>
      <PageTransition>
        <div>
          <h1>Shipping and Return Policy</h1>
          <p>
            Unless otherwise stated in writing, price and delivery terms are
            F.O.B. site of shipment, and such prices do not include sales, use
            or other taxes or any export package cost, transportation, freight
            handling charges, export/import license fee, customs duties and the
            like, all of which shall be paid by the customer, who shall
            indemnify Up Safety Solutions against all claims and liabilities
            therefor. Unless otherwise specified in writing, delivery dates are
            estimates only, and&nbsp;Up Safety Solutions shall not be liable for
            any damages, consequential or otherwise, resulting from the failure
            to deliver the goods by a particular date.
          </p>
          <p>&nbsp;</p>
          <h2>Shipping Policy</h2>
          <p>
            Up Safety Solutions ships&nbsp;
            <strong>within the United States (50 States</strong>) either via UPS
            or USPS. Free shipping does not apply to international orders, US
            territories&nbsp; and P.O. Boxes.&nbsp; In case of heavy orders, odd
            size or weight, there's going to be a shipping surcharge. Contact
            your&nbsp;Up Safety Solutions representative for more information on
            our shipping policy.
          </p>
          <p>
            <strong>Shipping Restrictions: </strong>
          </p>
          <ol>
            <li>
              Offer cannot be combined with other promotions or past purchases.
            </li>
            <li>
              Order must be delivered to one address, does not apply to multiple
              locations.
            </li>
            <li>
              Offer is valid while supplies last and is limited to the
              manufacturer’s brand products.
            </li>
            <li>Offer is only valid for online web purchases</li>
            <li>
              Customer is responsible for all costs incurred in the event of a
              product return.
            </li>
          </ol>
          <p>&nbsp;</p>
          <h2>Returns Policy</h2>
          <p>
            Up safety Solutions accepts the return of most products with the
            exception of custom made products. All items must be returned in the
            same fashion as received (unopened and in brand new condition) to
            the address location of Up Safety Solutions within 30 days of the
            purchase date. A restocking fee of 20% may be applied to the return.
          </p>
          <p>
            Once we have received your return, the process to receive your
            refund may take 10-25 business days from the day received.
          </p>
          <ol>
            <li>
              Contact a&nbsp;Up Safety Solutions representative at&nbsp;{" "}
              <strong>1800-842-4773</strong> or{" "}
              <a href="mailto:sales@upsafetysolutions.com">
                <strong>sales@upsafetysolutions.com</strong>
              </a>
            </li>
            <li>
              Notify representative of your return to receive an RMA number to
              be associated with your return shipment.
            </li>
            <li>
              Make sure the RMA number is included in the return shipping label
              or written clearly on the package like the sample below:
            </li>
          </ol>
          <blockquote>
            <p>
              ATTN: RMA# 123456
              <br /> <strong>THC Label Solutions</strong>
              <br />
              650 North Rose Dr. #454
              <br />
              Placentia, CA 92870
            </p>
          </blockquote>
          <p>&nbsp;</p>
          <p>
            Please note that if the RMA number is not clearly marked on the
            return package, this may delay the return process.
          </p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <h2>Disclaimer</h2>
          <p>
            THC Label Solutions&nbsp;reserve the right to modify, withdraw or
            terminate free shipping offers at any time without prior notice.
          </p>
          <p>&nbsp;</p>
        </div>
      </PageTransition>
    </Layout>
  )
}

export default ShippingReturnPolicy
