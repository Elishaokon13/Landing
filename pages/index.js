import Head from "next/head";
import Image from "next/image";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MoreInfoModal from "../components/MoreInfoModal";
import MoreInfo from "../components/MoreInfoModal";
// import Navbar from "../components/Navbar";
import Student from "../components/Student";
import Teacher from "../components/Teachers";
import Values from "../components/Values";

export default function Home() {
  return (
    <div>
      
    {/* <Navbar/> */}
    <Hero/>
    <Values/>
    <Teacher/>
    {/* <Student/> */}
   <MoreInfoModal/>
   <Cta/>
   <Footer/>
    </div>
  );
}
