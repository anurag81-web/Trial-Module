import { Providers } from "./components/theme-provider";
import Navbar from "./navbar/Navbar";
import AuthGuardWrapper from "./components/auth-guard-wrapper";
import "./globals.css";

export const metadata = {
  title: "Mero Hisab",
  description: "Personal finance and movie catalog management tracker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <AuthGuardWrapper>
            <Navbar />
            <main>
              {children}
            </main>
          </AuthGuardWrapper>
        </Providers>
      </body>
    </html>
  );
}