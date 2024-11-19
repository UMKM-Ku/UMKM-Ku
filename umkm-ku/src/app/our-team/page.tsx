import FooterLandingPage from "@/views/pages/landing-pages/footer-landing-pages";
import CardTeam from "@/views/pages/public-view/card-team";

export default function OurTeam() {
  return (
    <>
      <section className="h-lvh w-full">
        <div className="pt-32">
          <h1 className="text-center text-3xl font-bold text-gray-600">
            Tentang Kami
          </h1>
          <h6 className="mx-72 mt-2 text-center text-gray-400">
            Tim UMKM-Ku terdiri dari para profesional yang berpengalaman di
            bidang teknologi. Kami berkomitmen untuk membantu UMKM Indonesia
            berkembang dengan menyediakan platform pembiayaan yang aman, mudah,
            dan transparan. Kami bekerja bersama untuk menghubungkan peminjam
            dan pemberi pinjaman demi menciptakan dampak positif bagi
            perekonomian lokal.
          </h6>
        </div>

        <div className="flex justify-center gap-16 mt-5">
          <CardTeam
            link="/foto/julio.jpg"
            nama="Julio Andarestu"
            job="Prod-Man"
            hidden="flex"
            quote="Jalani hidupmu semaksimal mungkin. Kamu hanya punya satu
              kesempatan."
            linkedin="linkedin.com/in/julioandarestu"
            github="https://github.com/julioandarestu"
          />
          <CardTeam
            link="/foto/ferdi.jpeg"
            nama="Hafidh Ferdiansyah"
            job="UI/UX"
            hidden="flex"
            quote="Tenanglah dalam situasi apa pun karena kedamaian sama dengan kekuatan."
            linkedin="https://www.linkedin.com/in/hafidhferdi/"
            github="https://github.com/itsbyferdi"
          />
          <CardTeam
            link="/foto/manday.jpg"
            nama="Novan Masriandi M"
            job="Back-End"
            hidden="flex"
            quote="Hanya dibutuhkan 1 lagu untuk membawa kembali seribu kenangan."
            linkedin="https://www.linkedin.com/in/novanmanday/"
            github="https://github.com/novanmasriandi11"
          />
        </div>

        <div className="flex justify-center gap-16 mb-10">
          <CardTeam
            link="/foto/bram.jpg"
            nama="Brahmantyo Setyadji"
            job="Prod-Man"
            hidden="hidden"
            quote="Sesuatu yang kau impikan tampak mustahil, sampai kamu mencapainya."
            linkedin="https://www.linkedin.com/in/brahmantyo-setyadji-priambodo-8445541a1/"
            github="https://github.com/BrahmantyoSP"
          />
          <CardTeam
            link="/foto/irwan.jpg"
            nama="Irwan Bachtiar"
            job="Prod-Man"
            hidden="hidden"
            quote="Saya Tidak Cukup Muda Untuk Mengetahui Segalanya."
            linkedin="https://www.linkedin.com/in/irwan-bachtiar-514125263/"
            github="https://github.com/irwanbachtiar4"
          />
          <CardTeam
            link="/foto/diana.png"
            nama="Diana Novita"
            job="Prod-Man"
            hidden="hidden"
            quote="Tetaplah tenang karena kedamaian sama dengan kekuatan."
            linkedin="https://www.linkedin.com/in/irwan-bachtiar-514125263/"
            github="https://github.com/irwanbachtiar4"
          />
        </div>

        <FooterLandingPage />
      </section>
    </>
  );
}
