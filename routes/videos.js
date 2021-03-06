const express = require('express');

function videosAPI(app){
    const router = express.Router();

    app.use('/api/videos', router);

    router.get('/', (req, res, next) => {
        const { tags } = req.query;

        res.status(200).json({ 
            data: [],
            tags: {tags},
            message: 'Videos listed'
         });
    });

    router.get('/:videoId', (req, res, next) => {
        const { videoId } = req.params;

        res.status(200).json({ 
            data: {videoId},
            message: 'Video information retrieved' 
        });
    });

    router.post('/', (req, res, next) => {
        res.status(201).json({
            data: {},
            message: 'Video created'
        });
    });

    router.put('/:videoId', ( req, res, next) => {
        const { videoId } = req.params;

        res.status(200).json({
            data: videoId,
            message: 'Video updated'
        });
    });

    router.delete('/:videoId', (req, res, next) => {
        const { videoId } = req.params;

        res.status(200).json({
            data: videoId,
            message: 'Video deleted'
        });
    });
}

module.exports = videosAPI;