import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'


const navigation = [
  { name: 'HOME', href: '#' },
  { name: 'WHY JOIN TGC', href: '#whyjointgc' },
  { name: 'MEET THE CATALYSTS', href: '#Catalyst' },
  { name: 'FAQ', href: '#FAQ' },
]

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-0" aria-hidden="true">
        
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
        <Popover>
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-20 w-auto sm:h-20"
                    src='/assets/illustration.png'
                    alt=""
                  />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-black rounded-md p-2 inline-flex items-center justify-center text-[#059a75] hover:text-black hover:bg-[#059a75] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden md:block md:ml-10 md:space-x-10">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="font-bold text-[#059a75] hover:text-gray-900">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden md:block text-right">
              {/* <span className="inline-flex rounded-md shadow-md ring-1 ring-black ring-opacity-5">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-[#059a75] bg-black hover:bg-gray-50"
                >
                  Log in
                </a>
              </span> */}
            </div>
          </nav>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-md bg-black ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="/assets/illustration.png"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-black rounded-md p-2 inline-flex items-center justify-center text-[#059a75] hover:text-black hover:bg-[#059a75] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#059a75]">
                      <span className="sr-only">Close main menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-[#059a75] hover:text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                {/* <a
                  href="#"
                  className="block w-full px-5 py-3 text-center font-medium text-[#059a75] bg-black hover:bg-gray-100"
                >
                  Log in
                </a> */}
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>

                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                  <span className="block text-[#059a75]">A springboard designed</span>
                   <span className="block text-[#059a75]">to propel your growth to new heights</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Embark on a transformative voyage towards clarity and
expedite your personal and professional growth by harnessing the vast and boundless resources of the internet.
              </p>
              
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              {/* <svg
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
                width={640}
                height={784}
                fill="none"
                viewBox="0 0 640 784"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                    x={118}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-[#059a75]" fill="currentColor" />
                  </pattern>
                </defs>
                <rect y={72} width={640} height={640} className="text-[#059a75]" fill="currentColor" />
                <rect x={118} width={404} height={784} fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
              </svg> */}
              
              <img className="relative mx-auto" width={490} src="/assets/illustration.png" alt="" />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}