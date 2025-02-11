import GeneratorForm from "./generator-form";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto my-24 max-w-2xl lg:text-center">
        <h2 className="text-base/7 font-semibold text-indigo-600">
          LinkedIn Post Generator
        </h2>
        <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl lg:text-balance">
          Use the power of AI to drive engagement
        </p>
        <p className="mt-6 text-lg/8 text-gray-200">
          Add the URL of a blog post or article you found interesting and allow
          AI to generate an insightful post about it to add to LinkedIn.
        </p>
      </div>
      <div className="mx-auto max-w-2xl">
        <GeneratorForm />
      </div>
    </div>
  );
}
