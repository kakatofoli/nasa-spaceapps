import { Skills } from "../../components/Apoiadores/Skills";
import { Banner } from "../../components/Banner/Banner";
import { Contact } from "../../components/Contatos/Contact";
import { Footer } from "../../components/Footer/Footer";
import { NavBar } from "../../components/Navbar/NavBar";
import { Projects } from "../../components/Sobre/Projects";

export default function Home() {

    return (
        <>
            <NavBar />
            <Banner />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}