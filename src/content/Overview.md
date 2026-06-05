
## Blogpost
Blogs were initially just a random thought but now it is much more than that. This is the best way for me to manage them. A blog post start from the `status: Draft` and `Type: DraftBlog` while in progress as that will make sure it doesn't get uploaded during build process before it's completion. I know it is stupid that the status alone should have done that but I don't have time to fix the code just yet and this works just fine. 

To publish the blog, you have to set the status to `Completed` and type to `Blog`.

Even with that, it is necessary to have all the frontmatter properties as different properties are used across different pages for different purposes. 

> [!note]- Sample blog post frontmatter
> ```
> ---
> Title: Before & Laughter By Jimmy Carr
> Date: 2026/03/02
> Author: Sulav Jung Hamal
> BookAuthor: Jimmy Carr
> Type: DraftBlog
> slug: before-and-laughter
> Genera: Book
> Status: Draft
> Fun_Meter: Awesome
> Cover_Image: NONE
> Description: Steal from anywhere that resonates or fuels your imagination. Devour old films, new films, music, books, paintings, photographs, poems, dreams, random conversations, architecture, bridges, street signs, trees, clouds, bodies of water, light and shadows. Select only things to steal from that speak directly to your soul. If you do this, your work will be authentic. - Jim Jarmusch.
> tags:
>   - Book
> ---
> ```

	
	

![[Database.base]]