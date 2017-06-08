class ImageController {

  constructor(){}

  render(){
    this.keywordSearch()
    this.artistSearch()
  }

  keywordSearch(){
    $('form#image-search').on('submit', function(event){
      event.preventDefault()
      console.log("Submitted Form!!!")
      const query = $('#query').val()
      var url = `https://api.gettyimages.com/v3/search/images?phrase=${query}`
      $('#query').val('')
      $.ajax({
        url: url,
        success: function(data){
          var lis = data.images.map(function(image){
              let uri = image.display_sizes[0].uri
              let newImage = new Image(uri, image.caption)
              let newImageView = new ImageView()
              let li = newImageView.render(newImage)
              return li
          })
          $('#images').html(lis.join(''))
        },
        headers: {
          'Api-Key': 'q8tqktcyna5whgb5ktuf49je'
        }
      })
    })
  }

  artistSearch(){
    $('form#image-author-search').on('submit', function(event){
      event.preventDefault()
      console.log("Submitted Form!!!")
      const author_query = $('#author_query').val()
      var url = `https://api.gettyimages.com/v3/search/images?artists=${author_query}`
      $('#author_query').val('')
      $.ajax({
        url: url,
        success: function(data){
          var lis = data.images.map(function(image){
              let uri = image.display_sizes[0].uri
              let newImage = new Image(uri, image.caption)
              let newImageView = new ImageView()
              let li = newImageView.render(newImage)
              return li
            })
          $('#images').html(lis.join(''))
        },
        headers: {
          'Api-Key': '63dnpue5dw2pb5ayaqw9gn2d'
        }
      })
    })
  }
}
