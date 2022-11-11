import { useState, useEffect } from 'react';

export default function useRequest(url: string, method = 'GET'): [any, boolean, any, () => void] {
    const [data, setData] = useState(null);
    const [err, setError] = useState(null);

    async function refetch(): Promise<void> {
        await fetch(url, {
            method,
        })
            .then(async (r) => await r.json())
            .then((r) => {
                setError(null);
                setData(r);
            })
            .catch((r) => {
                setError(r);
            });
    }

    useEffect(() => {
        refetch();
    }, []);

    if (data === null) {
        return [null, false, err, refetch];
    }
    return [data, true, err, refetch];
}