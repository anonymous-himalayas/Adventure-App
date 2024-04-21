import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
import bronze from '../assets/bronze.png';
import silver from '../assets/silver.png';
import gold from '../assets/gold.png';
import platinum from '../assets/platinum.png';
import diamond from '../assets/diamond.png';
import jade from '../assets/jade.png';
import ruby from '../assets/ruby1.png';

export function Badges() {
    let navigate = useNavigate();
    const backToHome = () => {
        navigate('/');
    };

    return (
        <section className="w-full h-full md:py-24 lg:py-32 bg-gray-100 -mt-20">
            <div className="md:px-6">
                <div className="flex mb-8 space-y-2 px-24 justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-wide sm:text-3xl">
                            Badges
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">
                            Earn badges and show off your progress.
                        </p>
                    </div>
                    <Button
                        variant="primary"
                        className="bg-[#1d6864] text-white w-20 hover:bg-[#2d9f99] mr-3"
                        onClick={backToHome}
                    >
                        Back
                    </Button>
                </div>
                <div>
                    <div className="flex flex-row justify-center gap-52 pt-3">
                        <div className="flex flex-col items-center gap-3">
                            <img
                                alt="Bronze Badge"
                                className="h-[4.5rem]"
                                height={100}
                                src={bronze}
                                style={{
                                    aspectRatio: '100/100',
                                    objectFit: 'cover',
                                }}
                                width={100}
                            />
                            <Badge
                                className="px-6 py-3 text-sm font-medium"
                                variant="bronze"
                            >
                                Bronze
                            </Badge>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Beginner Hiker
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <img
                                alt="Silver Badge"
                                className="w-20 h-20"
                                height={100}
                                src={silver}
                                style={{
                                    aspectRatio: '100/100',
                                    objectFit: 'cover',
                                }}
                                width={100}
                            />
                            <Badge
                                className="px-6 py-3 text-sm font-medium"
                                variant="silver"
                            >
                                Silver
                            </Badge>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Intermediate Hiker
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <img
                                alt="Gold Badge"
                                className="w-20 h-20"
                                height={100}
                                src={gold}
                                style={{
                                    aspectRatio: '100/100',
                                    objectFit: 'cover',
                                }}
                                width={100}
                            />
                            <Badge
                                className="px-6 py-3 text-sm font-medium"
                                variant="gold"
                            >
                                Gold
                            </Badge>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Advanced Hiker
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <img
                                alt="Platinum Badge"
                                className="w-20 h-20"
                                height={100}
                                src={platinum}
                                style={{
                                    aspectRatio: '100/100',
                                    objectFit: 'cover',
                                }}
                                width={100}
                            />
                            <Badge
                                className="px-6 py-3 text-sm font-medium"
                                variant="platinum"
                            >
                                Platinum
                            </Badge>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Elite Hiker
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center gap-52 pt-12">
                        <div className="flex flex-col items-center gap-3">
                            <img
                                alt="Diamond Badge"
                                className="h-20"
                                height={100}
                                src={diamond}
                                style={{
                                    aspectRatio: '100/100',
                                    objectFit: 'cover',
                                }}
                                width={100}
                            />
                            <Badge
                                className="px-6 py-3 text-sm font-medium"
                                variant="diamond"
                            >
                                Diamond
                            </Badge>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Epic Hiker
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-3 -mt-1.5">
                            <img
                                alt="Jade Badge"
                                className="w-20"
                                height={100}
                                src={jade}
                                style={{
                                    objectFit: 'cover',
                                }}
                                width={100}
                            />
                            <Badge
                                className="px-6 py-3 text-sm font-medium"
                                variant="jade"
                            >
                                Jade
                            </Badge>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Legendary Hiker
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <img
                                alt="Ruby Badge"
                                className="w-20 h-20"
                                height={100}
                                src={ruby}
                                style={{
                                    aspectRatio: '100/100',
                                    objectFit: 'cover',
                                }}
                                width={100}
                            />
                            <Badge
                                className="px-6 py-3 text-sm font-medium"
                                variant="ruby"
                            >
                                Ruby
                            </Badge>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Ultimate Hiker
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
