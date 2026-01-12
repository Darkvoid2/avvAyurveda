import Link from "next/link";

export const metadata = {
  title: "Panchakarma | AVV Ayurveda",
};

export default function PanchakarmaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 space-y-6">
      <h1 className="font-serif text-4xl text-emerald-900">Panchakarma</h1>

      <p className="leading-7">
        Panchakarma is the ancient healing system of Ayurvedic rejuvenation therapies performed to facilitate
        the removal of deep-rooted impurities, toxins, and stresses in the mind-body. In Ayurveda, Panchakarma
        therapy means &#34;five actions&#34;. A deep cleansing and rejuvenation program for enhancing longevity and
        vitality, Panchakarma is considered a complete, holistic approach to the elimination of the root cause
        of each and every chronic health problem.
      </p>

      <p className="leading-7">
        I specialize in home Panchakarma treatments. You may request references for Panchakarma therapist to
        do your individual therapy like Abhyanga (oil body massage), Shirodhara (oil stream over the forehead)
      </p>

      <p className="leading-7">
        The first-time patients must schedule initial appointments to receive proper panchakarma planning sessions.
      </p>

      <section>
        <h2 className="font-serif text-2xl text-emerald-900">Benefits of Panchakarma</h2>
        <ul className="mt-3 list-disc pl-6 space-y-2">
          <li>Balances the doshas and brings them to equilibrium.</li>
          <li>Removes toxins (ama) and rejuvenates the body.</li>
          <li>Brings glow to the body and promotes longevity.</li>
        </ul>
      </section>

      <div className="mt-8 p-6 bg-emerald-50 border border-emerald-200 rounded-lg">
        <h2 className="font-serif text-2xl text-emerald-900 mb-4">Book Your Panchakarma Treatment</h2>
        <p className="mb-4">Ready to experience deep cleansing and rejuvenation? Schedule your appointment today.</p>
        <Link
          href="/contact"
          className="inline-block rounded-md bg-emerald-700 text-white px-6 py-3 hover:bg-emerald-800 transition-colors"
        >
          Contact Us to Book
        </Link>
      </div>
    </div>
  );
}


