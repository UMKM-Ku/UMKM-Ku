import LandingNavigation from "@/views/pages/landing-pages/landing-navigation";

export default function OurTeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <main>
          <LandingNavigation />
          {children}
        </main>
      </body>
    </html>
  );
}
