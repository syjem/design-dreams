'use server';

import User from '@/models/user.model';
import { connectToDatabase } from '@/mongoose';
import { handleError } from '@/utils/error-handler';

type CreateUserTypes = {
  clerkId: string;
  email: string;
  firstName: string;
  lastName: string;
  photo: string;
};

export const createUser = async (user: CreateUserTypes) => {
  try {
    await connectToDatabase();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
};
