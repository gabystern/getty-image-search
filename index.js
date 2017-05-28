$(document).ready(function(){
  console.log('Document ready!')

  $('form#image-search').on('submit', function(event){
    event.preventDefault()
    console.log("Submitted Form!!!")
    // make the search term dynamic at the end of the url
    const query = $('#query').val()
    var url = `https://api.gettyimages.com/v3/search/images?phrase=${query}`
    $('#query').val('')

    $.ajax({
      url: url,
      success: function(data){
        console.log(data)
        const lis = data.images.map(function(image){
          if (image.caption !== null) {
            // const caption =  `${image.caption}`
            return `<li> <img src = "${image.display_sizes[0].uri}"> <br> </li>`
          }
        })
        const caption_lis = data.images.map(function(image){
          if (image.caption !== null) {
            // const caption =  `${image.caption}`
            return `<li> ${image.caption} </li>`
          }
        })
        $('#images').html(lis.join(''))
        $('#image-details').html(caption_lis.join(''))
      },
      headers: {
        'Api-Key': 'q8tqktcyna5whgb5ktuf49je'
      }
    })
})

$('form#image-author-search').on('submit', function(event){
  event.preventDefault()
  console.log("Submitted Form!!!")
  // make the search term dynamic at the end of the url
  const author_query = $('#author_query').val()
  var url = `https://api.gettyimages.com/v3/search/images?artists=${author_query}`
  $('#author_query').val('')

  $.ajax({
    url: url,
    success: function(data){
      console.log(data)
      const lis = data.images.map(function(image){
        if (image.caption !== null) {
          // const caption =  `${image.caption}`
          return `<li> <img src = "${image.display_sizes[0].uri}"> <br> </li>`
        }
      })
      $('#image_parent_column#images').html(lis.join(''))
    },
    headers: {
      'Api-Key': 'q8tqktcyna5whgb5ktuf49je'
    }
  })
})

})
