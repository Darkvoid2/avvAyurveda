export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-t-2 border-emerald-200 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2">
              <span className="text-3xl">🌿</span>
              <h3 className="font-serif text-2xl text-emerald-900 font-bold">AVV Ayurveda</h3>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-semibold text-emerald-900 mb-4 text-lg">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:anita.murali@avvayurveda.com"
                className="flex items-center gap-3 text-gray-700 hover:text-emerald-700 transition-colors group"
              >
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center group-hover:bg-emerald-700 transition-colors shadow-md">
                  <span className="text-white text-lg">✉️</span>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Email</div>
                  <div className="text-sm font-medium">anita.murali@avvayurveda.com</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 text-center">
            © {new Date().getFullYear()} AVV Ayurveda. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Made with</span>
            <span className="text-red-500 text-lg">❤️</span>
            <span>for holistic wellness</span>
          </div>
        </div>
      </div>
    </footer>
  );
}



