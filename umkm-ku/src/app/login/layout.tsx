import FooterRegister from "@/views/pages/register-view/footer-register";
import NavbarRegisterBorrower from "@/views/pages/register-view/navbar-register";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <main>
          <NavbarRegisterBorrower role="Halaman Login" />
          {children}
          <FooterRegister />
        </main>
      </body>
    </html>
  );
}
