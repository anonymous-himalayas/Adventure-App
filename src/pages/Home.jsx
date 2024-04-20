import { Map } from '../components/Map';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';

export function Home() {
    return (
        <>
            <div className="fixed w-full h-dvh">
                <Navbar />
                <div className="flex flex-row w-full h-dvh align-middle">
                    <Sidebar />
                    <div className="basis-10/12 h-dvh">
                        <div className=" w-[2] h-[650px] border-2 rounded-3xl m-4">
                            <Map />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
