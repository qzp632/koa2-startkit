'use strict';exports.__esModule = true;var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _articleService = require('../service/articleService');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default = function () {var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(

  function _callee(ctx, next) {return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:

            ctx.response.type = 'application/json';
            // 判断request参数
            _context.t0 = ctx.request.query.inforType;_context.next = _context.t0 ===
            '0' ? 4 : _context.t0 ===


            '1' ? 6 : _context.t0 ===


            '2' ? 8 : 10;break;case 4: // 获取标签
            ctx.response.body = (0, _articleService.getColumns)(ctx);return _context.abrupt('break', 11);case 6: // 获取文章
            ctx.response.body = (0, _articleService.getArticles)(ctx);return _context.abrupt('break', 11);case 8: // 搜索查询
            ctx.response.body = (0, _articleService.getArticles)(ctx);return _context.abrupt('break', 11);case 10:return _context.abrupt('return');case 11:case 'end':return _context.stop();}}}, _callee, undefined);}));return function (_x, _x2) {return _ref.apply(this, arguments);};}();module.exports = exports['default'];
//# sourceMappingURL=articleCtrl.js.map