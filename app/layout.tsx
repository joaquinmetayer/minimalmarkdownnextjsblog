import Link from "next/link";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const header = (
    <header>
      <Link href="/">
        <h1 className="text-xl font-bold py-6">Minimal Markdown Nextjs blog</h1>
      </Link>
    </header>
  );

  const footer = (
    <footer>
      <div className="py-6">
      </div>
    </footer>
  );

  return (
    <html>
      <head />
      <body>
        <div className="mx-auto max-w-2xl px-8 py-2">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
