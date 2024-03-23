import {create} from 'zustand';

interface BookMarkStore {
    bookmarks: string[];
    initBookmarks: (id: string[]) => void;
    addBookmark: (id: string) => void;
    removeBookmark: (id: string) => void;
}

const useBookmarkStore = create<BookMarkStore>()((set) => ({
    bookmarks: [],
    initBookmarks: (id: string[]) => set({bookmarks: id}),
    addBookmark: (id: string) =>
        set((state: BookMarkStore) => {
            const newBookmarks = [...state.bookmarks, id];
            localStorage.setItem('bookmarks', newBookmarks.join(','));
            return {bookmarks: newBookmarks};
        }),
    removeBookmark: (id: string) =>
        set((state: BookMarkStore) => {
            if (!state.bookmarks.includes(id)) {
                return state;
            }
            const newBookmarks = state.bookmarks.filter((_id) => _id !== id);
            localStorage.setItem('bookmarks', newBookmarks.join(','));
            return {bookmarks: newBookmarks};
        }),
}));

export default useBookmarkStore;
