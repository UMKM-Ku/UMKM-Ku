import FooterRegister from "@/views/pages/register-view/footer-register";
import NavbarRegisterBorrower from "@/views/pages/register-view/navbar-register";

export default function RegisterLenderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <main>
          <NavbarRegisterBorrower role="Pendaftaran Lender" />
          {children}
          <FooterRegister />
        </main>
      </body>
    </html>
  );
}
