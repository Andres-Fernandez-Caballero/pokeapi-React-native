import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PokeapiComponent } from "./components/PokeapiComponent";
import { Appbar } from "react-native-paper";
import { Platform } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export default function App() {
  const urlPokeapi = "https://pokeapi.co/api/v2/pokemon";
  const loader = <Text>loader</Text>;
  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Title" subtitle={"Subtitle"} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
      </Appbar.Header>
      <Card>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={LeftContent}
        />
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
      <PokeapiComponent apiUrl={urlPokeapi} loader={loader} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
