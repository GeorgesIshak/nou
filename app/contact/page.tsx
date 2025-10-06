"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen px-8 py-16 md:px-8">
        {/* Grid: Title + Address + Contact Info + Social Media */}
        <div className="flex flex-wrap gap-10 md:gap-20 mb-12 items-start mt-24 md:mt-40">
          {/* Our Address */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <div className="grid items-start gap-4">
              <div className="text-[#2b2929]/10 bg-[#2b2929] p-4 rounded-xl flex w-14 items-center justify-center transition-transform transform hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[#2b2929] font-semibold text-lg mb-1">
                  Our Address
                </h3>
                <h6>Ellados 24,</h6>
                <h6>Limassol, Cyprus, 3036</h6>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <div className="grid items-start gap-4">
              <div className="p-4 bg-[#2b2929] rounded-xl w-14 flex items-center justify-center transition-transform transform hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 21.5 2.5 13.93 2.5 5a1 1 0 011-1H7a1 1 0 011 1c0 1.35.27 2.67.76 3.88.13.27.07.59-.21 1.11l-2.2 2.2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[#2b2929] font-semibold text-lg mb-1">
                  Contact Info
                </h3>

                {/* Clickable phone number */}
                <p>
                  <a
                    href="tel:+35796435171"
                    className="text-[#2b2929] hover:underline"
                  >
                    +357 96 435 171
                  </a>
                </p>

                {/* Clickable email */}
                <p>
                  <a
                    href="mailto:nada@nouarchitecturestudio.com"
                    className="text-[#2b2929] hover:underline"
                  >
                    nada@nouarchitecturestudio.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <div className="grid items-start gap-4">
              <div className="p-4 bg-[#2b2929] rounded-xl w-14 flex items-center justify-center transition-transform transform hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c5.523 0 10-4.477 10-10S17.523 2 12 2zm1.5 15h-3v-6h3v6zm0-8h-3V7h3v2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[#2b2929] font-semibold text-lg mb-1">
                  Social Media
                </h3>

                {/* Instagram */}
                <p>
                  <a
                    href="https://www.instagram.com/nou_architecture_studio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2b2929] hover:underline"
                  >
                    Instagram
                  </a>
                </p>

                {/* Facebook */}
                <p>
                  <a
                    href="https://www.facebook.com/nouarchitecturestudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2b2929] hover:underline"
                  >
                    Facebook
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full h-96 rounded-xl overflow-hidden border border-white/20 shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d328.5566549927842!2d33.042583!3d34.674196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14e73347d6b1fbd9%3A0x46bd34b0a516077a!2sNou%20Architecture%20Studio!5e0!3m2!1sen!2sus!4v1692600000000!5m2!1sen!2sus"
            width="100%"
            height="650"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <Footer />
    </>
  );
}
