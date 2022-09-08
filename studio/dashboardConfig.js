export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '631974a0ade79330f40e02e0',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ofhu8uyk',
                  apiId: '575e9de3-c965-4587-91b7-3dfcb6589425'
                },
                {
                  buildHookId: '631974a0fea2012bf444c829',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-bn7rkb93',
                  apiId: '5579581d-3bc0-438c-8a5f-d4f9b61290e6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MrHappy8D/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-bn7rkb93.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
