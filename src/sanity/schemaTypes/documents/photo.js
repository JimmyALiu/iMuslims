export default {
    name: "photo",
    title: "Photo",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            validation: (Rule) => Rule.required(),
            options: {
                hotspot: true,
            },
        },
        {
            name: "role",
            title: "Role",
            type: "string",
        },
        {
            name: "major",
            title: "Major",
            type: "string",
        },
        {
            name: "year",
            title: "Year",
            type: "string",
        },
    ],
};