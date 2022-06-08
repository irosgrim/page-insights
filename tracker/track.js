const BASE_URL = "http://localhost:3000";
const CLIENT_ID = "my-unique-client-id";
const {
    screen: { width, height },
    navigator: { language, userAgent },
    location: { hostname, pathname, search }
} = window;

const post = async (url, data, clientId) => {
    const opts = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        }
    };
    if (clientId) {
        opts.headers["client-id"] = clientId;
    }
    await fetch(url, opts);
};

const track = async (params, type = "page-view", clientId = CLIENT_ID) => {
    post(
        `${BASE_URL}/analytics`,
        {
            type: type,
            payload: {
                ...params
            },
        },
        clientId,
    );
}

const getTaggedElement = (event) => {
    const target = event.target.dataset.analytics || null;
    return target;
}

const handleClickOnTaggedElements = (event) => {
    const tagName = getTaggedElement(event);
    if (tagName) {
        track(
            {
                tagName,
            },
            "event",
        );
    }
}

const trackEventsByTag = () => {
    document.addEventListener('click', handleClickOnTaggedElements);
}

const startTracking = () => {
    const screenSize = `${width}x${height}`;
    const currentReferrer = document.referrer;
    const params = {
        screenSize, 
        systemLanguage: language, 
        userAgent, 
        hostname, 
        pathname, 
        search, 
        referrer: currentReferrer,
    }

    track(params, "page-view");
    trackEventsByTag();
}

startTracking();