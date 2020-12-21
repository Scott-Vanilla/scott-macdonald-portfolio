import React from "react";

import Post from "components/elements/Post";
import image1 from "assets/pokemon1.png";

const Post1 = () => {
  return (
    <Post
      title="Collaboration Project: Pokedex Single Page Application Using PokeAPI"
      copy1="Over the course of the university Christmas break myself and a close friend decided to work on a few small projects to keep us programming over the holidays. The first project embarked on was the development of a Pokédex web application, a device used and known throughout the Pokémon franchise, used to give information to the user about particular Pokémon. With both of us being avid fans of the games we decided a passion project would be best to start off. Over the first few hours, we have been able to lay solid foundations for the application."
      copy2="We have used the PokéAPI (https://pokeapi.co/) to receive the data corresponding with a particular Pokémon by sending a request with the Pokémon’s name or ID Number as an endpoint parameter. The data received back is in JSON format and is mapped to a variable through the use of a useState hook after the API call is performed within a useEffect hook. There has also been a search bar incorporated, the input of which determines the endpoint parameter. Overall the application development has gone smoothly so far, the next step is to design full UI/UX designs and create a further informative manipulation of data. We are currently looking into comparing 2 Pokémon and their base stats."
      imgsrc={image1}
    />
  );
};

export default Post1;
