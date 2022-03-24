import React from "react";

import { Button } from "react-native-elements";

export default function ButtonComponent(props) {
  const { title, onPress } = props;
  return (
    <Button
      title={title}
      buttonStyle={{ backgroundColor: "#E31E0E" }}
      containerStyle={{
        width: 200,
        marginHorizontal: 50,
        marginVertical: 10,
      }}
      titleStyle={{ color: "white", marginHorizontal: 20 }}
      onPress={onPress}
    />
  );
}
