import About from "./components/about";
import Advisory from "./components/advisory";
import Carousel from "./components/carousel";
import Description from "./components/description";
import Footer from "./components/footer";
import Hero from "./components/hero";
import LatestPosts from "./components/latestposts";
import Links from "./components/links";
import NavBar from "./components/nav";
import Promotion from "./components/promotion";
import SubscribeBlock from "./components/subscribe";
import Topics from "./components/topics";

export default function Home() {
  return (
    <div className="font-figtree bg-base-300">
      <NavBar />
      <main className="px-6 small:px-20 xlarge:px-40 flex flex-col pb-20">
        <Hero />
        <Description />
        <About />
        <Advisory />
        <Links />
        <LatestPosts />
        <div className="py-14 small:py-24 w-full">
          <SubscribeBlock
            id="suscripcion"
            campaign="inicio"
            path="/"
            title="Recibe La Agenda de SecretoDefi en tu correo"
            description="Suscríbete gratis y recibe las publicaciones abiertas de La Agenda: guías paso a paso y casos reales de DeFi."
          />
        </div>
        <Topics />
        <Carousel />
        <Promotion />
      </main>

      <Footer />
    </div>
  );
}
