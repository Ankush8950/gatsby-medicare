import React from "react"
import Header from "../component/Header"
import Layout from "../component/Layout"
import Service from "./service/service"
import Clinic from "./clinic/clinic"
import Specialist from "./specialist/specialist"
import Customer from "./customers/customer"
import News from "./news/news"


export default function Home() {
  return(
    <Layout>
      <Header />
      <Service />
      <Clinic />
      <Specialist />
      <Customer />
      <News />
    </Layout>
  )
}
