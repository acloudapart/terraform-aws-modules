// .continue/config.ts
import { Config } from "continue-dev";
import { terraformAwsWebAppRecipe } from "./recipes/terraform-aws-webapp"; // Import your recipe

// You can create another file for other commands and import them, too!
// import { myOtherRecipe } from "./recipes/my-other-recipe";

const config: Config = {
    // ... any other config you have
    slashCommands: [
        terraformAwsWebAppRecipe,
        // myOtherRecipe,
    ],
    // ... any other config
};

export default config;
