// Home Page when the users first visit the website

export default function Home() {
  return (
    <div className="flex flex-col w-screen">
      {/* // Hero Section */}
      <div className="flex py-28 px-20">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">
            Pendanaan & Investasi lebih inklusif untuk semua
          </h1>
          <p className="text-sm">
            UMKM-ku adalah platform peer-to-peer (P2P) lending yang
            menghubungkan usaha mikro, kecil, dan menengah (UMKM) dengan para
            investor yang mencari peluang untuk mendukung bisnis lokal. Dengan
            misi memberdayakan UMKM di Indonesia, UMKM-ku memudahkan akses modal
            bagi pengusaha, sekaligus membuka peluang investasi bagi masyarakat
            luas.
          </p>
          <div className="flex gap-2 items-end">
            <div className="flex flex-col items-center justify-center">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-sm text-zinc-600">
                    Email
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Masukkan email..."
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            <button className="btn text-white bg-primary">
              Daftar sekarang
            </button>
          </div>
        </div>
        <button className="btn btn-circle btn-outline">
          <img src="/hero-image.png" alt="hero-image" />
        </button>
      </div>
    </div>
  );
}
