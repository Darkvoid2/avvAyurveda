import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Panchakarma | AVV Ayurveda",
};

export default function PanchakarmaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="font-serif text-5xl sm:text-6xl text-teal-800 mb-4">Panchakarma</h1>
        <div className="w-24 h-1 bg-teal-600 mx-auto mb-6 rounded-full"></div>
        <p className="text-xl text-teal-800 max-w-3xl mx-auto leading-relaxed">
          Ancient healing system of Ayurvedic rejuvenation therapies for deep cleansing and holistic wellness
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-12 lg:grid-cols-2 mb-12">
        {/* Left Column - Content */}
        <div className="space-y-6">
          <div>
            <h2 className="font-serif text-3xl text-teal-800 mb-4">What is Panchakarma?</h2>
            <p className="leading-7 text-gray-700">
              Panchakarma is the ancient healing system of Ayurvedic rejuvenation therapies performed to facilitate
              the removal of deep-rooted impurities, toxins, and stresses in the mind-body. In Ayurveda, Panchakarma
              therapy means &#34;five actions&#34;. A deep cleansing and rejuvenation program for enhancing longevity and
              vitality, Panchakarma is considered a complete, holistic approach to the elimination of the root cause
              of each and every chronic health problem.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl text-teal-800 mb-4">Our Approach</h2>
            <p className="leading-7 text-gray-700 mb-4">
              I specialize in home Panchakarma treatments. You may request references for Panchakarma therapist to
              do your individual therapy like Abhyanga (oil body massage), Shirodhara (oil stream over the forehead).
            </p>
            <p className="leading-7 text-gray-700">
              The first-time patients must schedule initial appointments to receive proper panchakarma planning sessions.
            </p>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="flex items-start justify-center lg:justify-end">
          <div className="w-full max-w-lg">
            <Image 
              src="/images/panchakarma.jpg" 
              alt="Calming Panchakarma setup" 
              width={500} 
              height={600} 
              className="rounded-lg object-cover w-full h-full shadow-lg" 
            />
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="mb-12">
        <h2 className="font-serif text-3xl text-teal-800 mb-8 text-center">Benefits of Panchakarma</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-teal-50 p-6 rounded-lg border border-emerald-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">⚖️</span>
            </div>
            <h3 className="font-semibold text-lg text-teal-800 mb-2">Balances Doshas</h3>
            <p className="text-gray-700">Brings the doshas to equilibrium, restoring natural balance to your body and mind.</p>
          </div>
          
          <div className="bg-teal-50 p-6 rounded-lg border border-emerald-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="font-semibold text-lg text-teal-800 mb-2">Removes Toxins</h3>
            <p className="text-gray-700">Eliminates toxins (ama) and rejuvenates the body for optimal health and vitality.</p>
          </div>
          
          <div className="bg-teal-50 p-6 rounded-lg border border-emerald-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🌟</span>
            </div>
            <h3 className="font-semibold text-lg text-teal-800 mb-2">Promotes Longevity</h3>
            <p className="text-gray-700">Brings glow to the body and promotes longevity through holistic rejuvenation.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-gradient-to-br from-teal-700 to-teal-800 text-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="font-serif text-3xl mb-4">Book Your Panchakarma Treatment</h2>
        <p className="text-lg mb-6 text-emerald-50 max-w-2xl mx-auto">
          Ready to experience deep cleansing and rejuvenation? Schedule your appointment today and begin your journey to holistic wellness.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-md bg-white text-teal-700 px-8 py-3 font-semibold hover:bg-teal-50 transition-colors shadow-md"
        >
          Contact Us to Book
        </Link>
      </div>
    </div>
  );
}


