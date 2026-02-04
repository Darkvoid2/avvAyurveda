export const metadata = {
  title: "Policies | AVV Ayurveda",
};

export default function PoliciesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 space-y-8">
      <h1 className="font-serif text-4xl text-teal-800">Policies</h1>

      <section>
        <h2 className="font-serif text-2xl text-teal-800">Confidentiality</h2>
        <p className="mt-2 leading-7">
          Strict adherence to confidentiality is maintained for our current as well as past clients and
          patients. Relationships will remain on a strictly therapeutic level in the privacy of the office
          and treatment rooms.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-teal-800">Cancellation / Illness / Tardiness</h2>
        <ul className="mt-2 space-y-2 list-disc pl-6">
          <li>
            Cancellations and rescheduling requests given with more than 24 hours advanced notice result
            in no monetary penalty.
          </li>
          <li>
            Cancellations and rescheduling requests given with less than 24 hours advanced notice will
            result in a charge equal to 50% of the reserved service amount.
          </li>
          <li>&#34;NO SHOWS&#34; will result in a charge of 100% of the reserved service amount.</li>
          <li>
            If you are late to a session your session will be shortened. If you are more than 15 minutes
            late, your session may be cancelled. Please call (if you can) if you are going to be late.
          </li>
        </ul>
        <p className="mt-2 leading-7">
          While truly sympathetic, we cannot absorb the financial responsibility of last-minute
          cancellations. The cancellation policy also allows us the time to inform our standby guests of
          any availability, thus better serving the community.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-teal-800">Payment / Reservations</h2>
        <p className="mt-2 leading-7">We accept checks, cash, Venmo and Zelle.</p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-teal-800">Gratuities</h2>
        <p className="mt-2 leading-7">
          Gratuities are not expected at the end of a service and have been calculated into the offering
          price. Any additional tips given to a practitioner are appreciated, but absolutely not necessary
          or expected.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-teal-800">Hygiene</h2>
        <p className="mt-2 leading-7">
          Please let your practitioner know if you have any allergies to any oils or lotions. Please show
          up clean and free of strong odors and colognes/perfumes.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-teal-800">Environment / Safety / Intoxicants</h2>
        <p className="mt-2 leading-7">
          Please expect that the purpose of any session is to achieve wellness goals while respecting the
          boundaries of the client as well as the practitioner. If at any time the practitioner&#39;s
          boundaries are not respected the session may be ended early with full payment being collected.
          The client also reserves the right to end a session early. The environment created should feel
          safe and relaxed. Please let your practitioner know if any adjustments can be made to make your
          experience more comfortable. For the safety of yourself and the practitioner, no work will done
          with an intoxicated client.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-teal-800">Referrals / Scope of Practice</h2>
        <p className="mt-2 leading-7">
          In certain cases a practitioner may suggest consulting with another healthcare provider either
          prior, during or post an appointment.
        </p>
      </section>
    </div>
  );
}


