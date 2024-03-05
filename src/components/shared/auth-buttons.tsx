import React from 'react';
import { Button } from '@/components/ui/button';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';

const AuthButtons = () => {
  return (
    <>
      <SignedOut>
        <SignUpButton mode="modal">
          <Button variant="outline">Create new account</Button>
        </SignUpButton>
        <SignInButton mode="modal">
          <Button>Sign in</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </>
  );
};

export default AuthButtons;
