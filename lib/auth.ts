import JWT, { SupportedAlgorithms } from 'expo-jwt';

// from hello-zero
const ZERO_AUTH_SECRET = 'secretkey';
const USER_IDS = [
    '6z7dkeVLNm',
    'ycD76wW4R2',
    'IoQSaxeVO5',
    'WndZWmGkO4',
    'ENzoNm7g4E',
    'dLKecN3ntd',
    '9ogaDuDNFx',
];

export const getJWT = () => {
    function randomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    const jwtPayload = {
        sub: USER_IDS[randomInt(USER_IDS.length)],
        iat: Math.floor(Date.now() / 1000),
    };

    const jwt = JWT.encode(jwtPayload, ZERO_AUTH_SECRET, { algorithm: SupportedAlgorithms.HS256 });

    return jwt;
};

export const getUserId = (jwt: string) => {
    const decodedJWT = jwt && JWT.decode(jwt, ZERO_AUTH_SECRET);
    const userID = decodedJWT?.sub ? (decodedJWT.sub as string) : 'anon';

    return userID;
};
