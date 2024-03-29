import React from 'react'; 
import FormControlLabel from '@material-ui/core/FormControlLabel'; 
import Checkbox from '@material-ui/core/Checkbox'; 
import Favorite from '@material-ui/icons/Favorite'; 
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'; 
  
const LikeButton = ({likeClicked, likedAlready}) => { 

  return ( 
          <FormControlLabel 
              control={<Checkbox icon={<FavoriteBorder />}  
              checkedIcon={<Favorite />}
              name="checkedH" />}
              checked={likedAlready}
              onClick={likeClicked} 
          />
  ); 
} 
  
export default LikeButton;