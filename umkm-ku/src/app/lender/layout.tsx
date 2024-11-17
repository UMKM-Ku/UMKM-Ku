import FooterLender from "@/views/pages/lender-view/footer-lender";
import NavbarLender from "@/views/pages/lender-view/navbar-lender";

export default function BorrowerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <NavbarLender />
        <main>{children}</main>
        <FooterLender />
      </body>
    </html>
  );
}
