import React from "react";
import { Image } from "@chakra-ui/react";
import image from"../its_ak.jpg"

const ProfileImage = () => {
  return (
    <Image 
      borderRadius="full"
      boxSize="300px"
      src={image}
      alt="Dan Abramov"
    />
  );
};

export default ProfileImage;
