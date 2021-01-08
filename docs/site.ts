export default function() {
  return {
    title: 'Voxengine',
    author: 'Samir Alajmovic',
    description: 'Voxel Engine',
    url: 'https://github.com/alajmo/voxengine',

    paths: {
      public: 'assets',
      content: 'content',
      template: '/home/samir/projects/docs/themes/doc/template',
      output: 'site',
      toc: './toc.md',
      defaultTemplate: './pages/index.ts',
    },

    flags: {
      sitemap: false,
      robot: false,
    },

    serve: {
      autoreload: true,
      port: 5000,
      wsPort: 5001,
    },

    custom: {},
  };
}
