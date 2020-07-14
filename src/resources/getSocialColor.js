import { colors } from "../styles/themes";

const socialColorsDb = {
    facebook: colors.facebookBlue,
    instagram: colors.instagramGradient,
    twitter: colors.twitterBlue,
    youtube: colors.youTubeRed,
}

export const getSocialColor = (socialMedia) => {
    return socialColorsDb[socialMedia]
}