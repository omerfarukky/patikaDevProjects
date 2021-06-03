const Koa = require('koa');
const KoaRouter = require('koa-router');

const app = new Koa();
const router = new KoaRouter();

app.use(router.routes()).use(router.allowedMethods());

router.get('/', ctx => { ctx.body = '<h1>INDEX SAYFASINA HOSGELDINIZ</h1>' });
router.get('/hakkimda', ctx => { ctx.body = '<h1>HAKKIMDA SAYFASINA HOSGELDINIZ</h1>' });
router.get('/iletisim', ctx => { ctx.body = '<h1>ILETISIM SAYFASINA HOSGELDINIZ</h1>' });

const port = 3000;

app.listen(port, () => {
    console.log(`Sunucu ${port} da çalısıyor..`)
});