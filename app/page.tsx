import { WelcomeInfo } from '@/components/WelcomeInfo';

export default function MainPage() {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-start">
      <h1 className="mt-4 p-8 text-center text-h1 font-bold">Welcome to HCare!</h1>

      <div className="flex w-[80%] flex-row justify-between gap-4 md:gap-8 lg:w-[70%] xl:w-[50%]">
        <WelcomeInfo />
      </div>
    </div>
  );
}
