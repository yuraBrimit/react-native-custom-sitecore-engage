# React-native Sitecore Engage
Cloned library for supporting react-native applications. All @sitecore/engage functionality stay as it is, but made some change s with (get/set) cookie properties

&copy; Sitecore Corporation A/S. All rights reserved. Sitecore&copy; is a registered trademark of Sitecore Corporation A/S.

Sitecore Engage is a JavaScript library for sending behavioral data from a web application to Sitecore CDP.

## Prerequisites
Before installing Sitecore Engage, you need:
- Node.js and npm.
- A mobile application.
  > **Note**
  > A Sitecore JavaScript Rendering SDK (JSS) Next.js application with the [`nextjs-personalize`](https://doc.sitecore.com/xmc/en/developers/xm-cloud/the-next-js-personalize-add-on.html) add-on automatically installs Sitecore Engage.
- Your Sitecore CDP client key, target URL, and point of sale.

## Installation
```bash
npm install @react-native/custom-sitecore-engage
```

## Importing
```js
import { init, initAppStore } from "@react-native/custom-sitecore-engage";
```

## Usage
This section describes using Sitecore Engage in a Next.js web application.

1. In the `App` function, create an asynchronous function `loadEngage` for loading the Engage API, then call `loadEngage` in an Effect Hook.
> **Tip**
> We recommend that you use the Effect Hook because the `window` object must be present before you load the Engage API.
```js
export default function App() {
    const loadEngage = async () => {
        // Init appStore
        initAppStore({your_app_store}) // Must contain functions browserId & setBrowserId!!!
        // Load Engage API
        const engage = await init({
            clientKey: "{client_key_PLACEHOLDER}", // for example, "ZpHxO9WvLOfQRVPlvo0BqB8YjGYuFfNe"
            targetURL: "{stream_api_target_endpoint_PLACEHOLDER}", // for example, "https://api-engage-eu.sitecorecloud.io"
            cookieDomain: "{cookie_domain_PLACEHOLDER}", // for example, ".beta.myretailsite.com"
            cookieExpiryDays: 365,
            forceServerCookieMode: false
        });

        // Send VIEW events
        engage.pageView({
            channel: "{channel_PLACEHOLDER}", // for example, "WEB"
            currency: "{currency_PLACEHOLDER}", // for example, "EUR"
            pos: "{point_of_sale_PLACEHOLDER}" // for example, "myretailsite/ireland"
        });
    };
    
  useEffect(() => {
    loadEngage();
  }, []);

  return (
    <></>
  );
};
```

4. Reload your application. Every time your app init, a VIEW event is sent to Sitecore CDP.

## Documentation and community resources

- [Official JSS documentation](https://doc.sitecore.com/xp/en/developers/hd/201/sitecore-headless-development/sitecore-javascript-rendering-sdks--jss-.html)
- [StackExchange](https://sitecore.stackexchange.com/)
- [Community Slack](https://sitecorechat.slack.com/messages/jss)
- [Sitecore Community Forum](https://community.sitecore.net/developers/f/40)

## Contributions

We are very grateful to the community for contributing bug fixes and improvements. We welcome all efforts to evolve and improve Sitecore Engage; read below to learn how to participate in those efforts.

### [Code of Conduct](CODE_OF_CONDUCT.md)

Sitecore has adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text](CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

### [Contributing Guide](CONTRIBUTING.md)

Read our [contributing guide](CONTRIBUTING.md) to learn about our development process, how to propose bug fixes and improvements, and how to build and test your changes to React.

### License

Sitecore JavaScript Services is using the [Apache 2.0 license](LICENSE.MD).

## [Support](SUPPORT.md)
