/* Blog
Reuse your BlogPost class
Create a Blog class which can
store a list of BlogPosts
add BlogPosts to the list
delete(int) one item at given index
update(int, BlogPost) one item at the given index and update it with another BlogPost 
*/

class Blog{
    constructor(){
        this.BlogPosts = [];
    }
    add(blogPost){
        this.BlogPosts.push(blogPost);
    }
    delete(index){
        this.BlogPosts.splice(index , 1);
    }
    update(index, BlogPosts){
        this.blogPost[index] = BlogPosts
    }
}