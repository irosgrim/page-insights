
export const WHITE_LIST = [
    "my-unique-client-id"
];

export const isAllowed = (uuid: string) => {
    return WHITE_LIST.includes(uuid);
}
