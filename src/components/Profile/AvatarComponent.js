import React from "react";
import { Avatar } from "react-native-elements";

export default AvatarComponent = (props) => {
  const { size, uri } = props;

  return (
    <Avatar
      size={size}
      rounded
      source={{
        uri: uri,
      }}
      title="Bj"
      containerStyle={{ backgroundColor: "grey" }}
    >
      <Avatar.Accessory size={23} />
    </Avatar>
  );
};
