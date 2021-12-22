import { PreviewRuntime } from '@teambit/preview';
import { ReactNativeAspect, ReactNativePreview } from '@teambit/react-native';
import { ThemeCompositions } from '@company/scope.theme.theme-compositions';
import { MyReactNativeAspect } from './my-react-native.aspect';

export class MyReactNativePreviewMain {
  static runtime = PreviewRuntime;

  static dependencies = [ReactNativeAspect];

  static async provider([reactNative]: [ReactNativePreview]) {
    const myReactNativePreviewMain = new MyReactNativePreviewMain();
    // register a new provider to wrap all compositions using this environment with a custom theme.
    reactNative.registerProvider([ThemeCompositions]);

    return myReactNativePreviewMain;
  }
}

MyReactNativeAspect.addRuntime(MyReactNativePreviewMain);
