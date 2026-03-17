import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import { ScrollToTop } from './ScrollToTop';

export function MainLayout() {
  return (
    <div className="min-h-screen bg-sand text-ink dark:bg-[#0d1416] dark:text-[#e8efe9]">
      <ScrollToTop />
      <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-hero-glow dark:bg-hero-glow-dark" />
      <Header />
      <main className="relative z-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
