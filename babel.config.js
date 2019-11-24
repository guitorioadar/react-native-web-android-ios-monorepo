module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        // '@babel/preset-typescript'
    ],
    plugins: [
        '@babel/plugin-proposal-class-properties'
    ]
};
// module.exports = function (api) {
//     api.cache(true);
//     return {
//         babelrcRoots: [
//           ".",
//           "packages/*"
//         ],
//         presets: [['module:metro-react-native-babel-preset'], ['react-app']],
//         ignore: ['node_modules/art/core/color.js'],
//         plugins: [
//             ['module-resolver', {
//                 'alias': {
//                     '^react-native$': 'react-native-web'
//                 }
//             }],
//             ['@babel/plugin-proposal-class-properties', {
//                 'loose': true
//             }]
//         ],
//     };
// };
