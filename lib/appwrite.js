import { Client, Databases } from "react-native-appwrite";
import { Platform } from "react-native";

const config = {
    endpoint: "https://cloud.appwrite.io/v1",
    projectId: "6785ca500034036ebed1",
    db: "prod",
    col: {
        tasks: "tasks",
    },
};

console.log(config);

const client = new Client()
    .setEndpoint(config.endpoint)
    .setProject(config.projectId);

switch (Platform.OS) {
    case "ios":
        client.setPlatform("com.dennis.todo");
        break;
    // case 'android':
    //     client.setPlatform("com.dennis.todo");
}

const database = new Databases(client);

export { database, config, client };
