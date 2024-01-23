---
Title: What are Progressive Web Apps?
Date: 2023/11/08
Author: Sulav Jung Hamal
BookAuthor: Sulav Jung Hamal
Type: Blog
slug: whatareProgressiveWebApps
Genera: Web Development
Status: Posted 🔗
Due_Date: 2023/11/08
Cover_Image: https://source.unsplash.com/blue-red-and-green-letters-illustration-mr4JG4SYOF8
Description: Progressive Web Apps (PWAs) have emerged as a transformative force, bridging the gap between traditional web applications and native mobile apps. PWAs offer a seamless user experience, combining the best of both worlds
tags:
  - Article
  - React
  - React
  - Server
  - Components
  - Web
  - Development
  - Components
  - Tech
  - Gatsby
  - Web
  - Technologies
---

## Introduction
Web technologies are ever so changing. It is progressing in the right direction allowing people to have a better experience interacting with it. From early web applications to the latest, there have been many changes to it. Along with support for more API that can interact with the native operating systems APIs. One of the benefits of such support of APIs is directing us toward the PWAs or Progressive Web Applications. `Progressive Web Apps (PWAs)` have emerged as a transformative force, bridging the gap between traditional web applications and native mobile apps. PWAs offer a seamless user experience, combining the best of both worlds – the accessibility and reach of the web with the app-like features and capabilities of native apps.

## Understanding the Mechanics of PWAs
`PWAs` aren't any different than the web applications. They are built using the same combination of modern web technologies, including `HTML`, `CSS`, and `JavaScript`. Additionally, to run your web application as PWAs, you should have web `app manifest` and `service workers` set up in your web app. These technologies allow the browsers and the operating system to acknowledge your web applications' capability to run as PWAs. Along with that, they provide several key advantages over traditional web applications: 

### App-like installation and experience
PWAs can be installed directly onto a user's device, similar to native apps. This allows users to launch PWAs directly from their home screen or app drawer, providing a more app-like experience. It also increases the productivity of the user as they do not need to go through the browser every time. 

### Offline accessibility
The chances of an app use [ increases significantly](https://blog.google/products/chrome/chrome-dino/) if it is allowed to be used without the internet. PWAs can cache content and resources, allowing them to function even when a device is offline. This is particularly useful for scenarios where internet connectivity is unreliable or intermittent.

### Push notification
Similar to Instagram, Facebook, and other social media app notification badges and numbers on the app icon, PWAs can also have those functionalities. PWAs can send push notifications to users, providing real-time updates and engagement opportunities, similar to native apps using [Web Push Notifications API](https://developer.mozilla.org/en-US/docs/Web/API/Push_API/Best_Practices). You can also configure, timely and auto-push notifications. 

### Enhanced Performance
Users do not want to wait for the web pages to load. The lag on loading of a web page causes the same [stress as people watching a horror movie](https://blog.hubspot.com/marketing/mobile-website-load-faster). So, PWAs utilize service workers to optimize performance and provide a more responsive user experience. Also, allowing users to install your application on the home screen makes it faster to open and visit. 

## Creating a PWA from Your Existing Website
The transformation of the existing website into PWA is engineered to be as simple as possible. If you do not consider optimization (which I highly recommend), all you need is a `manifest.json` file that is linked to the home page of your web app. But, if you want to optimize your web app, here are steps to do just that: 

### Implement a web app manifest
The [web app manifest](https://web.dev/articles/add-manifest) is a JSON file that provides essential information about your PWA, such as its name, icon, start URL, and display mode. This file is responsible for defining the overall behavior and appearance of your PWA, ensuring it behaves like a native app on the user's device.

**Key elements of the web app manifest:**

- **name:** This specifies the name that will appear on the user's device, such as the app title or launcher icon.
- **short_name:** This provides a shorter version of the app name, often displayed in menus or notifications.
    
- **start_url:** This defines the URL that will be opened when the PWA is launched.
    
- **display:** This specifies how the PWA will display on the home screen, such as full-screen or with a launcher icon.
    
- **icons:** This includes multiple icon sizes for different device displays and resolutions.

Here is an example of what a `manifest.json` file looks like. Learn more[ here](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json). 
```js
{
	"short_name": "Sulav",
	"name": "Sulav Blogs",
	"icons": [ {...} ],
	"id": "sulavpwa",
	"start_url": "/",
	"background_color": "#ffffff",
	"display": "standalone",
	"theme_color": "#ffffff"
}
```

### Register a service worker
A service worker is a JavaScript script that runs in the background, enabling offline functionality, push notifications, and improved performance. It acts as an intermediary between the PWA and the web, managing network requests, caching resources, and handling offline scenarios.

### Optimize for offline usage
To ensure your PWA remains functional offline, it's crucial to identify and cache critical resources, such as HTML pages, JavaScript files, and CSS files. This involves analyzing the app's content and determining which elements are essential for providing a minimal yet usable experience even without an internet connection.

### Enhance performance
Improving the overall performance of your PWA is essential for providing a seamless and engaging user experience. This can be achieved through various techniques, such as code minification, image optimization, and content delivery networks (CDNs).


## Best Practices for Building Stellar PWAs
From my personal experience and things that I researched online, here are some of the best practices for creating exceptional PWA. 

1. **Prioritize user experience:** Design your PWA with a mobile-first approach, ensuring a seamless and intuitive experience across various devices and screen sizes.
2. **Optimize for performance:** Strive for minimal load times, smooth interactions, and efficient resource usage to provide a responsive and engaging user experience.
3. **Embrace reliability:** Ensure your PWA functions flawlessly, even under varying network conditions and unexpected interruptions.
4. **Embrace security:** Implement robust security measures to safeguard user data and protect against cyber threats.
5. **Harness the power of push notifications:** Leverage push notifications judiciously to deliver timely and relevant updates without overwhelming users.
6. **Continuously monitor and improve:** Regularly monitor your PWA's performance, user engagement, and analytics to identify areas for improvement and maintain its effectiveness.

## Useful Resources for Further Exploration

Here are some of the useful resources on the topic of Progressive Web Apps. Consider exploring these valuable resources:
- [**Web.Dev - Progressive Web Apps** ](https://web.dev/articles/what-are-pwas) 
- [**Google Developers: PWA Guide**](https://developer.chrome.com/blog/getting-started-pwa/)
- [**Mozilla Developer Network (MDN): Web App Manifest** ](https://developer.mozilla.org/en-US/docs/Web/Manifest)
- [**Microsoft Docs: Service Workers** ](https://learn.microsoft.com/en-us/dotnet/core/extensions/workers)
- [**A List Apart: Introduction to Progressive Web Apps** ](https://alistapart.com/article/writing-for-the-web/)

By embracing the principles of PWA development and adhering to best practices, you can craft a web application that delivers a truly app-like experience, captivating users and enhancing their overall engagement. Remember, PWAs are not just about technology; they are about redefining the way users interact with the web.