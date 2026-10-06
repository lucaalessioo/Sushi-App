import { useCallback, useEffect, useState } from 'react';
import { fetchPiatti } from '../services/piattiApi';

/**
 * Carica i piatti dal backend in base al tipo di menu.
 * Restituisce { dishes, loading, error, reload }.
 */
const usePiatti = (orderType) =>
{
    const [dishes, setDishes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [reloadKey, setReloadKey] = useState(0);

    useEffect(() =>
    {
        const controller = new AbortController();
        setLoading(true);
        setError(null);

        fetchPiatti(orderType, controller.signal)
            .then(setDishes)
            .catch((err) =>
            {
                if (err.name !== 'AbortError')
                {
                    setError(err.message || 'Impossibile caricare i piatti');
                }
            })
            .finally(() =>
            {
                if (!controller.signal.aborted) setLoading(false);
            });

        return () => controller.abort();
    }, [orderType, reloadKey]);

    const reload = useCallback(() => setReloadKey((k) => k + 1), []);

    return { dishes, loading, error, reload };
};

export default usePiatti;
