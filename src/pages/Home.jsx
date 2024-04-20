import { Map } from '../components/Map';

export function Home() {
    return (
        <>
            <div className="flex justify-center w-full h-full">
                <div className="w-3/4 pt-5" style={{ height: '37rem' }}>
                    <Map />
                </div>
            </div>
        </>
    );
}
