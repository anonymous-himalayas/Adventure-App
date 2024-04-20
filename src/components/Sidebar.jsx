import { Fragment, useState } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SparklesIcon } from '@heroicons/react/20/solid';
import { Dialog } from '@headlessui/react';
import { useTrailSuggestionGemini } from '../hooks/useTrailSuggestionGemini';

function SideButtons() {
    const trailSuggestion = useTrailSuggestionGemini();

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
                        Puddingstone Trail
                    </Disclosure.Panel>
                    <Disclosure.Panel className="text-gray-500">
                        Turtle Rock Creek Trail
                    </Disclosure.Panel>
                    <Disclosure.Panel className="text-gray-500">
                        Eaton Canyon Trail
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
                        Brush Canyon Trail
                    </Disclosure.Panel>
                    <Disclosure.Panel className="text-gray-500">
                        Colby Canyon Trail
                    </Disclosure.Panel>
                    <Disclosure.Panel className="text-gray-500">
                        Appalachian Trail
                    </Disclosure.Panel>
                </Disclosure>
                <div className="flex flex-row items-center space-x-2">
                    <FontAwesomeIcon
                        icon="fa-regular fa-lightbulb"
                        style={{ color: '#686CF1' }}
                    />
                    <SuggestionDialog trailSuggestionRef={trailSuggestion} />
                </div>
                <p className="pt-2 text-sm tracking-tighter px-5 text-gray-700">
                    {trailSuggestion.suggestion}
                </p>
            </div>
        </>
    );
}

function SuggestionDialog({ trailSuggestionRef }) {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');

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
                                        Suggestions?
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Please give your idea of what you
                                            want to do at which park and we will
                                            give a possible list of things to do
                                            while at that trail/park.
                                        </p>
                                        <textarea
                                            className="h-fit w-full border border-1 border-gray-500 text-sm leading-5 text-gray-900 focus:ring-0 rounded-md px-2 py-2 mt-3"
                                            placeholder="Ask me anything about your trip!"
                                            value={query}
                                            onChange={(e) => {
                                                setQuery(e.target.value);
                                            }}
                                            style={{ resize: 'none' }}
                                        />
                                    </div>

                                    <div className="mt-1">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={() => {
                                                trailSuggestionRef.getTrailSuggestionGemini(
                                                    query
                                                );
                                                closeModal();
                                            }}
                                        >
                                            Get suggestions!
                                            <SparklesIcon
                                                style={{ color: '#686CF1' }}
                                                className="ml-1 h-5 w-5 text-gray-400"
                                            />
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
