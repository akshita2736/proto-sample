
import './globals.css';
import Navbar from '../components/Navbar';


export const metadata = {
  title: 'DSA Learning Platform',
  description: 'Learn Data Structures visually and have fun!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}