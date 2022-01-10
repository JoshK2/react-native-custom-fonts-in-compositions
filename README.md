# React Native components with custom fonts in compositions

This repo contains a number of helper components and example implementations for creating React Native components with Bit.  
This workspace is created using [React Native workspace template](https://github.com/teambit/templates/tree/main/react-native/templates) [`bit new react-native your-workspace-name`](https://bit.dev/teambit/react/react-native/~code/templates/react-workspace/index.ts).

1. A basic React Native component that render text with a custom font.  
   Created using React Native component template `bit create react-native text ` [code](https://bit.dev/teambit/react/react-native/~code/templates/react-native-component/index.ts), [read more](https://harmony-docs.bit.dev/building-with-bit/creating-components/).
2. A React component that is using as a theme component that load the custom font, this component includes two examples of loading, one with Link and the other with ttf file, [read more](https://harmony-docs.bit.dev/building-with-bit/creating-components/).  
   Created using React Native env template `bit create react-native-env my-react-native` [code](https://bit.dev/teambit/react/react-native/~code/templates/react-native-env/index.ts).
3. A custom React Native env that use the theme component to wrap the compositions of the components that are using this env.

## Start the workspace

```bash
bit install
bit compile
bit start
```

## Workspace.jsonc

Here you can see how environments are applied for the components.

```
"teambit.workspace/variants": {
    "{ui/**}": {
      // uses the custom env
      "company.scope/envs/my-react-native": {}
      // uncomment the line below if you remove the custom env and remove the line above
      // "teambit.react/react-native": {}
    },
    "{theme/**}": {
      "teambit.react/react": {}
    },
    "envs/my-react-native": {
      "teambit.harmony/aspect": {}
    }
  }
```
