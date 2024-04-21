/**
 * v0 by Vercel.
 * @see https://v0.dev/t/spRue73XWqP
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from '../components/ui/button';
import { AvatarImage, AvatarFallback, Avatar } from '../components/ui/avatar';
import badge from '../assets/ruby.png';

export function Leaderboard() {
    return (
        <div className="flex bg-gray-100 dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8 w-full h-dvh items-center">
            <div className="w-[1000px] mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        Leaderboard
                    </h2>
                    <div className="flex items-center space-x-4">
                        <Button variant="outline">
                            <FilterIcon className="h-5 w-5 mr-2" />
                            Filter
                        </Button>
                        <Button variant="outline">
                            <ListOrderedIcon className="h-5 w-5 mr-2" />
                            Sort
                        </Button>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow overflow-hidden">
                    <table className="w-full divide-y divide-gray-200 dark:divide-gray-600">
                        <thead className="bg-[#686CF1] dark:bg-gray-800">
                            <tr>
                                <th
                                    className="px-6 py-3 text-left text-xs font-medium text-white dark:text-gray-400 uppercase tracking-wider"
                                    scope="col"
                                >
                                    Rank
                                </th>
                                <th
                                    className="px-6 py-3 text-left text-xs font-medium text-white dark:text-gray-400 uppercase tracking-wider"
                                    scope="col"
                                >
                                    Player
                                </th>
                                <th
                                    className="px-6 py-3 text-left text-xs font-medium text-white dark:text-gray-400 uppercase tracking-wider"
                                    scope="col"
                                >
                                    Level
                                </th>
                                <th
                                    className="px-6 py-3 text-left text-xs font-medium text-white dark:text-gray-400 uppercase tracking-wider"
                                    scope="col"
                                >
                                    Progress
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-700 dark:divide-gray-600">
                            <LeaderboardRow
                                rank="1"
                                player="Peter the Anteater"
                                level="5"
                                progress="bg-primary rounded-full h-2 w-[60%]"
                            />
                            <LeaderboardRow
                                rank="2"
                                player="John Smith"
                                level="4"
                                progress="bg-primary rounded-full h-2 w-[90%]"
                            />
                            <LeaderboardRow
                                rank="3"
                                player="Joe Bruin"
                                level="4"
                                progress="bg-primary rounded-full h-2 w-[35%]"
                            />
                            <LeaderboardRow
                                rank="4"
                                player="Tom the Cat"
                                level="3"
                                progress="bg-primary rounded-full h-2 w-[14%]"
                            />
                            <LeaderboardRow
                                rank="5"
                                player="Jerry the Mouse"
                                level="2"
                                progress="bg-primary rounded-full h-2 w-[73%]"
                            />
                            <LeaderboardRow
                                rank="6"
                                player="Phineas Flynn"
                                level="1"
                                progress="bg-primary rounded-full h-2 w-[42%]"
                            />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

function FilterIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
    );
}

function ListOrderedIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="10" x2="21" y1="6" y2="6" />
            <line x1="10" x2="21" y1="12" y2="12" />
            <line x1="10" x2="21" y1="18" y2="18" />
            <path d="M4 6h1v4" />
            <path d="M4 10h2" />
            <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
        </svg>
    );
}

function LeaderboardRow({ rank, player, level, progress }) {
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="font-medium text-gray-900 dark:text-gray-100">
                        {rank}
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <Avatar className="w-10 h-10 mr-4">
                        {/*  badge */}
                        {/* <AvatarImage alt="User Avatar" src={badge} /> */}
                        <img src={badge} alt="badge" className="h-10 w-10" />
                        <AvatarFallback>BO</AvatarFallback>
                    </Avatar>
                    <div>
                        <div className="font-medium text-gray-900 dark:text-gray-100">
                            {player}
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="font-medium text-gray-900 dark:text-gray-100">
                    {level}
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className={progress} />
                </div>
            </td>
        </tr>
    );
}
// === styles.css ===

// body {
//   font-family: var(--font-inter), sans-serif;
// }

// h1, h2, h3, h4, h5, h6 {
//   font-family: var(--font-inter), sans-serif;
// }

// === layout.jsx ===

// // This is the root layout component for your Next.js app.
// // Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

// import { Inter } from 'next/font/google'
// import './styles.css'

// const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-inter',
// })

// export default function Layout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.variable}>
//         {children}
//       </body>
//     </html>
//   )
// }
