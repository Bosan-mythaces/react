import MenuButton from "./components/MenuButton";
import PrimaryButton from "./components/PrimaryButton";
import SecondaryButton from "./components/SecondaryButton";

export default function App() {
  return (
    <>
      <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50 py-4 lg:py-5">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://htmlwind.com/assets/images/logo/logoipsum-accent-283.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="lg:hidden">
              <MenuButton />
            </div>
            <div className="hidden lg:flex lg:gap-x-8">
              <a href="#" className="text-sm font-semibold leading-6 text-gray-700">
                Features
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-700">
                Services
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-700">
                Pricing
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-700">
                About
              </a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-x-3">
              <SecondaryButton>Login</SecondaryButton>
              <PrimaryButton>Sign up</PrimaryButton>
            </div>
          </nav>
        </header>

        <div className="relative isolate overflow-hidden pt-12 lg:pt-16">
          <div
            aria-hidden="true"
            className="absolute -top-[40rem] left-1/2 -z-10 h-[80rem] w-[80rem] -translate-x-1/2 rounded-full bg-hero-grid bg-[length:70px_70px] mask-image-radial-gradient"
          ></div>
          <div className="px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative flex items-center justify-center gap-3 rounded-lg bg-white p-1 pr-2.5 text-sm font-medium leading-6 text-gray-600 shadow-sm ring-1 ring-gray-900/10 hover:bg-gray-50">
                  <span className="inline-block rounded-md bg-white px-2 ring-1 ring-inset ring-gray-900/10">
                    New release
                  </span>
                  <a href="#" className="inline-flex items-center justify-center gap-1">
                    <span className="absolute inset-0" aria-hidden="true"></span>
                    Explore our latest features
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12H19M19 12L13 6M19 12L13 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="sm:text-center">
                <h1 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                  Achieve more with less effort
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Simplify your workflows and automate daily tasks with ease, saving time to focus on what matters
                  most for your business.
                </p>
              </div>
              <div className="mt-10 flex items-center justify-start gap-6 sm:justify-center">
                <PrimaryButton>
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M10.9 8.8L10.6577 8.66152C10.1418 8.36676 9.5 8.73922 9.5 9.33333L9.5 14.6667C9.5 15.2608 10.1418 15.6332 10.6577 15.3385L10.9 15.2L15.1 12.8C15.719 12.4463 15.719 11.5537 15.1 11.2L10.9 8.8Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Demo
                </PrimaryButton>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
