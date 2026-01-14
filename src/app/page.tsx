import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-emerald-300/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-emerald-100/40 rounded-full blur-lg"></div>
        
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32 text-center">
          {/* Icon badge */}
          <div className="inline-flex items-center justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-200 rounded-full blur-md opacity-50"></div>
              <div className="relative bg-gradient-to-br from-emerald-500 to-emerald-700 w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-4xl sm:text-5xl">🌿</span>
              </div>
            </div>
          </div>
          
          {/* Main heading with gradient effect */}
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-emerald-900 mb-6 tracking-tight">
            <span className="block">AVV</span>
            <span className="block bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-600 bg-clip-text text-transparent">
              Ayurveda
            </span>
          </h1>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-0.5 bg-emerald-300"></div>
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <div className="w-24 h-0.5 bg-emerald-500"></div>
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <div className="w-12 h-0.5 bg-emerald-300"></div>
          </div>
          
          {/* Tagline */}
          <p className="text-2xl sm:text-3xl text-emerald-800 font-light mb-4 tracking-wide">
            Feel & Look Healthy
          </p>
          <p className="text-lg sm:text-xl text-emerald-700 font-medium mb-8">
            Become the person you want to be
          </p>
          
          {/* Decorative quote or element */}
          <div className="mt-12 inline-block px-6 py-3 bg-emerald-100/50 rounded-full border border-emerald-200/50">
            <p className="text-sm sm:text-base text-emerald-800 italic">
              "Ancient wisdom for modern wellness"
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl text-emerald-900 mb-4">About</h2>
          <p>
            Welcome! I&#39;m Anita Muralidharan, a doctor level NAMA certified Ayurvedic Practitioner.  My mission is to help you achieve
            a state of happiness, health, and balance in both body and mind through the timeless wisdom
            of Ayurveda. By embracing the principles of aahara (nourishment through food), vihara (healthy
            lifestyle practices), aushadhya (herbal remedies), pranayama (breath control), and meditation,
            I am here to guide you on a holistic journey towards well-being and vitality.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-3xl text-emerald-900 mb-4">Services</h2>
          <ul className="space-y-2">
            <li>Ayurveda Consultation</li>
            <li>Panchakarma</li>
          </ul>
          <p className="mt-4">
            <Link href="/contact" className="text-emerald-700 hover:text-emerald-900 hover:underline">
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
