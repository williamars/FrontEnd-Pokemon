import React from "react"
import { Link } from "gatsby"
import "./mystyles.scss"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Login from "./login"
import { BrowserRouter as Router, Redirect } from "react-router-dom"


const IndexPage = () => (
  <Login/>
  
)

export default IndexPage
