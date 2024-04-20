import { Fragment, useState, useEffect } from 'react';
import { SparklesIcon } from '@heroicons/react/20/solid'
import { Combobox, Transition } from '@headlessui/react';
import { useTrailNameGemini } from '../hooks/useTrailNameGemini';

export function Searchbar({ trailLocationRef }) {
    const [selected, setSelected] = useState('');
    const [query, setQuery] = useState('');
    const trailNameQuery = useTrailNameGemini();

    useEffect(() => {
        if (selected !== '')
            trailLocationRef.getTrailPolylineFromName(selected);
    }, [selected]);

    return (
        <div className="flex flex-row gap-x-2">
            <Combobox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                    <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                        <Combobox.Input
                            className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                            placeholder="What trail do you want to find?"
                            displayValue={query}
                            onChange={(event) => setQuery(event.target.value)}
                        />
                        <Combobox.Button
                            className="absolute inset-y-0 right-0 flex items-center pr-2"
                            onClick={() => {
                                trailNameQuery.getTrailNameGemini(query);
                            }}
                        >
                            <SparklesIcon
                                style={{ color: '#686CF1' }}
                                className="h-5 w-5 text-gray-400"
                            />
                        </Combobox.Button>
                    </div>
                    {trailNameQuery.trailNames.length !== 0 && (
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-10">
                                {trailNameQuery.trailNames.map((name) => (
                                    <Combobox.Option
                                        key={name}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-6 pr-4 ${
                                                active
                                                    ? 'bg-teal-600 text-white'
                                                    : 'text-gray-900'
                                            }`
                                        }
                                        value={name}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${
                                                        selected
                                                            ? 'font-medium'
                                                            : 'font-normal'
                                                    }`}
                                                >
                                                    {name}
                                                </span>
                                                {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                            active
                                                                ? 'text-white'
                                                                : 'text-teal-600'
                                                        }`}
                                                    ></span>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))}
                            </Combobox.Options>
                        </Transition>
                    )}
                </div>
            </Combobox>
        </div>
    );
}
