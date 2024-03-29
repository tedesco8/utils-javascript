export const decodeToken = (token) => {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''));

    return JSON.parse(jsonPayload);
}

export const encrypt = (publicKey, data, algorith = "RSA-OAEP") => {
    let encoded = new TextEncoder();
    encoded.encode(data)
    return window.crypto.subtle.encrypt(
        {
            name: algorith,
        },
        publicKey,
        encoded,
    );
}