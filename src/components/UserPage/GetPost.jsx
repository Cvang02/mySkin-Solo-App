// IMPORT REACT
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';

// IMPORT COMPONENT
import ImageItem from './GetPostItem.jsx';

function GetPost () {

    // USE - SELECTOR 
    const postImages = useSelector(store => store.postFeedReducer);
    // console.log('what is our data:', postImages)
    
    // DISPATCH
    const dispatch = useDispatch();

    // USE-EFFECT (DISPLAY POST LIST ON DOM)
    useEffect(()=> {

        dispatch({
            type: 'SAGA_GET_POST_LIST'
        })

    },[]);

    return(
        <ul className='post-ul'>
            {postImages.map(image => (
                <ImageItem key={image.id} image={image}/>
            ))}
        </ul>
    ) // END OF return

} // END OF GetPost

export default GetPost;