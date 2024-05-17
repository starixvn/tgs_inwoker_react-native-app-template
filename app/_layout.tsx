import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import React from 'react';
import { Platform , View } from 'react-native';
import { WebView } from 'react-native-webview';

/**
 * 打包連結
 * @notice 打包前再改成正式站
 * @notice 開發時網址範例 http://192.168.114.93:3000/  
 * @notice 專案內 vite.config 中 defineConfig.server.host 需設置為 true || "0.0.0.0"
 * @alias 可參考 tgs-web-nx\apps\tgs-web-t36\vite.config.ts
 * @doc vite 官方文件 https://vitejs.dev/config/server-options
 */
const url = "";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#2286DF" }}>
      {Platform.OS === "web" ? (
      <iframe src={url} height={'100%'} width={'100%'} />
    ) : (
      <View style={{ flex: 1 }}>
        <WebView
          source={{ uri: url}}
          style={{marginTop: 32, flex: 1}}
        />
      </View>
    )}
    </View>
  );
}
