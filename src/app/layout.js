import "./globals.css";



export const metadata = {
  title: "To Do List",
  description: "Minimalist to do app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">{children}</body>
    </html>
  );
}
