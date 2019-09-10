import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>जय जिनेंद्र</h1>
    <p>स्वागत है आप सभी का। यह साइट अभी निर्माणाधीन है।</p>
    <p>चलो बनायें एक बेहतर कल। अपनो के लिए दिखलाए अपनापन।</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">सैम्पल पृष्ट</Link>
  </Layout>
)

export default IndexPage
