import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"


const ContactPage: React.FC<PageProps> = () => {
  return (
   <h1>Contact Page</h1>
  )
}

export default ContactPage

export const Head: HeadFC = () => <title>Contact</title>
