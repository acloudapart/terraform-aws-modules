// .continue/recipes/terraform-aws-webapp.ts
import { SlashCommand } from "continue-dev";

export const terraformAwsWebAppRecipe: SlashCommand = {
    name: "webapp",
    description: "Generate a complete, secure AWS web app module",
    prompt: `
    You are an expert-level Terraform AWS engineer. You will generate a complete, multi-file Terraform module for a secure, highly-available web application.

    **IMPORTANT FORMATTING RULES:**
    You MUST generate the response as a single, 'diff-like' code block.
    For each new file, you must precede its content with a 'file path header' formatted exactly like this:
    \`\`\`
    +++ path/to/the/file.tf
    (file content here)
    \`\`\`

    The user will be running this command from the root of the new, empty module directory. You MUST create all files at the root (e.g., \`+++ main.tf\`, \`+++ variables.tf\`).
    Do NOT include any other explanatory text in your response.

    **MODULE INSTRUCTIONS:**
    You will structure the module into four distinct files, following the formatting rules above.

    ### 1. \`variables.tf\` (Parameterization)
    (All your detailed steps for variables.tf remain here...)

    ### 2. \`main.tf\` (Resource Definitions)
    (All your detailed steps for main.tf remain here...)

    ### 3. \`outputs.tf\` (Usability)
    (All your detailed steps for outputs.tf remain here...)

    ### 4. \`README.md\` (Documentation)
    (All your detailed steps for README.md remain here...)
    `,
};
