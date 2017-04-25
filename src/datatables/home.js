export default {
  ajax: {
    url: 'https://jsonplaceholder.typicode.com/posts',
    dataSrc: ''
  },
  columns: [
    {
      title: 'Ações',
      render (data, type, row, meta) {
        return '<button class="btn btn-primary btn-xs ver-autor" data-action="ver-autor">Ver autor</button>'
      }
    },
    {
      title: 'User ID',
      data: 'userId'
    },
    {
      title: 'ID',
      data: 'id'
    },
    {
      title: 'Título',
      data: 'title'
    }
  ]
}
