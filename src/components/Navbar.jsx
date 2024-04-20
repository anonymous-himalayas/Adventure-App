import { Menu, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { Fragment, useState, useEffect, useCallback } from 'react';
import { Searchbar } from './Searchbar';

function ProfileDropdown({ hikeStarted }) {
    const [statsOpen, setStatsOpen] = useState(false);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let interval;

        if (hikeStarted) {
            setSeconds(0);
            interval = setInterval(() => setSeconds((s) => s + 1), 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [hikeStarted]);

    const getTimeElapsed = useCallback((seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        let ret = '';
        ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
        ret += '' + mins + ':' + (secs < 10 ? '0' : '');
        ret += '' + secs;
        return ret;
    }, []);

    return (
        <Menu as="div" className="relative inline-block text-left">
            {statsOpen && (
                <div className="fixed bottom-5 right-6 w-60 h-fit bg-10 rounded-2xl divide-y divide-gray-100 bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-10">
                    <button
                        className="absolute h-6 w-6 top-3 right-3"
                        onClick={() => {
                            setStatsOpen(false);
                        }}
                    >
                        <XMarkIcon
                            style={{ color: '#686CF1' }}
                            className="h-6 w-6"
                        />
                    </button>
                    <div className="flex flex-col py-4 pl-4 text-black w-full rounded-md text-sm">
                        <p>Current hike time: {getTimeElapsed(seconds)}</p>
                        <p>Current hike miles: 0.2</p>
                        <p>Total miles: 4.2</p>
                        <p>Total trails: 1</p>
                        <p>Parks visited: 0</p>
                        <p>Badges collected: 2</p>
                    </div>
                </div>
            )}
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
                                    onClick={() => setStatsOpen(true)}
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
                                    Progress
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

export function Navbar({ trailLocationRef }) {
    const [hikeStarted, setHikeStarted] = useState(false);

    return (
        <div className="h-16 w-full flex justify-between items-center px-10 shadow-md font-medium tracking-tighter bg-[#686CF1] text-[#FEFEFE]">
            <div className="flex flex-1 gap-x-3 items-center">
                <button
                    className={`w-40 h-[2.25rem] rounded-md py-1 mt-0.5 ${
                        !hikeStarted ? 'bg-[#1cb2d4]' : 'bg-rose-600'
                    }`}
                    onClick={() => {
                        setHikeStarted(!hikeStarted);
                    }}
                >
                    {!hikeStarted ? '+ Start New Hike' : 'Stop Hike'}
                </button>
                <Searchbar trailLocationRef={trailLocationRef} />
            </div>
            <div className="flex flex-1 justify-center">
                <p className=" font-sans text-lg text-white">
                    Trail Adventures
                </p>
            </div>
            <div className="flex flex-1 gap-x-10 justify-end">
                <button>Badges</button>
                <button>Leaderboards</button>
                <ProfileDropdown hikeStarted={hikeStarted} />
            </div>
        </div>
    );
}
