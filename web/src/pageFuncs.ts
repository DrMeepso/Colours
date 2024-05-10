export function changePage(pageHash: string) {
    return () => {
        window.location.hash = pageHash;
    }
}