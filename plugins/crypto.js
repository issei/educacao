export default ({ app }, inject) => {
    // Inject $sha256(msg) in Vue, context and store.
    inject('sha256', message => {
        return new Promise((resolve, reject) => {
            console.log(`sha256 ${message}!`);
            // encode as UTF-8
            const msgBuffer = new TextEncoder().encode(message);
            // hash the message
            crypto.subtle.digest('SHA-256', msgBuffer).then((hashBuffer) => {
                // convert ArrayBuffer to Array
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                // convert bytes to hex string                  
                const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
                resolve(hashHex);
            });
        });
    });
}