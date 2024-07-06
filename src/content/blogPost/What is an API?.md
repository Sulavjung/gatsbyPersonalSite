---
Title: What is an Application Programming Interface(API)?
Date: 2023/11/07
Author: Sulav Jung Hamal
BookAuthor: Sulav Jung Hamal
Type: Blog
slug: whatisanAPI
Genera: Computer Science
Status: Posted 🔗
Due_Date: 2023/11/07
Cover_Image: NONE
Description: An API or Application Programming Interface is a software/code/rules/way that allows two application to communicate with each other. It can also be described as a document or standard that allow other to know how to communicate with your devices. It is like gate to your house. If you have keys, you can easily enter and navigate inside. Key here represents API specification or a document that describes how to use such a connection or interface.
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

An `API` or `Application Programming Interface` is a software/code/rules/way that allows two application to communicate with each other. It can also be described as a document or standard that allow other to know how to communicate with your devices. It is like gate to your house. If you have keys, you can easily enter and navigate inside. Key here represents `API specification` or a document that describes how to use such a connection or interface.

## Unique history of APIs

The history of APIs (Application Programming Interfaces) is a fascinating journey that has evolved over several decades. APIs have gone from being local tools for operating systems to becoming crucial components of the digital age, enabling remote integration of data and services. Here's a brief history of APIs based on the provided information:

1. **1940s-1950s:** The idea of API predates the word API. The concept of APIs existed as code libraries, documented in catalog form for early computers.
2. **1960s-1970s:** The term "application program interface" was [introduced](https://www.computer.org/csdl/proceedings-article/afips/1968/50720533/12OmNyRPgFZ) for consistent interaction with computer systems.
3. **1970s:** APIs were integrated into database management frameworks, supporting different interfaces.
4. **1990s:** APIs expanded with remote procedure calls and the internet.
5. **2000:** [Roy Fielding's dissertation](https://ics.uci.edu/~fielding/pubs/dissertation/top.htm) introduced REST and network-based APIs. Also, Salesforce released what many consider the first modern API. Around the same time, eBay and Amazon developed APIs that allowed developers access.
6. **2001:** Semantic APIs were proposed for open data interfaces.
7. **Broad Adoption:** Web APIs became the primary interpretation of the term API.
8. **Widespread Use:** APIs play a pivotal role in internet-based data exchange.
9. **APIs and Communication:** APIs are integral to modern internet communication, encompassing a broad range of data exchange and interactions.

## How do APIs work?

To look deep into how APIs work, let's start with an imaginary Weather application. Imagine you have a weather application on your smartphone (the client), and you want to display the current weather for your location. To do this, your weather app needs to get the latest weather data from a weather service provider's servers (the server) using their API.

1. **Request:** In this case, the `request` from your weather app would be to retrieve the current weather for your city.
2. **API Server:** The weather service provider's server has an API that offers `endpoints` for different weather-related functions. One of these endpoints is designed to provide current weather data for specific locations.
3. **Authentication:** The API server might require an `API key` that your weather app uses to identify itself to the server and access the data. The server validates this key.
4. **Processing:** The API server `processes` your request, which may involve querying its weather database for the latest weather information for your location.
5. **Response:** Once the server has collected the data, it sends a `structured response` to your weather app. This response includes the current temperature, conditions, and any other relevant weather data.
6. **Client Application:** Your weather app receives this response and displays the current weather on your screen. It may also update its database for future reference.

In this scenario, the API serves as the bridge between your weather app and the weather service provider's data. The API defines the rules for requesting and receiving weather information, ensuring that different applications can communicate effectively. It's a simplified example, but it illustrates the fundamental concept of how APIs work to enable software systems to interact and share data.
