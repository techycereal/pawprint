import "./globals.css";

export const metadata = {
  title: "PawPrint Portraits",
  description: "Portraits for your dogs",
  author: "Your Name or Company",
  keywords: "dog portraits, pet photography, professional pet photos",
};
export const viewport = {
  width: "device-width",
  initialScale: "1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.author} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Cache-Control" content="no-store" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <title>{metadata.title}</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
