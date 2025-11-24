import HeaderComponent from "@/components/ui/header/header";
import "./globals.css";
import FooterComponent from "@/components/ui/footer/footer";


export const metadata = {
  title: "Andreas'ses portfolio",
  description: "Det her er mit portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>
        <HeaderComponent />
        {children}
        <FooterComponent /> 
      </body>
    </html>
  );
}
