import Link from "next/link";

export const metadata = {
  title: "Consultations | AVV Ayurveda",
};

export default function ConsultationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="font-serif text-5xl sm:text-6xl text-teal-800 mb-4">Ayurvedic Consultations</h1>
        <div className="w-24 h-1 bg-teal-600 mx-auto mb-6 rounded-full"></div>
        <p className="text-xl text-teal-800 max-w-3xl mx-auto leading-relaxed">
          Holistic health consultations designed to help you understand your unique constitution and become your own healer
        </p>
      </div>

      {/* Main Content */}
      <div className="mb-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="font-serif text-3xl text-teal-800 mb-4">A Holistic Approach to Your Health</h2>
            <p className="leading-7 text-gray-700 text-lg">
              Ayurvedic consultations start with the whole picture of your health. During your appointment you
              will interact with your practitioner about where you have been in your state of health, where you
              are now and where you can go. I will help you better understand your unique constitutional makeup
              and ways to uncover your true state of health.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl text-teal-800 mb-4">What You&#39;ll Receive</h2>
            <p className="leading-7 text-gray-700 mb-6 text-lg">
              You&#39;ll come away with recommendations on what and how to eat, ayurvedic herbs and treatments, 
              meditation, yoga asana and much more. My consultations are designed to show you the light of Ayurveda 
              so you can become your own healer and improve your health.
            </p>
          </div>
        </div>
      </div>

      {/* Consultation Types */}
      <section className="mb-12">
        <h2 className="font-serif text-3xl text-teal-800 mb-8 text-center">Consultation Options</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-teal-50 p-8 rounded-lg border border-teal-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🕐</span>
            </div>
            <h3 className="font-semibold text-xl text-teal-800 mb-3">Initial Consultation</h3>
            <p className="text-gray-700 mb-4">
              <strong className="text-teal-800">90 minutes</strong> - Comprehensive health assessment including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Health history questionnaire</li>
              <li>Visual observation</li>
              <li>Pulse reading</li>
              <li>Personalized treatment plan</li>
            </ul>
          </div>
          
          <div className="bg-teal-50 p-8 rounded-lg border border-teal-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🔄</span>
            </div>
            <h3 className="font-semibold text-xl text-teal-800 mb-3">Follow-up Sessions</h3>
            <p className="text-gray-700 mb-4">
              <strong className="text-teal-800">45 minutes</strong> - Flexible session length based on your needs
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Progress review</li>
              <li>Treatment adjustments</li>
              <li>Ongoing support and guidance</li>
              <li>Answer questions and concerns</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Consultation Methods */}
      <section className="mb-12">
        <h2 className="font-serif text-3xl text-teal-800 mb-8 text-center">How We Connect</h2>
        <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🏠</span>
            </div>
            <h3 className="font-semibold text-lg text-teal-800 mb-2">In Person</h3>
            <p className="text-gray-700">Visit our location for a traditional consultation experience</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📞</span>
            </div>
            <h3 className="font-semibold text-lg text-teal-800 mb-2">Phone Call</h3>
            <p className="text-gray-700">Connect from anywhere via telephone consultation</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💻</span>
            </div>
            <h3 className="font-semibold text-lg text-teal-800 mb-2">Video Call</h3>
            <p className="text-gray-700">Face-to-face consultation through video call</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-gradient-to-br from-teal-700 to-teal-800 text-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="font-serif text-3xl mb-4">Book Your Consultation</h2>
        <p className="text-lg mb-6 text-emerald-50 max-w-2xl mx-auto">
          Ready to begin your journey to better health? Schedule your appointment today and discover your path to holistic wellness.
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


