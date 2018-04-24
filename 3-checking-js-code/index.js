/**
 * By creating a `tsconfig.json` file with the following options, we can get 'free' typechecking on plain JavaScript without introducing a transpilation step:
 * 
 * ```
 *   "allowJs": true,
 *   "checkJs": true,
 *   "noEmit": true,
 * ```
 */
function printTimestamp() {
    var now = new Date();
    console.log('Current timestamp is ' + Math.floor(now / 1000));
}

printTimestamp();