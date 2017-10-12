const news = [
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
  },
  {
    id: 4,
    title: 'Lorem ipsum dolor sit amet.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis quos recusandae, sint aliquid adipisci, fugiat voluptatibus aperiam laborum nihil perferendis quis ipsam reiciendis libero eius. Iste animi perferendis quidem perspiciatis.',
    image: 'http://placehold.it/300x200'
  },
  {
    id: 5,
    title: 'Lorem ipsum dolor sit amet.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat nesciunt, numquam vero perferendis veritatis in excepturi similique accusantium adipisci tempora atque dicta dolorem temporibus maiores. Nobis voluptate omnis nihil labore.',
    image: 'http://placehold.it/300x200'
  },
  {
    id: 6,
    title: 'Lorem ipsum dolor sit amet.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus sint officiis porro pariatur, sequi eveniet corporis illo amet ratione aperiam vero unde doloribus quibusdam, debitis! Rem impedit, quibusdam itaque ea.',
    image: 'http://placehold.it/300x200'
  }
]

exports.index = function(req, res) {
  let content = {
    news: news
  }

  res.render('news/main.twig', content)
}

exports.show = function(req, res) {
  let params = req.params

  let content = {
    news: news.find(function(item) {
      return item.id == params.id
    })
  }

  res.render('news/detail.twig', content)
}