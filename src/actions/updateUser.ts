'use server';

import { connectToDatabase } from '@/mongoose';
import User from '@/models/user.model';
import { handleError } from '@/utils/error-handler';

type UpdateUserTypes = {
  firstName: string;
  lastName: string;
  photo: string;
};

export const updateUser = async (clerkId: string, user: UpdateUserTypes) => {
  try {
    await connectToDatabase();
    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    if (!updatedUser) throw new Error('User update failed');
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
};
