import Link from "next/link";

export const metadata = {
  title: "Consultations | AVV Ayurveda",
};

export default function ConsultationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 space-y-6">
      <h1 className="font-serif text-4xl text-emerald-900">Ayurvedic Consultations</h1>

      <p className="leading-7">
        Ayurvedic consultations start with the whole picture of your health. During your appointment you
        will interact with your practitioner about where you have been in your state of health, where you
        are now and where you can go. I will help you better understand your unique constitutional makeup
        and ways to uncover your true state of health. You&#39;ll come away with recommendations on what and how
        to eat, ayurvedic herbs and treatments, meditation, yoga asana and much more. My consultations are
        designed to show you the light of Ayurveda so you can become your own healer and improve your health.
      </p>

      <p className="leading-7">
        Initial consultations are 90 minutes which will include health history questionnaire, visual
        observation, pulse reading and treatment plan. Follow-up sessions are 45 minutes, it may be shorter
        or longer based on your needs. I can see you in person, or over telephone call or video call to
        connect with you wherever you are.
      </p>

      <div className="mt-8 p-6 bg-emerald-50 border border-emerald-200 rounded-lg">
        <h2 className="font-serif text-2xl text-emerald-900 mb-4">Book Your Consultation</h2>
        <p className="mb-4">Ready to begin your journey to better health? Schedule your appointment today.</p>
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


