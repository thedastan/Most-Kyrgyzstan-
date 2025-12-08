import HomeComponents from "@/components/pages/home/HomeComponents";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Brücke nach Kirgisistan",
  description:
    "Brücke nach Kirgisistan ist eine unabhängige, gemeinnützige Organisation, die 2012 in der Schweiz gegründet wurde.",
  url: "https://most-kyrgyzstan.vercel.app",
  image: "/logo.png",
});

const Home = () => <HomeComponents />;

export default Home;
