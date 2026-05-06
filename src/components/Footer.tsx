import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-teal-50 to-teal-100/50 border-t-2 border-teal-200/50 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3">
              <Image 
                src="/images/logo.avv.ayurveda.jpg" 
                alt="AVV Ayurveda Logo" 
                width={48} 
                height={48} 
                className="w-12 h-12 object-contain"
              />
              <h3 className="font-serif text-xl text-teal-800 font-bold">AVV Ayurveda</h3>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-semibold text-teal-800 mb-4 text-lg">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:avvayurveda@gmail.com"
                className="flex items-center gap-3 text-slate-700 hover:text-teal-800 transition-colors group"
              >
                <div className="w-10 h-10 bg-teal-700 rounded-full flex items-center justify-center group-hover:bg-teal-800 transition-colors shadow-md">
                  <span className="text-white text-lg">✉️</span>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Email</div>
                  <div className="text-sm font-medium">avvayurveda@gmail.com</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-teal-200/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600 text-center">
            © {new Date().getFullYear()} AVV Ayurveda. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <span>Made with</span>
            <span className="text-red-500 text-lg">❤️</span>

          </div>
        </div>
      </div>
    </footer>
  );
}



