module.exports = {
    presets: [
        ['@babel/preset-env', { targets: { node: 16, esmodules: true } }],
        '@babel/preset-typescript',
        '@babel/preset-react',
    ],
}
