const socialImgDb = {
    facebook: "./images/icon-facebook.svg",
    instagram: "./images/icon-instagram.svg",
    twitter: "./images/icon-twitter.svg",
    youtube: "./images/icon-youtube.svg",
}

export const getSocialImage = (socialMedia) => {
    return socialImgDb[socialMedia]
}