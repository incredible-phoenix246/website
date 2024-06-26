import { Suspense } from 'react';
import { NavigationBar } from '@/components/navigation';
import { MOBILENAVBAR } from '@/components/navigation/Mobile';
import { Footer } from '@/components/footer';
export default function ModeratorLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense>
        <NavigationBar />
      </Suspense>
      <MOBILENAVBAR />
      {children}
      <Footer />
    </>
  );
}
