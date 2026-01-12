export default function Home() {
  return (
    <section>
      <div className="relative isolate">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <h1 className="font-serif text-4xl sm:text-6xl text-emerald-900">AVV Ayurveda</h1>
          <p className="mt-4 text-xl">Feel & Look Healthy</p>
          <p className="mt-2 text-lg">Become the person you want to be</p>
          <div className="mt-8">
            <a href="tel:+13033242826" className="inline-block rounded-md bg-emerald-700 text-white px-6 py-3 mr-3">Call</a>
            <a href="mailto:anita.murali@avvayurveda.com" className="inline-block rounded-md border border-emerald-700 text-emerald-700 px-6 py-3">Email</a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl text-emerald-900 mb-4">About</h2>
          <p>
            Welcome! I&#34;m Anita Muralidharan, an Ayurvedic Physician. My mission is to help you achieve
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
          <p className="mt-4">Call or email to book an appointment: 303-324-2826 or anita.murali@avvayurveda.com</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-16 grid gap-6 sm:grid-cols-3">
        <img src="/images/hero1.jpg" alt="Ayurveda herbs" className="rounded object-cover w-full h-48" />
        <img src="/images/hero2.jpg" alt="Spa stones" className="rounded object-cover w-full h-48" />
        <img src="/images/hero3.jpg" alt="Ayurvedic oils" className="rounded object-cover w-full h-48" />
      </div>
    </section>
  );
}
