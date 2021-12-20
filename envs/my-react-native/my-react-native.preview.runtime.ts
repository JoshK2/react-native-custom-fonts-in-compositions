import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
import { ThemeCompositions } from '@company/scope.theme.theme-compositions';
import { MyReactNativeAspect } from './my-react-native.aspect';

export class MyReactNativePreviewMain {
  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider([react]: [ReactPreview]) {
    const myReactNativePreviewMain = new MyReactNativePreviewMain();
    // register a new provider to wrap all compositions using this environment with a custom theme.
    react.registerProvider([ThemeCompositions]);

    return myReactNativePreviewMain;
  }
}

MyReactNativeAspect.addRuntime(MyReactNativePreviewMain);
