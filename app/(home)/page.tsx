import { AboutMe } from '@/app/(home)/sections/about-me/about-me';
import { Contact } from '@/app/(home)/sections/contact/contact';
import { MyWork } from '@/app/(home)/sections/my-work/my-work';
import { Hero } from '@/app/(home)/sections/hero/hero';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <MyWork />
      <Contact />
    </main>
  );
}
