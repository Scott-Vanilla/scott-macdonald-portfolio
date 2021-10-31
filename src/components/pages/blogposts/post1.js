import React from "react";

import Post from "components/elements/Post";
import image1 from "assets/mask1.jpg";

const Post1 = () => {
  return (
    <Post
      title="LJMU Dissertation - Covid-19 Tracking Web Application"
      copy1="Across the course of my final year in university, I embarked on a project to standardise pandemic tracking data through the use of a web-application."
      copy2="The COVID-19 pandemic has highlighted the need for multiple administrative centres to share data with a central monitoring hub for the accumulation of this data for decision making statistics to be generated.  This project is a focus upon the technical and interactive elements of such a system, which essentially glues multiple data sources together.
      A prototype system has been evolved in this report to highlight the different technical difficulties involved with bringing data from multiple sources and source types together.  Ultimately this report concludes on the need for a flexible design to allow for the varying technical abilities of the staff at each source.
      "
      copy3="The overall outcomes of this report centre around human fault, as well as the difficulties in manipulating data in multiple formats across multiple sources. When manipulating the data in the application it was found that even though it is possible to take data from multiple sources and align them into the same JSON format to be saved, a header object is still required to be generated. Due to this, it is still required for humans to interfere in some instances which can cause discrepancies, even though some formats automatically generate the headers for the user.
      This shows that even though we can automate some processes of standardisation it requires a user to input correct/full data that is required. Furthermore, it is difficult to avoid the data being passed through human interference at any given point throughout the data’s journey. This is because humans make errors in variable/title names which can cause issues in the extraction of data.
      Another conclusion that has arisen from this project is that it is possible, although with some roadblocks and pain points, to connect and standardise data into one format. Through the use of UI Libraries, it is somewhat easy to represent and visualise the data through graphs and tables. Therefore, it would be beneficial when visualising data to use such things as UI libraries especially if the web application would be extensible and used for more than one pandemic or virus.
      "
      copy4="This blogpost was created using extracts from my report which was written by myself and submitted as a LJMU coursework/project. Please do not copy any of the content from this blogpost, this post is for personal use only."
      imgsrc={image1}
    />
  );
};

export default Post1;
