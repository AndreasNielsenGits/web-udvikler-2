import "./globals.css";


export const metadata = {
  title: "Andreas'ses portfolio",
  description: "Det her er mit portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>
        {children}
      </body>
    </html>
  );
}
