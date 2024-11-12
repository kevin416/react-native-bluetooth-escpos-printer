// react-native-bluetooth-escpos-printer/react-native.config.js

module.exports = {
    // 依赖配置
    dependency: {
      // 平台特定配置
      platforms: {
        // Android 平台配置
        android: {
          // Android 项目源码目录
          sourceDir: './android',
          
          // Android 清单文件路径（相对于 sourceDir）
          manifestPath: 'src/main/AndroidManifest.xml',
          
          // 包导入路径，React Native 会在 MainApplication.java 中使用这个
          packageImportPath: 'import cn.jystudio.bluetooth.RNBluetoothEscposPrinterPackage;',
          
          // 包实例化代码，用于在 MainApplication.java 中注册模块
          packageInstance: 'new RNBluetoothEscposPrinterPackage()',
          
          // 构建配置
          buildTypes: {
            release: {
              // 发布版本配置
              signingConfig: 'signingConfigs.release',
            },
          },
          
          // 权限配置
          permissions: [
            'android.permission.BLUETOOTH',
            'android.permission.BLUETOOTH_ADMIN',
            'android.permission.BLUETOOTH_CONNECT',
            'android.permission.BLUETOOTH_SCAN',
            'android.permission.ACCESS_FINE_LOCATION',
            'android.permission.ACCESS_COARSE_LOCATION'
          ]
        },
        
        // iOS 平台配置
        ios: {
          // iOS 项目目录
          project: 'ios/RNBluetoothEscposPrinter.xcodeproj',
          
          // 源码目录
          sourceDir: './ios',
          
          // Pod 配置
          podspec: {
            // 库名称
            name: 'RNBluetoothEscposPrinter',
            
            // 库版本
            version: '1.0.0',
            
            // 支持的平台
            platforms: {
              ios: '12.0'
            },
            
            // 源文件
            source_files: 'ios/**/*.{h,m,mm}',
            
            // 依赖框架
            frameworks: [
              'CoreBluetooth',
              'UIKit'
            ]
          }
        }
      }
    },
    
    // 项目配置
    project: {
      ios: {
        // iOS 项目配置
        project: 'ios/RNBluetoothEscposPrinter.xcodeproj'
      },
      android: {
        // Android 项目配置
        sourceDir: './android',
        // 模块名称
        moduleName: 'react-native-bluetooth-escpos-printer',
        // 包名
        packageName: 'cn.jystudio.bluetooth',
        // 模块类名
        moduleClass: 'RNBluetoothEscposPrinterModule'
      }
    },
  
    // 资源配置
    assets: [
      // 如果有需要打包的资源文件，在这里配置
    ],
  
    // 命令配置
    commands: [
      // 自定义命令配置
    ],
  
    // Hooks 配置
    hooks: {
      // 构建前的钩子
      beforeBuild: [
        // 构建前需要执行的命令
      ],
      // 构建后的钩子
      afterBuild: [
        // 构建后需要执行的命令
      ]
    }
  };