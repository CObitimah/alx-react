
rts = {
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "dashboard/jest-config/file-mock.js",
        "\\.(css|sass)$": "identity-obj-proxy",
    },
    "testEnvironment": "jsdom",
};
