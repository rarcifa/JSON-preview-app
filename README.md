# JSON Preview

The JSON Preview App provides a JSON preview of the entry fields whichh will be available within the web app as Entry Editor Tab or Field Button.

Locations:

-   Entry Editor
-   Field
-   Dialog 

# Installation

## Step 1 General Details

You can choose the name of your app and add the url to your app domain.

![App Installation](./assets/general.png)

## Step 2 Location

This app was build to be installed on the field level and entry editor, however, feel free to adapt it for other fields.

![App Installation](./assets/location.png)

## Step 3 Parameters

Add an instance parameter called "apiToken" as definition.

![App Installation](./assets/parameter.png)

## Step 4 Activate App

After isntalling the app, you can activate the app as a field view, or a Entry Editor tab as per below screenshot. Please make sure to ass your preview API token as your parameter.

![App Installation](./assets/editor.png)

![App Installation](./assets/token.png)

```ts
{
    id: string;
    list: [
        {
            name: string;
            value: string;
            image: string;
            category: string;
        }
    ]
}
```

*Note that the `id` property is automatically generated and useful for developers
to differentiate between different collections even if the labels are the same or similar*

An example item in the Contentful response:

```json
{
    "fields": {
        "collection": [
            {
                "name": "Luke Skywalker",
                "value": "Luke Skywalker",
                "image": "https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-luke-skywalker-16x9-xl.jpg.adapt.crop1x1.320w.jpg",
                "category": "Starwars"
            },
            {
                "name": "C-3PO",
                "value": "C-3PO",
                "image": "https://i.pinimg.com/564x/ae/cc/e5/aecce55bc3c39e0a4f9109e619a8806c.jpg",
                "category": "Starwars"
            },
            {
                "name": "R2-D2",
                "value": "R2-D2",
                "image": "https://www.space-figuren.de/images/product_images/info_images/9696_0.jpg",
                "category": "Starwars"
            }
        ]
    }
}
```

## For Developers: Running This App Locally

> This project was bootstrapped with [Create Contentful App](https://github.com/contentful/create-contentful-app).

Before running the app locally, you will need to do 2 things:
* Ensure your Contentful user is admin or developer for the organization.
* Create an [`AppDefinition`](https://www.contentful.com/developers/docs/extensibility/app-framework/app-definition/)
in your organization with the following properties:
    * The App URL: http://localhost:3000
    * An entry field location with a type of JSON Object
    * An instance parameter of type short text with the id `valueName`

Once your app definition is created, running `npm start` will start a local server on
port 3000 (http://localhost:3000).

You must create or modify a content type which has a JSON field in order to see the app
inside of the Contentful web app.

## Learn More

[Read more](https://www.contentful.com/developers/docs/extensibility/app-framework/create-contentful-app/) and check out the video on how to use the CLI.

Create Contentful App uses [Create React App](https://create-react-app.dev/). You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) and how to further customize your app.
