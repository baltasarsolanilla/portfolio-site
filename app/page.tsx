import MainAbout from '@/components/main-about/main-about';
import MainContact from '@/components/main-contact/main-contact';
import MainWork from '@/components/main-work/main-work';
import MainHero from '@/components/main-hero/main-hero';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <MainHero />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <MainAbout />
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
        <MainWork />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <MainContact />
      </section>
    </>
  );
}
