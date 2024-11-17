"use client";
import { useState, useEffect } from "react";

interface Testimonial {
  login: {
    username: string;
  };
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  location: {
    city: string;
    country: string;
  };
}

export default function UserTestimonials() {
  const [activeTab, setActiveTab] = useState<"borrower" | "lender">("borrower");
  const [borrowerTestimonials, setBorrowerTestimonials] = useState<
    Testimonial[]
  >([]);
  const [lenderTestimonials, setLenderTestimonials] = useState<Testimonial[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTestimonials = async (userType: "borrower" | "lender") => {
    try {
      const response = await fetch(
        "https://randomuser.me/api/?results=6&nat=in"
      );
      const data = await response.json();
      if (userType === "borrower") {
        setBorrowerTestimonials(data.results);
      } else {
        setLenderTestimonials(data.results);
      }
      setLoading(false);
    } catch (err) {
      setError("Gagal mengambil data testimoni");
      setLoading(false);
    }
  };

  useEffect(() => {
    Promise.all([fetchTestimonials("borrower"), fetchTestimonials("lender")]);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  const generateTestimonialText = (
    index: number,
    type: "borrower" | "lender"
  ): string => {
    const borrowerTestimonials = [
      "Platform ini sangat membantu UMKM saya mendapatkan modal usaha dengan mudah dan cepat!",
      "Proses pengajuan pinjaman yang simpel dan transparan. Sangat membantu bisnis saya berkembang.",
      "Suku bunga yang kompetitif dan proses verifikasi yang cepat. Recommended!",
      "Sebagai pemilik UMKM, akses modal dari platform ini sangat membantu ekspansi usaha saya.",
      "Persyaratan yang mudah dan pencairan yang cepat. Sangat cocok untuk kebutuhan UMKM.",
      "Platform terpercaya untuk mendapatkan modal usaha. Tim support sangat responsif!",
    ];

    const lenderTestimonials = [
      "Investasi yang aman dengan return menarik. Portofolio saya menjadi lebih beragam.",
      "Sangat transparan dalam memberikan informasi peminjam. Memudahkan saya mengambil keputusan investasi.",
      "Platform P2P Lending terbaik untuk diversifikasi investasi dengan risiko yang terukur.",
      "Sistem yang user-friendly dan laporan yang detail. Sangat membantu monitoring investasi.",
      "Return yang konsisten dan proses pencairan yang lancar. Sangat memuaskan!",
      "Investasi yang menguntungkan sambil membantu UMKM. Win-win solution!",
    ];

    return type === "borrower"
      ? borrowerTestimonials[index % borrowerTestimonials.length]
      : lenderTestimonials[index % lenderTestimonials.length];
  };

  const testimonials =
    activeTab === "borrower" ? borrowerTestimonials : lenderTestimonials;

  return (
    <section className="py-20 bg-gray-50 px-3">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-teal-700 text-center mb-12">
          Apa kata mereka yang telah bergabung dengan UMKM-ku
        </h2>

        {/* Tab buttons */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-white">
            <button
              onClick={() => setActiveTab("borrower")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                activeTab === "borrower"
                  ? "bg-teal-700 text-white"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              Borrower
            </button>
            <button
              onClick={() => setActiveTab("lender")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                activeTab === "lender"
                  ? "bg-teal-700 text-white"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              Lender
            </button>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow hover:cursor-pointer bg-white"
            >
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.picture.large}
                  alt={`${testimonial.name.first} ${testimonial.name.last}`}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {testimonial.name.first} {testimonial.name.last}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {testimonial.location.city}, {testimonial.location.country}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                "{generateTestimonialText(index, activeTab)}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
