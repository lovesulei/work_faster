export {};

declare global {
  interface Window {
    electronAPI?: {
      closeApp: () => void;
    };
  }
}