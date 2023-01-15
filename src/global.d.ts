export {}

declare global {
    interface Window {
        api : {
            saveTextFile (text: string): Promise<string>;
            loadTextFile (): Promise<string>;
        }
    }
}