export default function Footer() {
  return (
    <footer className="border-t border-black/10 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-center">© {new Date().getFullYear()} AVV Ayurveda. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="mailto:anita.murali@avvayurveda.com" className="hover:text-emerald-700">Email</a>
        </div>
      </div>
    </footer>
  );
}



