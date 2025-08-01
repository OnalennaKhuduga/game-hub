import { List, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <List>
      <ListItem height="65px">
        <SkeletonText />
      </ListItem>
    </List>
  );
};

export default GenreSkeleton;
