import React from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

const ProjectCard = (props) => {
  return (
    <div className="m-2   border-light border-2  rounded-lg place-content-evenly">
      <Card maxW="350px"  bgColor="black" >
        <CardBody >
          <Image
            src={props.image}
            alt="Green double couch with wooden legs"
            borderRadius="2xl"
          />
          <Stack mt="6" spacing="3">
            <Heading
              size="lg"
              className="text-center text-gray-300 "
              fontFamily="mono"
            >
              {props.title}
            </Heading>
            <Text className="text-gray-400 text-lg">
              {props.description}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter className="m-auto ">
          <ButtonGroup spacing="2" className="bg-light">
            <Button variant="solid" colorScheme="">
              <a href={props.link} >View</a>
              
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
