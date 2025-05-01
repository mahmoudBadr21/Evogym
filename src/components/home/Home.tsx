import Benefits from "./benefits/Benefits"
import ContactUs from "./content-us/ContactUs"
import Header from "./header/Header"
import OurClasses from "./our-classes/OurClasses"

const Home = () => {
  return (
    <section id="home">
      <Header />
      <Benefits />
      <OurClasses />
      <ContactUs />
    </section>
  )
}

export default Home