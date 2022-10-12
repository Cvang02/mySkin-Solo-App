function ImageItem({image}){

    return(
        <li>
            <img src={image.image_url} />
            <p>{image.description}</p>
            <p>{image.inserted_at}</p>
        </li>
    )
} // END OF ImageItem.

export default ImageItem;