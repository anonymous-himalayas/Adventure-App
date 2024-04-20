import { Map } from '../components/Map';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { useTrailLocation } from '../hooks/useTrailLocation';

import { demo_traildata } from '../assets/demo_traildata';

export function Home() {
    const trailLocation = useTrailLocation();

    return (
        <>
            <div className="fixed w-full">
                <Navbar trailLocationRef={trailLocation} />
                <div className="flex flex-row w-full h-dvh align-middle">
                    <Sidebar />
                    <div className="basis-10/12 h-full">
                        <div className=" w-[2] h-[40rem] border-2 rounded-3xl m-4">
                            {/* demo map version */}
                            <Map
                                marker={demo_traildata.center}
                                polyline={demo_traildata.coords}
                            />
                            {/* <Map
                                marker={trailLocation.center}
                                polyline={trailLocation.polyline}
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
