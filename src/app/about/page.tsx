import React from "react";

export const metadata = {
  title: "About | AVV Ayurveda",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 space-y-6">
      <h1 className="font-serif text-4xl text-emerald-900">About</h1>
      <p className="leading-7">
        Welcome! I'm Anita Muralidharan, an Ayurvedic Physician. My mission is to help you achieve a
        state of happiness, health, and balance in both body and mind through the timeless wisdom of
        Ayurveda.
      </p>
      <p className="leading-7">
        By embracing the principles of aahara (nourishment through food), vihara (healthy lifestyle
        practices), aushadhya (herbal remedies), pranayama (breath control), and meditation, I am here
        to guide you on a holistic journey towards well-being and vitality.
      </p>

      <hr className="my-6 border-black/10" />

      <section id="ayurveda" className="space-y-4">
        <h2 className="font-serif text-3xl text-emerald-900">What is Ayurveda?</h2>
        <p>
          Ayurveda, an ancient system of natural medicine originating from India, holds immense value in
          promoting holistic health and wellness. Rooted in the Sanskrit words "Ayur" (life) and "Veda"
          (science or knowledge), Ayurveda translates to "the science of life." This medical tradition,
          over 5,000 years old, emphasizes balance among the body, mind, and spirit to maintain well-being.
        </p>
        <p>
          The foundation of Ayurveda lies in the belief that each individual has a unique constitution, or
          "dosha," determined by the balance of three elemental energies: Vata (air and space), Pitta (fire
          and water), and Kapha (earth and water). A person's health is maintained when these doshas are
          balanced, and disease occurs when they are out of balance. Ayurvedic treatments focus on restoring
          harmony through personalized diets, herbal remedies, meditation, yoga, and cleansing techniques like
          "Panchakarma."
        </p>
        <p>
          The value of Ayurveda today lies in its preventive approach, promoting lifestyle changes that align
          with nature’s rhythms. It encourages mindfulness in everyday life, nourishing both physical and
          mental health. Additionally, Ayurveda's use of natural herbs and non-invasive treatments offers a
          sustainable alternative to modern medicine, focusing on treating the root cause of ailments rather
          than just symptoms, making it a timeless system of healing.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 pt-4">
          <img src="/images/about1.jpg" alt="Herbal preparation" className="rounded object-cover w-full h-64" />
          <img src="/images/about2.jpg" alt="Calming setup" className="rounded object-cover w-full h-64" />
        </div>
      </section>
    </div>
  );
}


