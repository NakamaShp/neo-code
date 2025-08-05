import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/sign-in',
  '/sign-up',
  '/',
  '/dashboard'
]);

export default clerkMiddleware(async (authPromise, req) => {
  const auth = await authPromise;

  if (!isPublicRoute(req)) {
    await auth.protect(); // pastikan ini dipanggil setelah `auth` di-await
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
