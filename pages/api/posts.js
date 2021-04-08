import { getAllPosts } from '../../lib/api';

export default (_req, res) => {
    res.statusCode = 200;
    (async function () {
        const allPosts = getAllPosts([
            'title',
            'date',
            'slug',
            'author',
            'coverImage',
            'excerpt',
        ]);
        res.json({ name: allPosts })
        res.send()
    }());
}