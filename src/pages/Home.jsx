import {
    BadgeX,
    BarChart2,
    Bookmark,
    History,
    Lightbulb,
    LockKeyholeOpen,
    Map as MapIcon,
    Sparkles,
    Scroll,
    User,
    X,
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../components/ui/accordion.jsx';
import {
    Dialog,
    DialogContent,
    DialogClose,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../components/ui/dialog.jsx';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../components/ui/dropdown-menu.jsx';
import { getTimeElapsed } from '../utils/getTimeElapsed.js';
import { Button } from '../components/ui/button.jsx';
import { Input } from '../components/ui/input.jsx';
import { Progress } from '../components/ui/progress.jsx';
import { Map } from '../components/Map.jsx';
import { useState, useEffect } from 'react';
import { useTrailLocation } from '../hooks/useTrailLocation.js';
import { useTrailNameGemini } from '../hooks/useTrailNameGemini.js';
import { useNavigate } from 'react-router-dom';
import { useTrailSuggestionGemini } from '../hooks/useTrailSuggestionGemini.js';
import badge from '../assets/silver.png';
import questList from '../assets/quests.json';

const mainColor = "#1d6864"
const accentColor = "#4ccdc6"

export function Home() {
    const [query, setQuery] = useState('');
    const [selectTrail, setSelectTrail] = useState('');
    const [selectMenuOpen, setSelectMenuOpen] = useState(false);

    const [seconds, setSeconds] = useState(0);
    const [hikeStarted, setHikeStarted] = useState(false);
    const [statsMenuOpen, setStatsMenuOpen] = useState(false);

    const trailLocation = useTrailLocation();
    const trailName = useTrailNameGemini();
    const trailSuggestion = useTrailSuggestionGemini();
    const navigate = useNavigate();

    const quests = questList.sort(() => 0.5 - Math.random()).slice(0, 3);

    useEffect(() => {
        if (selectTrail !== '')
            trailLocation.getTrailPolylineFromName(selectTrail);
    }, [selectTrail]);

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

    const toLeaderboard = () => {
        navigate('/leaderboard');
    };

    return (
        // bg-gradient-to-r from-green-200 via-green-300 to-blue-200
        <div className="flex h-screen bg-white">
            {/* Left sidebar */}
            <nav className="flex flex-col w-64 h-full px-4 py-4 bg-white border-r-2">
                <h2 className="text-2xl font-semibold text-gray-900 w-full text-center mt-1">
                    TrailQuest
                </h2>
                <div className="flex flex-col justify-between flex-1 mt-5">
                    {/* Top sidebar buttons */}
                    <aside>
                        <Button
                            className={`w-full mb-2 text-white ${
                                hikeStarted ? 'bg-rose-500' : 'bg-[#1d6864] hover:bg-[#2d9f99]                                ]'
                            }`}
                            onClick={() => setHikeStarted(!hikeStarted)}
                        >
                            {hikeStarted ? 'Stop Hike' : '+ Start New Hike'}
                        </Button>
                        <span className="flex flex-row relative">
                            <Input
                                className="tracking-tighter"
                                placeholder="What trail do you want to find?"
                                onChange={(e) => setQuery(e.target.value)}
                                onBlur={() => setSelectMenuOpen(false)}
                                onKeyDown={(e) =>
                                    e.key === 'Enter' &&
                                    trailName.getTrailNameGemini(query)
                                }
                                onFocus={() => setSelectMenuOpen(true)}
                                value={query}
                            />
                            <button
                                onFocus={() => setSelectMenuOpen(true)}
                                onClick={() =>
                                    trailName.getTrailNameGemini(query)
                                }
                            >
                                <Sparkles className="absolute right-2 top-2.5 w-5 h-5 text-gray-200 hover:text-gray-300 bg-white" />
                            </button>
                            {selectMenuOpen &&
                                trailName.trailNames.length !== 0 && (
                                    <ul className="absolute top-11 bg-white rounded-md border border-1 text-sm w-full tracking-tight py-2 shadow-lg">
                                        {trailName.trailNames.map(
                                            (name, index) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        className="hover:bg-gray-400 pl-6 py-1"
                                                        onMouseDown={() => {
                                                            setSelectTrail(
                                                                name
                                                            );
                                                            setSelectMenuOpen(
                                                                false
                                                            );
                                                        }}
                                                    >
                                                        {name}
                                                    </li>
                                                );
                                            }
                                        )}
                                    </ul>
                                )}
                        </span>
                        <ul className="space-y-2 mt-5">
                            <li>
                                <SavedRecentAccordion />
                            </li>
                            <li>
                                <SuggestionDialog
                                    trailSuggestion={trailSuggestion}
                                />
                            </li>
                            <li>
                                <p className="text-sm tracking-tighter w-56 break-words max-h-56 overflow-auto">
                                    {trailSuggestion.suggestion}
                                </p>
                            </li>
                        </ul>
                    </aside>
                    {/* Bottom sidebar buttons */}
                    <div>
                        <QuestMenu quests={quests} />
                        <div className="flex flex-col items-center">
                            <div className="w-full h-0.5 mb-3 mt-1 bg-gray-300" />
                            <img className="w-8 h-8" src={badge} />
                            <div className="text-sm font-medium text-gray-700">
                                Level 3
                            </div>
                            <Progress
                                className="w-full bg-gray-300 my-1 h-1.5"
                                value={70}
                            />
                            <span className="text-xs font-semibold text-gray-500">
                                XP (350/500)
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Top bar buttons */}
            <div className="flex-1 p-10 -mt-3">
                <div className="flex items-center justify-between">
                    <div />
                    <div className="space-x-4">
                        <Button
                            className="text-white bg-[#1d6864] hover:bg-[#2d9f99] hover:text-white"
                            variant="ghost"
                        >
                            Badges
                        </Button>
                        <Button
                            className="text-white bg-[#1d6864] hover:bg-[#2d9f99] hover:text-white"
                            variant="ghost"
                            onClick={toLeaderboard}
                        >
                            Leaderboard
                        </Button>
                        <ProfileDropdown setStatsMenuOpen={setStatsMenuOpen} />
                    </div>
                </div>
                <div className="relative mt-6">
                    <div className="w-full h-[35rem] rounded-md">
                        <Map
                            marker={trailLocation.center}
                            polyline={trailLocation.polyline}
                        />
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
                <Button className="text-white bg-[#1d6864]" variant="ghost">
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

function SavedRecentAccordion() {
    return (
        <Accordion type="single" collapsible className="w-full -mt-4">
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    <Bookmark className="text-[#1d6864] w-6 h-6 mr-2" />
                    Saved
                </AccordionTrigger>
                <AccordionContent>
                    <ul className="pl-2">
                        <li>&#x2022; Puddingstone Trail</li>
                        <li>&#x2022; Turtle Rock Creek Trail</li>
                        <li>&#x2022; Eaton Canyon Trail</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>
                    <History className="text-[#1d6864] w-6 h-6 mr-2" />
                    Recent
                </AccordionTrigger>
                <AccordionContent>
                    <ul className="pl-2">
                        <li>&#x2022; Brush Canyon Trail</li>
                        <li>&#x2022; Colby Canyon Trail</li>
                        <li>&#x2022; Appalachian Trail</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}

function SuggestionDialog({ trailSuggestion }) {
    const [query, setQuery] = useState('');

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    className="justify-start text-md -mt-2.5"
                    variant="ghost"
                >
                    <Lightbulb className="text-[#1d6864] w-6 h-6 -ml-4 mr-2" />
                    Suggestions
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Want suggestions?</DialogTitle>
                    <DialogDescription>
                        Don't know what to do or how to plan your trip? Ask us
                        for ideas on what to do doing your hike!
                    </DialogDescription>
                </DialogHeader>
                <Input
                    id="name"
                    placeholder="Ask me anything about your trip!"
                    className="col-span-3"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <DialogClose asChild>
                    <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 w-1/2"
                        onClick={() => {
                            trailSuggestion.getTrailSuggestionGemini(query);
                        }}
                    >
                        Get suggestions!
                        <Sparkles
                            style={{ color: '#686CF1' }}
                            className="ml-1 h-5 w-5 text-gray-400"
                        />
                    </button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
}

function QuestMenu({ quests }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="justify-start text-md pl-1" variant="ghost">
                    <MapIcon className="text-[#1d6864] w-6 h-6 mr-2" />
                    Quests
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-1 mr-10 w-content">
                <DropdownMenuGroup>
                    {quests.map((quest, index) => {
                        return (
                            <DropdownMenuItem key={index}>
                                <Scroll className="mr-2 h-4 w-4" />
                                {quest}
                            </DropdownMenuItem>
                        );
                    })}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
