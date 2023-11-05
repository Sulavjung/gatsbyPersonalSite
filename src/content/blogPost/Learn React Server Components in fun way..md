---
Title: Learn React Server Components in Fun Way.
Date: 2023/09/12
Author: Sulav Jung Hamal
BookAuthor: Sulav Jung Hamal
Type: Blog
slug: learnReactServerComponentsInFunniestWay
Genera: React
Status: Posted 🔗
Due_Date: 2023/09/12
Cover_Image: https://source.unsplash.com/UYsBCu9RP3Y/1320x400
Description: Step into the future of web development with our in-depth exploration of React Server Components (RSCs). In this enlightening article, we demystify the transformative power of RSCs and how they are reshaping the way we build web applications.
tags:
  - Article
  - React
  - React Server Components
  - Web Development
  - Components
  - Tech
  - Gatsby
  - Web Technologies
---

In the not-so-distant past, the React team unveiled the "Zero-Bundle-Size React Server Components" concept. It's like when they discovered peanut butter and jelly go together – a game-changer! Since then, the React community has been doing some virtual somersaults to understand and implement this fancy new approach.

Picture React as the superhero of user interfaces. But, like any superhero, it needed a makeover. So, React Server Components (RSC) entered the scene with a swishy cape and a mission to make our lives easier.

The latest Next.js release decided to join the "Thinking in Server Components" club. As React devs, we had to put on our thinking caps too. RSCs are the new cool kids in town, and we had to learn their secrets.

In this tutorial, we're going to dive deep into the world of RSCs. We'll unravel their mysteries, find out how they work, and discover why they're a big deal.

But first, a warning: if you're new to React, it's like trying to jump into a trampoline class without knowing how to tie your shoelaces. So, make sure you're comfortable with React basics before we take this rollercoaster ride.

## React's Superhero Origin Story

React has been the cool kid on the block for a while. It's like the Batman of web development, all about breaking things into smaller, manageable pieces – we call them "components." Just like Batman's gadgets, these components have their own superpowers – they can hold data (state) and pass it around (props).

Traditionally, these components are written in JavaScript (sorry, class components, you're old news). When your app loads, it grabs these component scripts, and voilà, you have a working app.

But, you see, even superheroes have their weaknesses. React's "Client Components" are great, but they have some quirks:

### The Layout Shift Problem

Ever noticed that annoying layout shift when a component loads? Imagine ordering a pizza and getting the dessert first. That's what happens when network calls inside components complete at different times. It's like a food delivery race where the desserts decide to go first, and the main course has to squeeze in later.

### The Network Waterfall Problem

Let's say you have a parent component and two children. The parent makes a network call, and so do the kids. But here's the kicker – the parent refuses to render until its call finishes. It's like waiting in line at the water park, and the person in front of you won't go down the slide until their ice cream melts.

### Maintainability Woes

Now, imagine your components don't make network calls, and you fetch all the data upfront. Sounds great, right? Well, what if you decide to ditch the dessert (a.k.a., a component) from your order? You might forget to throw it away, and it'll just sit there, uneaten and useless.

### Performance Troubles

React components are like magic tricks. They load on the client and perform their wizardry. But this magic show involves downloading all sorts of stuff – JavaScript, CSS, and more. It's like downloading the entire library just to read one book.

## Enter React Server Components!

So, what if we could move React components to the server? You know, give them backstage passes and let them party with the crew. Well, say hello to React Server Components!

These components have VIP access to the server. No more waiting in line for network calls or dealing with layout shifts. They're like celebrities who can fetch data backstage without bothering the audience.

With React Server Components, you can write code like this:

```js
import { dbConnect } from '@/services/mongo'
import { addCourseToDB } from './actions/add-course'
import CourseList from './components/CourseList'

export default async function Home() {
  // Get a MongoDB connection
  await dbConnect();
  // Fetch all courses from the db
  const allCourses = await courses.find();
  // No need for useState or useEffect – it's that simple!
  return (
    <main>
      <div>
        <CourseList allCourses={allCourses} />  
      </div>
    </main>
  )
}
```

Isn't that neat? No more waiting around for network calls or managing complex state and effects. It's like ordering pizza, and it magically appears at your doorstep without any hassle.

## The Catch with React Server Components

Of course, every superhero has its quirks. React Server Components can't do everything:

- They're allergic to client-side interactivity, so no event handlers or fancy React hooks.
- Browser Web APIs, like local storage or Bluetooth, are out of their league.
- For anything related to client interaction, you'll need to stick with client components.

## Using Server and Client Components Together

Your app can be a blend of server and client components. Think of it like a superhero team-up movie – server components handle the heavy lifting, while client

 components bring the interactivity.

Server components can invite client components to the party, but not the other way around. It's like inviting your friend's dog to a BBQ – it's there, but it can't host the party.

## Wait, Aren't RSCs Like SSR?

Nope, they're not the same! SSR (Server Side Rendering) is like sending a fancy invitation to your party (HTML) and then having guests (JavaScript) arrive later. RSCs are different – they're the VIPs who never leave the backstage area. SSR is for faster initial page loads, but RSCs are for handling data like a pro.

## Building a React Server Component App

In our superhero saga, we built a course list page using Next.js with RSCs and MongoDB. We won't dive deep into Next.js or MongoDB here, but we'll show you how RSCs work in action.

- Set up a data store (we chose MongoDB) and connected to it.
- Created a model for our data.
- Built a Home component with RSC magic to fetch data and print it on the server console.
- Designed a client component for user interactions (because RSCs don't do parties).
- Used both server and client components to create a harmonious web app.

Now, you can inspect your app with browser DevTools. Notice that only the components marked as "client" appear in the client bundles – the RSCs stay backstage, out of sight.

And there you have it – the superhero tale of React Server Components! They're the backstage heroes who fetch data like a breeze and make your apps shine. So, embrace the RSCs, but remember their quirks – they may not dance at the front of the stage, but they sure know how to work the crowd.

## To sum it up:

- React Server Components are like superheroes with backstage access.
- They banish network waterfalls and improve performance.
- But they can't handle client-side tricks or browser APIs.
- You can mix server and client components for a blockbuster app.

Now, armed with the power of React Server Components, and build web apps that dazzle! And if you ever need a refresher, check out this article again.
