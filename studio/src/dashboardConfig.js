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
                  buildHookId: '5e500ab7ee454fdedbf92e81',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-te9d9de3',
                  apiId: 'fd155524-ff1f-43d3-bc22-eed806a29bca'
                },
                {
                  buildHookId: '5e500ab7051f08ce3aabe4e6',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-rc4ybsdg',
                  apiId: 'c9d1e4eb-d176-4407-95dc-e61ae69b9140'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bichan17/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-rc4ybsdg.netlify.com', category: 'apps' }
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
