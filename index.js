$(document).ready(function(){
  console.log('Document ready!')
  keywordSearch()
  artistSearch()
})

function keywordSearch(){
  $('form#image-search').on('submit', function(event){
    event.preventDefault()
    console.log("Submitted Form!!!")
    const query = $('#query').val()
    var url = `https://api.gettyimages.com/v3/search/images?phrase=${query}`
    $('#query').val('')

    $.ajax({
      url: url,
      success: function(data){
        const lis = data.images.map(function(image){
          if (image.caption !== null) {
            return `<li> <img src = "${image.display_sizes[0].uri}"> <br>${image.caption}<br> <br></li>`
          }
        })
        $('#images').html(lis.join(''))
      },
      headers: {
        'Api-Key': 'q8tqktcyna5whgb5ktuf49je'
      }
    })
  })
}

function ArtistSearch(){
  $('form#image-author-search').on('submit', function(event){
    event.preventDefault()
    console.log("Submitted Form!!!")
    const author_query = $('#author_query').val()
    var url = `https://api.gettyimages.com/v3/search/images?artists=${author_query}`
    $('#author_query').val('')

    $.ajax({
      url: url,
      success: function(data){
        const lis = data.images.map(function(image){
          if (image.caption !== null) {
            return `<li> <img src = "${image.display_sizes[0].uri}"><br>${image.caption}<br> <br> </li>`
          }
        })
        $('#images').html(lis.join(''))
      },
      headers: {
        'Api-Key': '63dnpue5dw2pb5ayaqw9gn2d'
      }
    })
  })
}
