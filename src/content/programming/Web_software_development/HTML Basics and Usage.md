---
Title: HTML Basics and Usage
Date: 06/21/2023
Author: Sulav Jung Hamal
BookAuthor: Sulav Jung Hamal
Type: Class
Class: websoftwaredevelopment
slug: htmlBasicsandUsage
Genera: Data Science 
Status: Planning 🔗
Due_Date: 06/21/2023
Description: HTML (Hypertext Markup Language) is an essential language for building and structuring web pages. It serves as the foundation of the World Wide Web, enabling developers to create content, define layout, and add interactivity to webpages. Learn More!
Tag:
  - class
---


# Hi There, 
**HTML(Hyper Text Markup Language)** is the entry point to the realm of programming for most of us. I've had the pleasure of utilizing HTML to construct numerous websites in the past before even understanding it, and you may have done so as well. It's a **powerful tool that allows us to create various structures on the web**. However, beyond its surface-level functionality, HTML holds **semantic value**, and each tag carries specific meaning and purpose.

By delving deeper into the concept of HTML, we can uncover its true significance and harness its potential to create meaningful and impactful web experiences. In this note, we will explore the fundamental concepts of HTML, its core structure, and the significance of semantic tags. So, let's embark on a journey to unravel the concept of HTML, understanding its purpose, and harnessing its capabilities to craft compelling digital experiences. 

# HTML History
HTML was created in **1991 by Tim Berners-Lee**, and its development during the 1990s was overseen by the **World Wide Web Consortium (W3C)**. Versions 1 through 4 of HTML were introduced during this period, enabling the efficient rendering of web pages. However, websites at that time primarily consisted of static, non-interactive content.

In the early 2000s, W3C recommended XHTML, an XML-based markup language that extended HTML's capabilities. Meanwhile, the **Web Hypertext Application Technology Working Group (WHATWG) emerged in 2004** with the aim of further developing HTML to support the dynamic nature of the modern web. This development, however, ensured backward compatibility with existing HTML code.

Between 2004 and 2006, major browser developers and eventually W3C expressed their support for the WHATWG project while simultaneously working on their own XHTML endeavors. **In 2008, the initial draft of HTML5 was released** by WHATWG. Eventually, in 2012, W3C and WHATWG decided to split the development of HTML5, with W3C focusing on establishing a definitive standard while WHATWG continued to make ongoing improvements. **Finally, in 2014, W3C released the official standard for HTML5.** 

---
# Structure of HTML
Understanding the structure and syntax of HTML is crucial for effectively programming well-organized web pages. You can think of a HTML page as a box that has different shapes of boxes inside and those different shapes of boxes could have other different shapes of boxes. 

Let's take a closer look at the structure of HTML elements. For example: 
```html
<p> this is paragraph tag </p>
```

For instance, the `<p>` element represents a paragraph. It consists of an opening tag `<p>` and a closing tag `</p>`. Most HTML elements follow this pattern of having both an opening and closing tag. The opening tag is denoted by `<` followed by the element name, and the closing tag has `</` followed by the element name. The content of an element is placed between the opening and closing tags and can include other elements.

Let's take a close look at another type of HTML elements. For example: 
```html
<br/>
```

In HTML, there are also **empty elements** that don't require a closing tag. These elements, such as the line break element `<br />`, serve specific purposes but do not contain any content. It's important to note that including the closing slash `/` in **empty elements** is recommended for clarity and consistency. Examples of other empty elements include `<img>`, `<link>`, and `<meta>`.

---
# HTML Basic Terminology
These are some of the terminology that you might encounter in your work place when you have to deal with the HTML files or you are working as Front-End Developer. 
## 1. Tags:
Tags are the building blocks of HTML and are used to define elements within an HTML document. They are enclosed in angle brackets (`< >`) and can be either opening tags or closing tags. Opening tags denote the beginning of an element, while closing tags represent the end. For example:
```html
<p>This is a paragraph.</p>
```

