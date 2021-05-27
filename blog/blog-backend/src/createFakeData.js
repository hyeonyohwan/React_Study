import Post from './models/post';

export default function createFakeData() {
  const posts = [...Array(40).keys()].map((i) => ({
    title: `포스트 #${i}`,
    body:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, delectus accusantium officiis, facilis vel at corrupti exercitationem dolorem iusto voluptatem dolor assumenda voluptate doloremque praesentium quod! Provident illo tempora laudantium.',
    tags: ['가짜', '데이터'],
  }));
  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
}
