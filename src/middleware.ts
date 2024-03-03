import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: ['/'],
  ignoredRoutes: [],
});

export const config = {
  // https://clerk.com/docs/references/nextjs/auth-middleware
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
