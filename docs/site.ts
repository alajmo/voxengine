export default function () {
  return {
    title: 'Voxengine',
    author: 'Samir Alajmovic',
    description: 'Voxel Engine',
    url: 'https://github.com/alajmo/voxengine',

    paths: {
      content: 'content',
      output: 'site',
      toc: './toc.md'
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

    hooks: {},
  };
}
