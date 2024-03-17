import { create } from 'zustand';

interface BookMarkStore {
  bookmarks: string[];
  initBookmarks: (id: string[]) => void;
  addBookmark: (id: string) => void;
  removeBookmark: (id: string) => void;
}

const useBookmarkStore = create<BookMarkStore>()((set) => ({
  bookmarks: [],
  initBookmarks: (id: string[]) => set({ bookmarks: id }),
  addBookmark: (id: string) =>
    set((state: BookMarkStore) => ({ bookmarks: [...state.bookmarks, id] })),
  removeBookmark: (id: string) =>
    set((state: BookMarkStore) => ({
      bookmarks: state.bookmarks.filter((_id) => _id !== id),
    })),
}));

export default useBookmarkStore;
