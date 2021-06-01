const posts = [
    { title: 'Post Başlık 1', detail: 'Post Detay 1' },
    { title: 'Post Başlık 2', detail: 'Post Detay 2' },
    { title: 'Post Başlık 3', detail: 'Post Detay 3' }
];

const listPost = () => {
    posts.map((post) => {
        console.log(post.title, post.detail);
    })
};

const addPost = (newPost) => {
    return new Promise((resolve, reject) => {
        posts.push(newPost);
        resolve(posts);
        reject("Post Gönderilemedi");
    })
};

// Promise
/*
addPost({title: 'Post Başlık 4', detail: 'Post Detay 4'})
.then(()=>{
    console.log("Posts List");
    listPost();
})
.catch((error)=>{
    console.log(error);
});
*/

// Async - Await
async function showPost() {
    try {
        await addPost({ title: 'Post Başlık 5', detail: 'Post Detay 6' });
        listPost();
    }
    catch (error) {
        console.log(error);
    }
}
showPost();