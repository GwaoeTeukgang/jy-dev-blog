import { useEffect, useState } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(getMatches(query));

  function getMatches(query: string): boolean {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  }

  function handleChange() {
    setMatches(getMatches(query));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    handleChange();

    matchMedia.addEventListener('change', handleChange);

    return () => matchMedia.removeEventListener('change', handleChange);
  }, [query]);

  return matches;
}
