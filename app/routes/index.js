'use strict';exports.__esModule = true;var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _koaRouter = require('koa-router');var _koaRouter2 = _interopRequireDefault(_koaRouter);
var _articleCtrl = require('../modules/article/controller/articleCtrl');var _articleCtrl2 = _interopRequireDefault(_articleCtrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var router = (0, _koaRouter2.default)();


router.get('/', function () {var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, next) {var title, content;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
            title = 'Koa2 Mock Sever';
            content = '千万里阳光号';_context.next = 4;return (

              ctx.render('index', {
                title: title,
                content: content }));case 4:case 'end':return _context.stop();}}}, _callee, undefined);}));return function (_x, _x2) {return _ref.apply(this, arguments);};}());



// 添加URL match controller
router.get('/cms/open/newArticles', _articleCtrl2.default);exports.default =

router;module.exports = exports['default'];
//# sourceMappingURL=index.js.map