exports.index = function(req, res) {
  let content = {
    banners: [
      {
        image: 'http://placehold.it/1440x640?text=Image+1'
      },
      {
        image: 'http://placehold.it/1440x640?text=Image+2'
      },
      {
        image: 'http://placehold.it/1440x640?text=Image+3'
      },
      {
        image: 'http://placehold.it/1440x640?text=Image+4'
      }
    ],
    news: [
      {
        id: 1,
        title: 'Lorem ipsum dolor sit amet.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet, itaque mollitia pariatur, eius ab omnis quasi ipsa! Numquam facilis, commodi ipsam ducimus quae totam perferendis voluptatibus? Dolor, dicta aliquam.',
        image: 'http://placehold.it/300x200'
      },
      {
        id: 2,
        title: 'Lorem ipsum dolor sit amet.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quos perspiciatis assumenda laborum corporis vitae, numquam eius in praesentium sed natus neque exercitationem odit possimus quis, laudantium minus reiciendis aliquid!',
        image: 'http://placehold.it/300x200'
      },
      {
        id: 3,
        title: 'Lorem ipsum dolor sit amet.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptatibus deleniti necessitatibus quaerat, officia pariatur quod est a corrupti explicabo quia, consequatur nesciunt odio culpa quis expedita atque enim iure.',
        image: 'http://placehold.it/300x200'
      }
    ]
  }
  res.render('home/main.twig', content)
}