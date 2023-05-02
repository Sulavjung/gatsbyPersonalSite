---
Title: How to use templates in Django project?
Date: 2023/05/02
Author: Sulav Jung Hamal
BookAuthor: Sulav Jung Hamal
Type: 🎒 Dev
slug: how_to_use_templates_in_django_project
Genera: Data Science
Status: Draft
Due_Date: 05/05/2023
Cover_Image: https://source.unsplash.com/uL1TI7xyLHQ/1320x400
Tag:
- Django
- Web Development
- Templates
- Article
---
Django is a popular Python web framework that provides many features for building scalable web applications. One of its key features is its built-in templating engine, which allows developers to separate the application's logic from its presentation layer. This article will explain how to use templates in a Django project, including how to create and render templates.

# What is a template in Django?

A template in Django is a file that contains the HTML markup and other presentation logic that is used to generate the final output that is sent to the user's browser. Templates are used to separate the application's logic from its presentation layer, making it easier to maintain and update the application's user interface.

# Steps
## 1. Create Templates Folder
Create a `templates` directory in each of your application's root directory. If it already exists, skip to the next step. 
   ```js
   ##create the templates directory
   mkdir templates

   //Your File structure. 
   root directory
	   myapp/ 
		   templates/
```
## 2. Relative Path to setting.py
Once you've created a template folder inside each app, you'll need to tell Django where to find these templates. To do this, you'll need to add the relative path to the template directory to the `settings.py` file for your Django project. Here's how:
1.  Open the `settings.py` file for your Django project.
2.  Scroll down to the `TEMPLATES` section. This is where you'll configure the settings for your project's templates.
3.  Find the `DIRS` option within the `TEMPLATES` section. This option is a list of directories where Django looks for templates.
4.  Add the relative path to your app's template folder to the `DIRS` list like this: 
   ```js
   TEMPLATES = [
    {
        # other options here...
        'DIRS': [
            'appname/templates',
        ],
    },
]
```
5. With this configuration, Django will now look for templates in the `appname/templates` direrctory when rerndering views that belong to the `app` with `appname` here. 
## 3. Create Template File
Once you've created the template folder and configured the settings for your Django project, you're ready to create templates that can be used to render web pages. In this section, we'll look at how to create a simple template file and how to use context to pass data from a view to a template.

To create a template file, you'll need to create a new HTML file in your app's template directory. For example, if your app is named `myapp`, you would create a file named `my_template.html` in the `myapp/templates` directory.

Here's an example of a simple template file that uses context to display a message:
```js
<!DOCTYPE html>
<html>
<head>
    <title>{{ page_title }}</title>
</head>
<body>
    <h1>Hello, {{ name }}!</h1>
    <p>{{ message }}</p>
</body>
</html>
```
In this example, we've created a basic HTML file that includes three placeholders for data that will be passed in from a view:
-   `{{ page_title }}`: This will be replaced with the title of the web page.
-   `{{ name }}`: This will be replaced with the name of the user.
-   `{{ message }}`: This will be replaced with a message that will be displayed on the web page.
Notice that we are using two curly barces for the context variables. 

## 4. Create View to Render Template Files
Once the template folder has been set up and the path to it has been added to `settings.py`, the next step is to create a view that will render the template files. 
There are multiple ways to render the template files in django. But one common and my favourite way to do it is:
```js
from django.template.loader import render_to_string
from django.http import HttpResponse

def example_view(request):
    context = {
        'message': 'Hello, World!',
        'author': 'Anonymous',
    }
    rendered_html = render_to_string('example.html', context=context)
    return HttpResponse(rendered_html)
```
Here, we're using the `render_to_string` function from `django.template.loader` to render the `example.html` template. This function takes two arguments: the name of the template file (in this case, `'example.html'`), and a dictionary of context variables to be used in the template.

The `context` dictionary in this example contains two key-value pairs: `'message': 'Hello, World!'` and `'author': 'Anonymous'`. These variables can be accessed in the template using Django's template language.

Once the template has been rendered, we return it as an `HttpResponse` object. This will display the template in the user's browser when they navigate to the URL associated with the view.

# Conclusion
This article provides a beginner-friendly guide on how to use templates in a Django project. It covers the definition of templates in Django, the necessary steps to create a template folder, how to add the relative path to the setting.py file, creating a template file, and rendering the template file using context. By following these steps, developers will be able to create templates in Django and use them appropriately, making it easier to maintain and update their application's user interface. However, it's worth noting that there are many other advanced features that Django's templating engine offers, such as template inheritance, custom template tags, and filters, which are not covered in this article but are worth exploring.
