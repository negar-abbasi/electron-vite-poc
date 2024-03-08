declare global {
    // eslint-disable-next-line no-unused-vars
    interface Window {
      electronAPI: {
        openFile: () => Promise<string>;
      };
    }
  }
  
  export {};