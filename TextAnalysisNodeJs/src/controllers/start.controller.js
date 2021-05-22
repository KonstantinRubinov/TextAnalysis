exports.GetHtml = async function (req, res) {
    res.sendFile('index.html', { root: "./src/html" } );
}

exports.GetCss = async function (req, res) {
    res.sendFile('styles.9930899bea67a6add847', { root: "./src/html" } );
}

exports.GetFavicon = async function (req, res) {
    res.sendFile('favicon.ico', { root: "./src/html" } );
}

exports.GetMain1 = async function (req, res) {
    res.sendFile('main-es5.4847984abfb991695fad.js', { root: "./src/html" } );
}

exports.GetMain2 = async function (req, res) {
    res.sendFile('main-es2015.4847984abfb991695fad.js', { root: "./src/html" } );
}

exports.GetPolyfills1 = async function (req, res) {
    res.sendFile('polyfills-es5.3e72f985f8ecb2890235.js', { root: "./src/html" } );
}

exports.GetPolyfills2 = async function (req, res) {
    res.sendFile('polyfills-es2015.a11e6660d0794b76ba27.js', { root: "./src/html" } );
}

exports.GetRuntime1 = async function (req, res) {
    res.sendFile('runtime-es5.d6c52737d4587c65265f.js', { root: "./src/html" } );
}

exports.GetRuntime2 = async function (req, res) {
    res.sendFile('runtime-es2015.d6c52737d4587c65265f.js', { root: "./src/html" } );
}