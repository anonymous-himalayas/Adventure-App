import {
    BadgeX,
    BarChart2,
    Bookmark,
    History,
    Lightbulb,
    LockKeyholeOpen,
    Map as MapIcon,
    Sparkles,
    User,
    X,
} from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../components/ui/dropdown-menu.jsx';
import { getTimeElapsed } from '../utils/getTimeElapsed.js';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Progress } from '../components/ui/progress';
import { Map } from '../components/Map.jsx';
import { useState, useEffect } from 'react';
import { useTrailLocation } from '../hooks/useTrailLocation.js'
import { useTrailNameGemini } from '../hooks/useTrailNameGemini.js'
import { useTrailSuggestionGemini } from '../hooks/useTrailSuggestionGemini';


export function NewHome() {
    const [seconds, setSeconds] = useState(0);
    const [hikeStarted, setHikeStarted] = useState(false);
    const [statsMenuOpen, setStatsMenuOpen] = useState(false);

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

    return (
        <div className="flex h-screen bg-gradient-to-r from-green-200 via-green-300 to-blue-200">
            {/* Left sidebar */}
            <nav className="flex flex-col w-64 h-full px-4 py-8 bg-white border-r">
                <h2 className="text-2xl font-semibold text-gray-900">
                    Trail Adventures
                </h2>
                <div className="flex flex-col justify-between flex-1 mt-6">
                    {/* Top sidebar buttons */}
                    <aside>
                        <Button
                            className={`w-full mb-2 text-white ${
                                hikeStarted ? 'bg-rose-500' : 'bg-blue-600'
                            }`}
                            onClick={() => setHikeStarted(!hikeStarted)}
                        >
                            {hikeStarted ? 'Stop Hike' : '+ Start New Hike'}
                        </Button>
                        <span className="flex flex-row relative">
                            <Input
                                className="tracking-tighter"
                                placeholder="What trail do you want to find?"
                            />
                            <Sparkles className="absolute right-2 top-2.5 w-5 h-5 text-gray-200" />
                        </span>
                        <ul className="space-y-2 mt-5">
                            <li>
                                <Button
                                    className="justify-start"
                                    variant="ghost"
                                >
                                    <Bookmark className="text-blue-600 w-6 h-6" />
                                    Saved
                                </Button>
                            </li>
                            <li>
                                <Button
                                    className="justify-start"
                                    variant="ghost"
                                >
                                    <History className="text-blue-600 w-6 h-6" />
                                    Recent
                                </Button>
                            </li>
                            <li>
                                <Button
                                    className="justify-start"
                                    variant="ghost"
                                >
                                    <Lightbulb className="text-blue-600 w-6 h-6" />
                                    Suggestions
                                </Button>
                            </li>
                            <li>
                                <p className='text-sm tracking-tighter w-56 break-words'>
                                    hihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihi
                                </p>
                            </li>
                        </ul>
                    </aside>
                    {/* Bottom sidebar buttons */}
                    <div>
                        <Button className="justify-start" variant="ghost">
                            <MapIcon className="text-blue-600 w-6 h-6" />
                            Quests
                        </Button>
                        <div className="mt-2 text-sm font-medium text-gray-700">
                            Level 3
                        </div>
                        <Progress className="w-full bg-blue-200" value={70} />
                        <span className="mt-2 text-xs font-semibold text-gray-500">
                            XP (350/500)
                        </span>
                    </div>
                </div>
            </nav>
            {/* Top bar buttons */}
            <div className="flex-1 p-10">
                <div className="flex items-center justify-between">
                    <div />
                    <div className="space-x-4">
                        <Button
                            className="text-white bg-blue-600"
                            variant="ghost"
                        >
                            Badges
                        </Button>
                        <Button
                            className="text-white bg-blue-600"
                            variant="ghost"
                        >
                            Leaderboards
                        </Button>
                        <ProfileDropdown setStatsMenuOpen={setStatsMenuOpen} />
                    </div>
                </div>
                <div className="relative mt-6">
                    <div className="w-full h-[35rem] rounded-md">
                        <Map />
                    </div>
                </div>
            </div>
            {statsMenuOpen && (
                <StatsMenu
                    seconds={getTimeElapsed(seconds)}
                    setStatsMenuOpen={setStatsMenuOpen}
                />
            )}
        </div>
    );
}

function ProfileDropdown({ setStatsMenuOpen }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="text-white bg-blue-600" variant="ghost">
                    Profile
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-1 mr-10 w-[9.5rem]">
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <BarChart2 className="mr-2 h-4 w-4" />
                        <button
                            className="cursor-default"
                            onClick={() => setStatsMenuOpen(true)}
                        >
                            Stats
                        </button>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <LockKeyholeOpen className="mr-2 h-4 w-4" />
                        <span>Privacy</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <BadgeX className="mr-2 h-4 w-4" />
                        <span>Delete Account</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

function StatsMenu({ seconds, setStatsMenuOpen }) {
    return (
        <div className="fixed bottom-4 right-7 px-5 py-3 bg-white rounded-2xl shadow-lg">
            <button
                className="absolute h-6 w-6 top-3 right-3"
                onClick={() => {
                    setStatsMenuOpen(false);
                }}
            >
                <X style={{ color: '#686CF1' }} className="h-6 w-6" />
            </button>
            <ul className="text-sm w-48 tracking-tighter font-semibold py-0.5">
                <li>Current hike time: {seconds}</li>
                <li>Current hike miles: 0.2</li>
                <li>Total miles: 4.2</li>
                <li>Total trails: 1</li>
                <li>Parks visited: 0</li>
                <li>Badges collected: 2</li>
                <li>Collectibles found: 3</li>
            </ul>
        </div>
    );
}
