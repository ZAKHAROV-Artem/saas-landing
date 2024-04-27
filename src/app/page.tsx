import Container from "@/components/layout/container";
import { Header } from "@/components/header";
import { Companies } from "@/components/companies";
import { Features } from "@/components/features";
import { Reviews } from "@/components/reviews";
import { Questions } from "@/components/questions";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Container className="my-20 space-y-20">
        <Companies />
        <Features />
        <Reviews />
        <Questions />
      </Container>
      <Footer />
    </>
  );
}
