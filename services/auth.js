const sessionIdToUserMap = new Map();

export function setUserBySessionId(sessionId, user) {
    sessionIdToUserMap.set(sessionId, user);
    return sessionId;
};

export function getUserBySessionId(sessionId) {
    return sessionIdToUserMap.get(sessionId);
};
