export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec48f30c2d4c98873eaeea6',
                  title: 'Sanity Studio',
                  name: 'hailey-sanity-blog-studio',
                  apiId: '8d2fc757-9d90-4c4d-9276-07acc78f96fa'
                },
                {
                  buildHookId: '5ec48f3027cd5287bb266927',
                  title: 'Blog Website',
                  name: 'hailey-sanity-blog',
                  apiId: '864e358e-fd1a-44df-8e21-7be7442a14a6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mikelnorth/hailey-sanity-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://hailey-sanity-blog.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
