export const parameters = {
  docs: {
    inlineStories: false,
    getContainer: async () => (await import('../../blocks')).DocsContainer,
    getPage: async () => (await import('../../blocks')).DocsPage,
    iframeHeight: 100,
  },
};
