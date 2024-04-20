import { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

function ProfileDropdown() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="justify-center rounded-md px-4 py-2 shadow-sm font-medium tracking-tighter text-white bg-[#1cb2d4] hover:bg-[#0f5f71] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                    Profile
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-10">
                    <div className="px-1 py-1 ">
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`${
                                        active
                                            ? 'bg-[#78c7d9] text-white'
                                            : 'text-black'
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                    View Profile
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`${
                                        active
                                            ? 'bg-[#78c7d9] text-white'
                                            : 'text-black'
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                    Stats
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="px-1 py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`${
                                        active
                                            ? 'bg-[#78c7d9] text-white'
                                            : 'text-black'
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                    Privacy
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`${
                                        active
                                            ? 'bg-[#78c7d9] text-white'
                                            : 'text-black'
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                    Delete Account
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}

export function Navbar() {
    const [search, setSearch] = useState('');

    return (
        <div className="h-16 w-full flex justify-between items-center px-10 shadow-md font-medium tracking-tighter bg-[#686CF1] text-[#FEFEFE]">
            <div className="flex flex-1 gap-x-10 items-center">
                <button>+ Start New Hike</button>
                <input
                    type="text"
                    className="text-md rounded-lg w-full pl-3.5 h-10 text-gray-800"
                    placeholder="What kind of trail do you want to hike?"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                />
            </div>
            <div className="flex flex-1 justify-center">
                <p className=" font-sans text-lg text-white">
                    Trail Adventures
                </p>
            </div>
            <div className="flex flex-1 gap-x-10 justify-end">
                <button>Badges</button>
                <button>Leaderboards</button>
                <ProfileDropdown />
            </div>
        </div>
    );
}
