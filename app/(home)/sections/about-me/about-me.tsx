import Image from 'next/image';
import avatarImg from '@/assets/avatarImg.png';

export default function AboutMe() {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">About me</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg text-gray-300 mb-6">
            Frontend Software Engineer with 5+ years of experience building
            scalable web applications using React, JavaScript, and modern web
            tooling. Passionate about translating complex problems into
            intuitive user experiences. Thrive in agile teams where code
            quality, maintainability, and user value are core priorities.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            With a solid foundation in web development and a curious mind, I am
            always learning new technologies and methodologies to stay up to
            date with the latest development trends.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm">
              React
            </span>
            <span className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm">
              Node.js
            </span>
            <span className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm">
              Next.js
            </span>
          </div>
        </div>
        <div className="text-center">
          <div className="w-64 h-64 mx-auto">
            <Image
              src={avatarImg}
              alt="Avatar of myself"
              width={256}
              height={256}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
