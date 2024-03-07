import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: ['/', '/api/webhooks/clerk'],
  ignoredRoutes: [],
});

export const config = {
  // https://clerk.com/docs/references/nextjs/auth-middleware
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