## 2. Block Elements:
Block elements are HTML elements that create a block-level structure in the document. They typically start on a new line and take up the full width available. Some common block elements include headings, paragraphs, divs, and lists. For example:
```html
<h1>This is a heading</h1>
<p>This is a paragraph.</p>
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

## 3. Inline Elements:
Inline elements are HTML elements that are contained within block-level elements and do not create a new line. They occupy only the space needed for their content. Examples of inline elements include links (`<a>`), spans (`<span>`), and emphasis (`<em>`). For example:
```html
<p>This is a <a href="https://example.com">link</a> within a paragraph.</p>
<p><span style="color: red;">This text is styled inline.</span></p>
```

## 4. Attributes:
Attributes provide additional information or modify the behavior of HTML elements. They are added to the opening tag of an element and consist of a name-value pair. Common attributes include `class`, `id`, `src`, and `href`. For example:
```html
<img src="image.jpg" alt="Image description">
<a href="https://example.com" class="btn">Click me</a>
```

---
# Most Commonly Used Tags
There are many tags that are used for different purposes. Tags are fairly simple if you know their semantic meaning and use cases. There are tags that visually appear similar but have different meanings when used in the wrong place. So, it is important to have at least a basic idea of where and how you can use certain tags. The nicest thing about tags is that there aren't that many of them, and their names themselves give us a basic understanding of where and how they are supposed to be used. Here is the list of the most commonly used tags. 

## 1. Starting Tags:
These are the tags that are the starting point of the html document. 

| Syntax                 | Description                                                                                     |
|------------------------|-------------------------------------------------------------------------------------------------|
| `<!DOCTYPE>`           | Defines the document type and version of HTML being used.                                        |
| `<html>`               | Represents the root element of an HTML document.                                                 |

## 2. In the HTML Tag:
The HTML tag represents the root element of an HTML document. It consist of two tags in most cases and those are: 

| Syntax                 | Description                                                                                     |
|------------------------|-------------------------------------------------------------------------------------------------|
| `<head>`               | Contains metadata and other document-level information.                                          |
| `<body>`               | Represents the content of an HTML document visible to the user.                                  |

## 3. In the Head Tag:
The Head tag holds all the information about the webpage.

| Syntax                 | Description                                                                                     |
|------------------------|-------------------------------------------------------------------------------------------------|
| `<title>`              | Defines the title of the document displayed in the browser's title bar or tab.                   |
| `<meta>`               | Provides metadata about the HTML document, such as character encoding and viewport settings.     |
| `<link>`               | Specifies external resources, such as CSS stylesheets or favicons.                               |
| `<style>`              | Defines inline or embedded CSS styles for the document.                                          |
| `<script>`             | Embeds or references external JavaScript code.                                                   |

## 4. In the Body Tag:
The content displayed on a webpage is contained within the `<body>` tag. Within this tag, we typically find sections such as the header, navigation bar, articles, sections, and footer. These sections are commonly found in various websites, providing a familiar structure for users as they navigate through different webpages.

| Syntax                 | Description                                                                                     |
|------------------------|-------------------------------------------------------------------------------------------------|
| `<header>`             | Represents the introductory content or a group of introductory content.                         |
| `<nav>`                | Defines a section of navigation links.                                                           |
| `<article>`            | Represents an independent, self-contained piece of content.                                      |
| `<section>`            | Represents a standalone section within a document.                                               |
| `<footer>`             | Represents the footer of a document or a section.                                                |

## 5. Other HTML Tags:
The following list consists of tags that can be used within the aforementioned sections in the body. These tags play a crucial role in creating the actual content within an HTML document or webpage. For instance, the `<h1>` tag is used to create headings, while the `<p>` tag is utilized to generate paragraphs. As you can observe in the table below, it was constructed using the `<table>` tag, and the content within the table was defined using `<td>`, `<th>`, and `<tr>` tags. When encountering forms on different websites, they are typically created using the `<form>` tag, and the input fields where users can enter information are generated using the `<input>` tag.

| Syntax                 | Description                                                                                     |
|------------------------|-------------------------------------------------------------------------------------------------|
| `<h1>` to `<h6>`       | Defines six levels of headings, with `<h1>` being the highest and `<h6>` being the lowest.        |
| `<p>`                  | Represents a paragraph of text.                                                                  |
| `<br>`                 | Inserts a single line break.                                                                     |
| `<hr>`                 | Represents a thematic break between paragraphs or sections.                                      |
| `<div>`                | Defines a division or a container that groups other elements.                                    |
| `<span>`               | Provides a way to style or manipulate inline elements.                                           |
| `<a>`                  | Creates a hyperlink to another webpage or resource.                                              |
| `<img>`                | Embeds an image into the document.                                                               |
| `<ul>`                 | Defines an unordered (bulleted) list.                                                            |
| `<ol>`                 | Defines an ordered (numbered) list.                                                              |
| `<li>`                 | Represents a list item within `<ul>` or `<ol>` elements.                                         |
| `<table>`              | Represents tabular data.                                                                         |
| `<tr>`                 | Defines a row within a table.                                                                    |
| `<th>`                 | Defines a header cell within a table.                                                            |
| `<td>`                 | Defines a data cell within a table.                                                              |
| `<form>`               | Creates a form for user input.                                                                   |
| `<input>`              | Represents an input field within a form.                                                         |
| `<button>`             | Creates a clickable button.                                                                      |
| `<label>`              | Associates a label with an input element.                                                        |
| `<select>`             | Creates a drop-down list or combo box.                                                           |
| `<option>`             | Defines an option within a `<select>` element.                                                   |
| `<textarea>`           | Defines a multi-line text input control.                                                         |
| `<aside>`              | Defines content

These are the list of all the tags that I use in my day to day life of coding and writing these notes. Are these all of the tags? No, there are many more tags which you can learn about in the [MDN Web Docs website](https://developer.mozilla.org/en-US/docs/Web/HTML/Element). 

---
# HTML 5: Few Special Feature in it. 
Lastly, I wanted to talk a little about the **HTML5** and how it is different than HTML 4. **HTML5**, the latest version of HTML, introduced several significant features and improvements that enhance web development and provide a more powerful and versatile platform for creating web applications. Here are a few key points about HTML5:

1. **Interoperability**: HTML5 aims to achieve true interoperability by aligning web content, browsers, and specifications on well-defined behaviors. This ensures consistent rendering and functionality across different platforms and browsers, promoting a standardized web experience.
    
2. **Error Handling**: HTML5 provides clear guidelines for how browsers should handle invalid markup. Unlike XML, where rendering stops upon encountering errors, HTML5 specifies error handling procedures to ensure consistent generation of the Document Object Model (DOM) across all browsers.
    
3. **Web Applications**: HTML5 expands the capabilities of web applications. It introduces new DOM APIs that enable advanced features such as drag and drop, server push events, drawing capabilities, video integration, and more. These APIs are exposed to JavaScript, empowering developers to create robust and interactive web applications.
    
4. **Backward Compatibility**: HTML5 is designed as a superset of HTML4, ensuring backward compatibility with existing web content. It defines rules for processing legacy tags, allowing them to be processed while encouraging the use of modern HTML5 features. This approach ensures a smooth transition and support for existing web content while enabling the adoption of new standards.
    

By incorporating these features, HTML5 promotes standardized behavior, enhances error handling, enables the development of advanced web applications, and ensures compatibility with existing content. It represents a significant milestone in the evolution of HTML, providing a solid foundation for building modern and interactive web experiences.

---
# Conclusion: 
In summary, this article has covered the basics of HTML, including its structure, syntax, and the importance of semantic tags. To delve deeper into HTML, an elaborated version and a comprehensive cheat sheet with major tags, use cases, and examples are available. By further exploring these resources, you can enhance your understanding of HTML and become proficient in creating well-structured web content.

---
