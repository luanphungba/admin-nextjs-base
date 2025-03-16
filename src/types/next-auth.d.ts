import 'next-auth';

declare module 'next-auth' {
  type Session = {
    accessToken?: string;
    user: {
      id: string;
      email: string;
      // Add other user properties as needed
    };
  };

  type User = {
    id: string;
    email: string;
    accessToken?: string;
    // Add other user properties as needed
  };
}
