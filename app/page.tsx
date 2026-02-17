import { WelcomeInfo } from '@/components/WelcomeInfo';

export default function MainPage() {
  return (
    <div className="mb-4 flex h-[80vh] flex-col items-center justify-start max-sm:h-full">
      <h1 className="mt-4 p-8 text-center text-h1 font-bold">Welcome to HCare!</h1>
      <WelcomeInfo />
    </div>
  );
}
