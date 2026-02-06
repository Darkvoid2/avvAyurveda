import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-teal-50 via-[#FAF8F3] to-teal-50/50">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-teal-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-teal-300/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-teal-100/40 rounded-full blur-lg"></div>
        
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32 text-center">
          {/* Icon badge */}
          <div className="inline-flex items-center justify-center mb-8">
            <div className="relative">
              
          
              
            </div>
          </div>
          
          {/* Main heading with gradient effect */}
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-teal-800 mb-6 tracking-tight">
            <span className="block">AVV</span>
            <span className="block bg-gradient-to-r from-teal-700 via-teal-800 to-teal-700 bg-clip-text text-transparent">
              Ayurveda
            </span>
          </h1>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-0.5 bg-teal-300"></div>
            <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
            <div className="w-24 h-0.5 bg-teal-600"></div>
            <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
            <div className="w-12 h-0.5 bg-teal-300"></div>
          </div>
          
          {/* Tagline */}
          <p className="text-2xl sm:text-3xl text-teal-800 font-light mb-4 tracking-wide">
            Feel & Look Healthy
          </p>
          <p className="text-lg sm:text-xl text-teal-700 font-medium mb-8">
            Become the person you want to be
          </p>
          
          {/* Decorative quote or element */}
          <div className="mt-12 inline-block px-6 py-3 bg-teal-100/50 rounded-full border border-teal-200/50">
            <p className="text-sm sm:text-base text-teal-800 italic">
              "Ancient wisdom for modern wellness"
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl text-teal-800 mb-4">About</h2>
          <p>
            Welcome! I&#39;m Anita Muralidharan, a doctor level NAMA certified Ayurvedic Practitioner.  My mission is to help you achieve
            a state of happiness, health, and balance in both body and mind through the timeless wisdom
            of Ayurveda. By embracing the principles of aahara (nourishment through food), vihara (healthy
            lifestyle practices), aushadhya (herbal remedies), pranayama (breath control), and meditation,
            I am here to guide you on a holistic journey towards well-being and vitality.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-3xl text-teal-800 mb-4">Services</h2>
          <ul className="space-y-2">
            <li>Ayurveda Consultation</li>
            <li>Panchakarma</li>
          </ul>
          <p className="mt-4">
            <Link href="/contact" className="text-teal-700 hover:text-teal-900 hover:underline">
              Contact us to book an appointment
            </Link>
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-16 grid gap-6 sm:grid-cols-2">
        <Image src="/images/herbs.jpg" alt="Ayurveda herbs" width={300} height={192} className="rounded object-cover w-full h-48" />
        <Image src="/images/oils.jpg" alt="Ayurvedic oils" width={300} height={192} className="rounded object-cover w-full h-48" />
      </div>
    </section>
  );
}
