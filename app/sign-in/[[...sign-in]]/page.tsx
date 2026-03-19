import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-yellow-50 px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2.5">
            <div className="h-12 w-12 border-4 border-black bg-gradient-to-br from-pink-400 to-purple-500"></div>
            <h1 className="text-3xl font-bold text-black">SnappClip</h1>
          </div>
          <p className="text-lg text-gray-700">Sign in to your account</p>
        </div>
        <div className="border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <SignIn 
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "border-0 shadow-none bg-transparent",
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
