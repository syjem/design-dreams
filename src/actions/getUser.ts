'use server';
import { connectToDatabase } from '@/mongoose';
import User from '@/models/user.model';
import { handleError } from '@/utils/error-handler';

export const getUserById = async (userId: string) => {
  try {
    await connectToDatabase();
    const user = await User.findOne({ clerkId: userId });
    if (!user) throw new Error('User not found');

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
  }
};
