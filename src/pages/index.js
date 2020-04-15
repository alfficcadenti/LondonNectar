import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`honey`, `raw honey`, `local honey`, `london`, `london honey`, `beekeeping`, `beekeeper`]} />
    
    <div style={{ maxWidth: `100%`, marginBottom: `1.45rem` }}>
      <p>{'Pure means no additives whatsoever (even natural ones).'}</p>
      <p>{'Raw means no additives or processing: neither heated nor filtered.'}</p>
      <p>{'Local means produces by bees from local beehives that collect nectar from local plants.'}</p>
      <p>{'Raw, pure and local honey contains a blend of local pollen, which can strengthen a person’s immune system, and reduce diseases such as seasonal allergies.'}</p>    
    </div>
    
  </Layout>
)

export default IndexPage
