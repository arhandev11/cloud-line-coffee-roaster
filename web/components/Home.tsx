import type { Lang } from "@/lib/i18n";
import Nav from "./Nav";
import Hero from "./Hero";
import Roastery from "./Roastery";
import Beans from "./Beans";
import Bar from "./Bar";
import Events from "./Events";
import Wholesale from "./Wholesale";
import Footer from "./Footer";

// The whole site is one page, rendered once per language.
export default function Home({ lang }: { lang: Lang }) {
  return (
    <>
      <Nav lang={lang} />
      <main>
        <Hero lang={lang} />
        <Roastery lang={lang} />
        <Beans lang={lang} />
        <Bar lang={lang} />
        <Events lang={lang} />
        <Wholesale lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
