import { Client, Account } from "react-native-appwrite";
import { Platform } from "react-native";

const client = new Client()
    .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID);

switch (Platform.OS) {
    case "ios":
        client.setPlatform(process.env.EXPO_PUBLIC_APPWRITE_BUNDLE_ID);
        break;
    case "android":
        client.setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PACKAGE_NAME);
        break;
}

const account = new Account(client);

export { account };
