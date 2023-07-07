const logError = (err) => {
    
    const code = err.code;
    const message = err.message;
    const stack = err.stack;

    console.log(`ERROR CODE: ${code}`);
    console.log(`ERROR MESSAGE: ${message}`);
    console.log(`ERROR STACK: ${stack}`);

}
const log = (message) => {
    console.log(`MESSAGE: ${message}`);
}
module.exports = {
    logError,
    log
} 