import { LoginForm } from '@/components/organisms/auth/login-form';
import { AuthLayout } from '@/components/templates/auth-layout';

export default function LoginPage() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
