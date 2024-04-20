import { Fragment, useState } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog } from '@headlessui/react';
// import { all } from '@fortawesome/free-regular-svg-icons'

function SideButtons() {
    return (
        <>
            <div className="flex flex-col items-center">
                <Disclosure>
                    <div className="flex flex-row items-center space-x-2">
                        <FontAwesomeIcon
                            icon="fa-regular fa-bookmark"
                            style={{ color: '#686CF1' }}
                        />
                        <Disclosure.Button className="py-2 text-[#686CF1] font-medium">
                            Saved
                        </Disclosure.Button>
                    </div>
                    <Disclosure.Panel className="text-gray-500">
                        Yes! You can purchase a license that you can share with
                        your entire team.
                    </Disclosure.Panel>
                </Disclosure>
                <Disclosure>
                    <div className="flex flex-row items-center space-x-2">
                        <FontAwesomeIcon
                            icon="fa-regular fa-clock"
                            style={{ color: '#686CF1' }}
                        />
                        <Disclosure.Button className="py-2 text-[#686CF1] font-medium">
                            Recent
                        </Disclosure.Button>
                    </div>
                    <Disclosure.Panel className="text-gray-500">
                        Yes! You can purchase a license that you can share with
                        your entire team.
                    </Disclosure.Panel>
                </Disclosure>
                <div className="flex flex-row items-center space-x-2">
                    <FontAwesomeIcon
                        icon="fa-regular fa-lightbulb"
                        style={{ color: '#686CF1' }}
                    />
                    <SuggestionDialog />
                </div>
            </div>
        </>
    );
}

function SuggestionDialog() {
    let [isOpen, setIsOpen] = useState(true);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
        <>
            <div className="h-[40px]">
                <button
                    type="button"
                    onClick={openModal}
                    className="text-[#686CF1] font-medium pt-[7px]"
                >
                    Suggestions
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                        >
                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <Dialog.Title
                            as="h3"
                            className="text-lg font-medium leading-6 text-gray-900"
                            >
                            Payment successful
                            </Dialog.Title>
                            <div className="mt-2">
                            <p className="text-sm text-gray-500">
                                Your payment has been successfully submitted. We’ve sent
                                you an email with all of the details of your order.
                            </p>
                            </div>

                            <div className="mt-4">
                            <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={closeModal}
                            >
                                Got it, thanks!
                            </button>
                            </div>
                        </Dialog.Panel>
                        </Transition.Child>
                    </div>
                    </div>
                </Dialog>
                </Transition>
        </>
    );
}

export function Sidebar() {
    return (
        <>
            <div className="basis-2/12 h-dvh bg-[#EBEBEB]">
                <SideButtons />
            </div>
        </>
    );
}
