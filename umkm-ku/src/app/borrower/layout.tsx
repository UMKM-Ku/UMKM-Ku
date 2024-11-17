import Footer from "@/views/pages/borrower-view/footer-borrower";
import Navbar from "@/views/pages/borrower-view/navbar-borrower";

export default function BorrowerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
