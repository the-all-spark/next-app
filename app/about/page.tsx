export default function AboutPage() {
  return (
    <>
      <h1 className="mt-4 p-8 text-center text-h1 font-bold">About us</h1>
      <div className="m-auto flex w-[80%] flex-col justify-between gap-4 md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[45%]">
        <p>We believe that technology should simplify, not complicate, the practice of medicine.</p>
        <div>
          <p>
            <b>HCare</b> is a dedicated platform for doctors:
          </p>
          <ul className="ml-3 list-inside list-disc">
            <li>
              to efficiently <i>manage their patient lists</i>;
            </li>
            <li>
              to gain rapid <i>access to essential patient dat</i>a.
            </li>
          </ul>
        </div>
        <p>Our goal is to minimize administrative tasks so you can maximize patient care.</p>
        <p>We provide a secure, reliable, and easy-to-use space to keep your patient information organized and always within reach.</p>

        <p className="mt-5">
          <b>We hope you enjoy using HCare and that it makes your practice a little easier every day!</b>
        </p>
      </div>
    </>
  );
}
