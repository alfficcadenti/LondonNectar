import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div>{'I love to be in touch with anyone who visits the website. Give me a buzz and drop me a line to '}
      <a href="mailto: {'info@londonnectar.com'}">{'info@londonnectar.com'}</a>
    </div>
  </Layout>
)

export default ContactPage
