const KoaRouter = require('koa-router')
// const GridfsStream = require('gridfs-stream')
const { createModel } = require('mongoose-gridfs')
const mongoose = require('mongoose')
const fs = require('fs')

console.log('grid fs =========>', mongoose.connection.db)


 


// const gfs = GridfsStream(mongoose.connection.db, mongoose.mongo)

const router = new KoaRouter({
    prefix: '/upload'
})

router.post('/', async (ctx) => {
    try {
        console.log('path 1')
        const files = ctx.request.files
        // const writeStream = gfs.createWriteStream({
        //     filename
        // })

        console.log('thumbnail.path =======>', files.file.size)
        console.log('thumbnail.path =======>', files.file.path)

        const readStream = fs.createReadStream(files.file.path)
        createModel().write({
            filename: 'test.dll'
        }, readStream)

    } catch (error) {
        console.log('upload error ======>', error)
    }
})

router.get('/file', async (ctx) => {
    try {
        const Attachment = createModel({
            modelName: 'Attachment',
            connection: mongoose.connection
        });

        const { id } = ctx.request.query
        console.log('id ==>', id)
        // let data = ''
        // const readerStream = Attachment.read({ _id:id });
        // console.log('read stream', readerStream)
        // 处理流事件 --> data, end, and error
// readerStream.on('data', function(chunk) {
//     data += chunk;
//  });
 
//  readerStream.on('end',function(){
//     console.log('data=========>', data);
//  });
 

        // const file = createModel().read({ _id: id }, (error, buffer) => {

        //     console.log('buffer =====>', error, buffer)
        // })
        // console.log('file ======>', file)


        //***************************3 */
        // createModel().findById(id, (error, attachment) => {
        //     attachment.read((error, content) => {
        //         console.log('content =========>', content)
        //         ctx.body = content
        //     })
        // })

        const attachment = await createModel().findById(id)
        const content = await attachment.read()
        ctx.append('Content-Disposition', "attachment; filename*=UTF-8''"+ '111.dll')
        ctx.body = content
    } catch (error) {
        console.log('errror ==============>', error)
    }
})

router.post('/remove', async (ctx) => {
    try {
        const { id } = ctx.request.body
        console.log('ctx ======>', ctx.request.body, id)
        console.log('ctx ======>', typeof ctx.request.body)
        createModel().unlink({ _id: id }, (error) => {
            console.log('unlink error =>', error)
        })
    } catch (error) {
        
    }
})

module.exports = router