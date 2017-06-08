class ImageView {

  constructor(){}

  render(image){
    return `
      <li> <img src = "${image.uri}"> <br>${image.caption}<br> <br></li>
    `
  }

}
