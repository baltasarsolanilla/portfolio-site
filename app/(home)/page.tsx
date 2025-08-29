import AboutMe from '@/app/(home)/sections/about-me/about-me';
import Contact from '@/app/(home)/sections/contact/contact';
import MyWork from '@/app/(home)/sections/my-work/my-work';
import Hero from '@/app/(home)/sections/hero/hero';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <AboutMe />
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
        <MyWork />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <Contact />
      </section>
    </>
  );
}
