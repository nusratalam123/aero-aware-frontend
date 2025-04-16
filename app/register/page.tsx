import RegisterForm from "@/app/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-sky-100 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-sky-900 mb-8">
          Create an Account
        </h1>
        <RegisterForm />
      </div>
    </div>
  );
}
