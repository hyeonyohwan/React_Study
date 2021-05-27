import Router from 'koa-router';
import checkLoggedIn from '../../lib/checkLoggedIn';

const posts = new Router();
const api = require('./posts.ctrl');

posts.get('/', api.list);
posts.post('/', checkLoggedIn, api.write);

const post = new Router();
post.get('/', api.read);
post.delete('/', checkLoggedIn, api.checkOwnPost, api.remove);
post.patch('/', checkLoggedIn, api.checkOwnPost, api.update);

posts.use('/:id', api.getPostById, post.routes());

export default posts;
