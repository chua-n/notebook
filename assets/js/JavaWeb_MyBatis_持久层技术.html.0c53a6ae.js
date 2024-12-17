"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[94792],{68684:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  comp: () => (/* reexport */ _html),\n  data: () => (/* binding */ data)\n});\n\n// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+runtime-core@3.5.13/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js\nvar runtime_core_esm_bundler = __webpack_require__(6254);\n;// ./node_modules/.pnpm/vue-loader@17.4.2_vue@3.5.13_webpack@5.97.1/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/@vuepress+bundler-webpack@2.0.0-rc.18/node_modules/@vuepress/bundler-webpack/dist/vuepress-ssr-loader.cjs!./node_modules/.pnpm/vue-loader@17.4.2_vue@3.5.13_webpack@5.97.1/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./book/.vuepress/.temp/pages/JavaWeb/MyBatis/持久层技术.html.vue?vue&type=template&id=7204c19d\n\n\nfunction render(_ctx, _cache) {\n  return ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", null, _cache[0] || (_cache[0] = [\n    (0,runtime_core_esm_bundler/* createStaticVNode */.Fv)("<h2 id=\\"_1-持久层技术解决方案\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#_1-持久层技术解决方案\\"><span>1. 持久层技术解决方案：</span></a></h2><ol><li>JDBC 技术：Connection, PreparedStatement, ResultSet</li><li>Spring 的 JDBCTemplate：Spring 中对 JDBC 的简单封装</li><li>Apache 的 DBUtils：和 Spring 的 JDBCTemplate 很像，也是对 JDBC 的简单封装</li><li>以上这些都不是框架：JDBC 是规范，Spring 的 JDBCTemplate 和 Apache 的 DBUtils 都只是工具类。</li></ol><h2 id=\\"_2-原始-jdbc-开发存在的问题\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#_2-原始-jdbc-开发存在的问题\\"><span>2. 原始 JDBC 开发存在的问题：</span></a></h2><ol><li>数据库连接创建、释放频繁，造成系统资源浪费从而影响系统性能；</li><li>SQL 语句在代码中硬编码，造成代码不易维护，实际应用中 SQL 变化的可能较大，SQL 变动需要改变 java 代码；</li><li>查询操作时，需要手动将结果集中的数据手动封装到实体中，插入操作时，需要手动将实体的数据设置到 SQL 语句的占位符位置。</li></ol><h2 id=\\"_3-mybatis\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#_3-mybatis\\"><span>3. MyBatis</span></a></h2><p>Mybatis 是一个优秀的基于 Java 的持久层框架，它内部封装了 JDBC，使开发者只需要关注 SQL 语句本身，而不需要花费精力去处理加载驱动、创建连接、创建 statement 等繁杂的过程，它使用了 ORM 思想实现了结果集的封装。</p><ul><li><strong>ORM(Object Relational Mapping)</strong> ：对象关系映射，即把数据库表和实体类及实体类的属性对应起来，让我们可以通过操作实体类就实现对数据库表的操作。实体类中的属性和数据库表的字段名称需要保持一致。</li><li>Mybatis 通过 <em>xml</em> 或<em>注解</em>的方式将要执行的各种 statement 配置起来，并通过 Java 对象和 statement 中 SQL 的动态参数进行映射生成最终执行的 SQL 语句，最后由 mybatis 框架执行 SQL 并将结果映射为 Java 对象并返回。</li></ul><p>与 Hibernate 相比，Hibernate 的学习成本比较高，而 SQL 语句并不需要开发人员完成，只需要调用相关 API 即可， 这对于开发效率是一个优势，但是缺点是没办法对 SQL 语句进行优化和修改。而 MyBatis 虽然需要开发人员自己配置 SQL 语句，MyBatis 来实现映射关系，但是这样的项目可以适应经常变化的项目需求。所以，使用 MyBatis 的场景是，对 SQL 优化要求比较高，或是项目需求或业务经常变动。</p>", 8)\n  ])))\n}\n// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@17.4.2_vue@3.5.13_webpack@5.97.1/node_modules/vue-loader/dist/exportHelper.js\nvar exportHelper = __webpack_require__(81021);\n;// ./book/.vuepress/.temp/pages/JavaWeb/MyBatis/持久层技术.html.vue\n\nconst script = {}\n\n;\nconst __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(script, [[\'render\',render]])\n\n/* harmony default export */ const _html = (__exports__);\n;// ./book/.vuepress/.temp/pages/JavaWeb/MyBatis/持久层技术.html.js\n\nconst data = JSON.parse("{\\"path\\":\\"/JavaWeb/MyBatis/%E6%8C%81%E4%B9%85%E5%B1%82%E6%8A%80%E6%9C%AF.html\\",\\"title\\":\\"持久层技术\\",\\"lang\\":\\"zh-CN\\",\\"frontmatter\\":{\\"title\\":\\"持久层技术\\",\\"date\\":\\"2020-10-26T00:00:00.000Z\\",\\"description\\":\\"1. 持久层技术解决方案： JDBC 技术：Connection, PreparedStatement, ResultSet Spring 的 JDBCTemplate：Spring 中对 JDBC 的简单封装 Apache 的 DBUtils：和 Spring 的 JDBCTemplate 很像，也是对 JDBC 的简单封装 以上这些都不是框架：JD...\\",\\"head\\":[[\\"meta\\",{\\"property\\":\\"og:url\\",\\"content\\":\\"https://chua-n.com/JavaWeb/MyBatis/%E6%8C%81%E4%B9%85%E5%B1%82%E6%8A%80%E6%9C%AF.html\\"}],[\\"meta\\",{\\"property\\":\\"og:site_name\\",\\"content\\":\\"荒流的笔趣屋\\"}],[\\"meta\\",{\\"property\\":\\"og:title\\",\\"content\\":\\"持久层技术\\"}],[\\"meta\\",{\\"property\\":\\"og:description\\",\\"content\\":\\"1. 持久层技术解决方案： JDBC 技术：Connection, PreparedStatement, ResultSet Spring 的 JDBCTemplate：Spring 中对 JDBC 的简单封装 Apache 的 DBUtils：和 Spring 的 JDBCTemplate 很像，也是对 JDBC 的简单封装 以上这些都不是框架：JD...\\"}],[\\"meta\\",{\\"property\\":\\"og:type\\",\\"content\\":\\"article\\"}],[\\"meta\\",{\\"property\\":\\"og:locale\\",\\"content\\":\\"zh-CN\\"}],[\\"meta\\",{\\"property\\":\\"og:updated_time\\",\\"content\\":\\"2024-05-04T09:51:31.000Z\\"}],[\\"meta\\",{\\"property\\":\\"article:published_time\\",\\"content\\":\\"2020-10-26T00:00:00.000Z\\"}],[\\"meta\\",{\\"property\\":\\"article:modified_time\\",\\"content\\":\\"2024-05-04T09:51:31.000Z\\"}],[\\"script\\",{\\"type\\":\\"application/ld+json\\"},\\"{\\\\\\"@context\\\\\\":\\\\\\"https://schema.org\\\\\\",\\\\\\"@type\\\\\\":\\\\\\"Article\\\\\\",\\\\\\"headline\\\\\\":\\\\\\"持久层技术\\\\\\",\\\\\\"image\\\\\\":[\\\\\\"\\\\\\"],\\\\\\"datePublished\\\\\\":\\\\\\"2020-10-26T00:00:00.000Z\\\\\\",\\\\\\"dateModified\\\\\\":\\\\\\"2024-05-04T09:51:31.000Z\\\\\\",\\\\\\"author\\\\\\":[{\\\\\\"@type\\\\\\":\\\\\\"Person\\\\\\",\\\\\\"name\\\\\\":\\\\\\"荒流\\\\\\",\\\\\\"url\\\\\\":\\\\\\"https://chua-n.com\\\\\\",\\\\\\"email\\\\\\":\\\\\\"chua_n@qq.com\\\\\\"}]}\\"]]},\\"headers\\":[{\\"level\\":2,\\"title\\":\\"1. 持久层技术解决方案：\\",\\"slug\\":\\"_1-持久层技术解决方案\\",\\"link\\":\\"#_1-持久层技术解决方案\\",\\"children\\":[]},{\\"level\\":2,\\"title\\":\\"2. 原始 JDBC 开发存在的问题：\\",\\"slug\\":\\"_2-原始-jdbc-开发存在的问题\\",\\"link\\":\\"#_2-原始-jdbc-开发存在的问题\\",\\"children\\":[]},{\\"level\\":2,\\"title\\":\\"3. MyBatis\\",\\"slug\\":\\"_3-mybatis\\",\\"link\\":\\"#_3-mybatis\\",\\"children\\":[]}],\\"git\\":{\\"createdTime\\":1626086046000,\\"updatedTime\\":1714816291000,\\"contributors\\":[{\\"name\\":\\"chua-n\\",\\"email\\":\\"chua_n@yeah.net\\",\\"commits\\":4}]},\\"readingTime\\":{\\"minutes\\":1.99,\\"words\\":597},\\"filePathRelative\\":\\"JavaWeb/MyBatis/持久层技术.md\\",\\"localizedDate\\":\\"2020年10月26日\\",\\"excerpt\\":\\"<h2>1. 持久层技术解决方案：</h2>\\\\n<ol>\\\\n<li>JDBC 技术：Connection, PreparedStatement, ResultSet</li>\\\\n<li>Spring 的 JDBCTemplate：Spring 中对 JDBC 的简单封装</li>\\\\n<li>Apache 的 DBUtils：和 Spring 的 JDBCTemplate 很像，也是对 JDBC 的简单封装</li>\\\\n<li>以上这些都不是框架：JDBC 是规范，Spring 的 JDBCTemplate 和 Apache 的 DBUtils 都只是工具类。</li>\\\\n</ol>\\\\n<h2>2. 原始 JDBC 开发存在的问题：</h2>\\",\\"autoDesc\\":true}")\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjg2ODQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OzREQUFVLHdEQW9CSjtJQXBCTjs7Ozs7O0FDQXVFO0FBQ3ZFOztBQUVBLENBQTJKO0FBQzNKLGlDQUFpQywrQkFBZSxvQkFBb0IsTUFBTTs7QUFFMUUsNENBQWU7O0FDTmlIO0FBQ2hJLDBCQUEwQix5SUFBeUksd1JBQXdSLDhIQUE4SCxhQUFhLHFEQUFxRCxhQUFhLGdEQUFnRCxhQUFhLHFPQUFxTyxhQUFhLGlEQUFpRCxhQUFhLGlEQUFpRCxhQUFhLDBFQUEwRSxhQUFhLGlGQUFpRixhQUFhLGdGQUFnRixlQUFlLGlDQUFpQyxJQUFJLGdRQUFnUSxnSUFBZ0ksRUFBRSxLQUFLLGVBQWUsNkdBQTZHLEVBQUUsK0hBQStILEVBQUUsc0dBQXNHLFdBQVcsK0VBQStFLGdFQUFnRSxFQUFFLGtCQUFrQiwrQkFBK0IsbWNBQW1jO0FBQ250RiIsInNvdXJjZXMiOlsid2VicGFjazovL25vdGVib29rLy4vYm9vay8udnVlcHJlc3MvLnRlbXAvcGFnZXMvSmF2YVdlYi9NeUJhdGlzL+aMgeS5heWxguaKgOacry5odG1sLnZ1ZT83MDM0Iiwid2VicGFjazovL25vdGVib29rLy4vYm9vay8udnVlcHJlc3MvLnRlbXAvcGFnZXMvSmF2YVdlYi9NeUJhdGlzL+aMgeS5heWxguaKgOacry5odG1sLnZ1ZT9hNDIwIiwid2VicGFjazovL25vdGVib29rLy4vYm9vay8udnVlcHJlc3MvLnRlbXAvcGFnZXMvSmF2YVdlYi9NeUJhdGlzL+aMgeS5heWxguaKgOacry5odG1sLmpzP2IxNzgiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPjxkaXY+PGgyIGlkPVwiXzEt5oyB5LmF5bGC5oqA5pyv6Kej5Yaz5pa55qGIXCIgdGFiaW5kZXg9XCItMVwiPjxhIGNsYXNzPVwiaGVhZGVyLWFuY2hvclwiIGhyZWY9XCIjXzEt5oyB5LmF5bGC5oqA5pyv6Kej5Yaz5pa55qGIXCI+PHNwYW4+MS4g5oyB5LmF5bGC5oqA5pyv6Kej5Yaz5pa55qGI77yaPC9zcGFuPjwvYT48L2gyPlxuPG9sPlxuPGxpPkpEQkMg5oqA5pyv77yaQ29ubmVjdGlvbiwgUHJlcGFyZWRTdGF0ZW1lbnQsIFJlc3VsdFNldDwvbGk+XG48bGk+U3ByaW5nIOeahCBKREJDVGVtcGxhdGXvvJpTcHJpbmcg5Lit5a+5IEpEQkMg55qE566A5Y2V5bCB6KOFPC9saT5cbjxsaT5BcGFjaGUg55qEIERCVXRpbHPvvJrlkowgU3ByaW5nIOeahCBKREJDVGVtcGxhdGUg5b6I5YOP77yM5Lmf5piv5a+5IEpEQkMg55qE566A5Y2V5bCB6KOFPC9saT5cbjxsaT7ku6XkuIrov5nkupvpg73kuI3mmK/moYbmnrbvvJpKREJDIOaYr+inhOiMg++8jFNwcmluZyDnmoQgSkRCQ1RlbXBsYXRlIOWSjCBBcGFjaGUg55qEIERCVXRpbHMg6YO95Y+q5piv5bel5YW357G744CCPC9saT5cbjwvb2w+XG48aDIgaWQ9XCJfMi3ljp/lp4stamRiYy3lvIDlj5HlrZjlnKjnmoTpl67pophcIiB0YWJpbmRleD1cIi0xXCI+PGEgY2xhc3M9XCJoZWFkZXItYW5jaG9yXCIgaHJlZj1cIiNfMi3ljp/lp4stamRiYy3lvIDlj5HlrZjlnKjnmoTpl67pophcIj48c3Bhbj4yLiDljp/lp4sgSkRCQyDlvIDlj5HlrZjlnKjnmoTpl67popjvvJo8L3NwYW4+PC9hPjwvaDI+XG48b2w+XG48bGk+5pWw5o2u5bqT6L+e5o6l5Yib5bu644CB6YeK5pS+6aKR57mB77yM6YCg5oiQ57O757uf6LWE5rqQ5rWq6LS55LuO6ICM5b2x5ZON57O757uf5oCn6IO977ybPC9saT5cbjxsaT5TUUwg6K+t5Y+l5Zyo5Luj56CB5Lit56Gs57yW56CB77yM6YCg5oiQ5Luj56CB5LiN5piT57u05oqk77yM5a6e6ZmF5bqU55So5LitIFNRTCDlj5jljJbnmoTlj6/og73ovoPlpKfvvIxTUUwg5Y+Y5Yqo6ZyA6KaB5pS55Y+YIGphdmEg5Luj56CB77ybPC9saT5cbjxsaT7mn6Xor6Lmk43kvZzml7bvvIzpnIDopoHmiYvliqjlsIbnu5Pmnpzpm4bkuK3nmoTmlbDmja7miYvliqjlsIHoo4XliLDlrp7kvZPkuK3vvIzmj5LlhaXmk43kvZzml7bvvIzpnIDopoHmiYvliqjlsIblrp7kvZPnmoTmlbDmja7orr7nva7liLAgU1FMIOivreWPpeeahOWNoOS9jeespuS9jee9ruOAgjwvbGk+XG48L29sPlxuPGgyIGlkPVwiXzMtbXliYXRpc1wiIHRhYmluZGV4PVwiLTFcIj48YSBjbGFzcz1cImhlYWRlci1hbmNob3JcIiBocmVmPVwiI18zLW15YmF0aXNcIj48c3Bhbj4zLiBNeUJhdGlzPC9zcGFuPjwvYT48L2gyPlxuPHA+TXliYXRpcyDmmK/kuIDkuKrkvJjnp4DnmoTln7rkuo4gSmF2YSDnmoTmjIHkuYXlsYLmoYbmnrbvvIzlroPlhoXpg6jlsIHoo4XkuoYgSkRCQ++8jOS9v+W8gOWPkeiAheWPqumcgOimgeWFs+azqCBTUUwg6K+t5Y+l5pys6Lqr77yM6ICM5LiN6ZyA6KaB6Iqx6LS557K+5Yqb5Y675aSE55CG5Yqg6L296amx5Yqo44CB5Yib5bu66L+e5o6l44CB5Yib5bu6IHN0YXRlbWVudCDnrYnnuYHmnYLnmoTov4fnqIvvvIzlroPkvb/nlKjkuoYgT1JNIOaAneaDs+WunueOsOS6hue7k+aenOmbhueahOWwgeijheOAgjwvcD5cbjx1bD5cbjxsaT48c3Ryb25nPk9STShPYmplY3QgUmVsYXRpb25hbCBNYXBwaW5nKTwvc3Ryb25nPiDvvJrlr7nosaHlhbPns7vmmKDlsITvvIzljbPmiormlbDmja7lupPooajlkozlrp7kvZPnsbvlj4rlrp7kvZPnsbvnmoTlsZ7mgKflr7nlupTotbfmnaXvvIzorqnmiJHku6zlj6/ku6XpgJrov4fmk43kvZzlrp7kvZPnsbvlsLHlrp7njrDlr7nmlbDmja7lupPooajnmoTmk43kvZzjgILlrp7kvZPnsbvkuK3nmoTlsZ7mgKflkozmlbDmja7lupPooajnmoTlrZfmrrXlkI3np7DpnIDopoHkv53mjIHkuIDoh7TjgII8L2xpPlxuPGxpPk15YmF0aXMg6YCa6L+HIDxlbT54bWw8L2VtPiDmiJY8ZW0+5rOo6KejPC9lbT7nmoTmlrnlvI/lsIbopoHmiafooYznmoTlkITnp40gc3RhdGVtZW50IOmFjee9rui1t+adpe+8jOW5tumAmui/hyBKYXZhIOWvueixoeWSjCBzdGF0ZW1lbnQg5LitIFNRTCDnmoTliqjmgIHlj4LmlbDov5vooYzmmKDlsITnlJ/miJDmnIDnu4jmiafooYznmoQgU1FMIOivreWPpe+8jOacgOWQjueUsSBteWJhdGlzIOahhuaetuaJp+ihjCBTUUwg5bm25bCG57uT5p6c5pig5bCE5Li6IEphdmEg5a+56LGh5bm26L+U5Zue44CCPC9saT5cbjwvdWw+XG48cD7kuI4gSGliZXJuYXRlIOebuOavlO+8jEhpYmVybmF0ZSDnmoTlrabkuaDmiJDmnKzmr5TovoPpq5jvvIzogIwgU1FMIOivreWPpeW5tuS4jemcgOimgeW8gOWPkeS6uuWRmOWujOaIkO+8jOWPqumcgOimgeiwg+eUqOebuOWFsyBBUEkg5Y2z5Y+v77yMIOi/meWvueS6juW8gOWPkeaViOeOh+aYr+S4gOS4quS8mOWKv++8jOS9huaYr+e8uueCueaYr+ayoeWKnuazleWvuSBTUUwg6K+t5Y+l6L+b6KGM5LyY5YyW5ZKM5L+u5pS544CC6ICMIE15QmF0aXMg6Jm954S26ZyA6KaB5byA5Y+R5Lq65ZGY6Ieq5bex6YWN572uIFNRTCDor63lj6XvvIxNeUJhdGlzIOadpeWunueOsOaYoOWwhOWFs+ezu++8jOS9huaYr+i/meagt+eahOmhueebruWPr+S7pemAguW6lOe7j+W4uOWPmOWMlueahOmhueebrumcgOaxguOAguaJgOS7pe+8jOS9v+eUqCBNeUJhdGlzIOeahOWcuuaZr+aYr++8jOWvuSBTUUwg5LyY5YyW6KaB5rGC5q+U6L6D6auY77yM5oiW5piv6aG555uu6ZyA5rGC5oiW5Lia5Yqh57uP5bi45Y+Y5Yqo44CCPC9wPlxuPC9kaXY+PC90ZW1wbGF0ZT5cblxuXG4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi/mjIHkuYXlsYLmioDmnK8uaHRtbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzIwNGMxOWRcIlxuY29uc3Qgc2NyaXB0ID0ge31cblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Z1ZS1sb2FkZXJAMTcuNC4yX3Z1ZUAzLjUuMTNfd2VicGFja0A1Ljk3LjEvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdXSlcblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgY29tcCBmcm9tIFwiL2hvbWUvcnVubmVyL3dvcmsvY2h1YS1uLmdpdGh1Yi5pby9jaHVhLW4uZ2l0aHViLmlvL2Jvb2svLnZ1ZXByZXNzLy50ZW1wL3BhZ2VzL0phdmFXZWIvTXlCYXRpcy/mjIHkuYXlsYLmioDmnK8uaHRtbC52dWVcIlxuY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoXCJ7XFxcInBhdGhcXFwiOlxcXCIvSmF2YVdlYi9NeUJhdGlzLyVFNiU4QyU4MSVFNCVCOSU4NSVFNSVCMSU4MiVFNiU4QSU4MCVFNiU5QyVBRi5odG1sXFxcIixcXFwidGl0bGVcXFwiOlxcXCLmjIHkuYXlsYLmioDmnK9cXFwiLFxcXCJsYW5nXFxcIjpcXFwiemgtQ05cXFwiLFxcXCJmcm9udG1hdHRlclxcXCI6e1xcXCJ0aXRsZVxcXCI6XFxcIuaMgeS5heWxguaKgOacr1xcXCIsXFxcImRhdGVcXFwiOlxcXCIyMDIwLTEwLTI2VDAwOjAwOjAwLjAwMFpcXFwiLFxcXCJkZXNjcmlwdGlvblxcXCI6XFxcIjEuIOaMgeS5heWxguaKgOacr+ino+WGs+aWueahiO+8miBKREJDIOaKgOacr++8mkNvbm5lY3Rpb24sIFByZXBhcmVkU3RhdGVtZW50LCBSZXN1bHRTZXQgU3ByaW5nIOeahCBKREJDVGVtcGxhdGXvvJpTcHJpbmcg5Lit5a+5IEpEQkMg55qE566A5Y2V5bCB6KOFIEFwYWNoZSDnmoQgREJVdGlsc++8muWSjCBTcHJpbmcg55qEIEpEQkNUZW1wbGF0ZSDlvojlg4/vvIzkuZ/mmK/lr7kgSkRCQyDnmoTnroDljZXlsIHoo4Ug5Lul5LiK6L+Z5Lqb6YO95LiN5piv5qGG5p6277yaSkQuLi5cXFwiLFxcXCJoZWFkXFxcIjpbW1xcXCJtZXRhXFxcIix7XFxcInByb3BlcnR5XFxcIjpcXFwib2c6dXJsXFxcIixcXFwiY29udGVudFxcXCI6XFxcImh0dHBzOi8vY2h1YS1uLmNvbS9KYXZhV2ViL015QmF0aXMvJUU2JThDJTgxJUU0JUI5JTg1JUU1JUIxJTgyJUU2JThBJTgwJUU2JTlDJUFGLmh0bWxcXFwifV0sW1xcXCJtZXRhXFxcIix7XFxcInByb3BlcnR5XFxcIjpcXFwib2c6c2l0ZV9uYW1lXFxcIixcXFwiY29udGVudFxcXCI6XFxcIuiNkua1geeahOeslOi2o+Wxi1xcXCJ9XSxbXFxcIm1ldGFcXFwiLHtcXFwicHJvcGVydHlcXFwiOlxcXCJvZzp0aXRsZVxcXCIsXFxcImNvbnRlbnRcXFwiOlxcXCLmjIHkuYXlsYLmioDmnK9cXFwifV0sW1xcXCJtZXRhXFxcIix7XFxcInByb3BlcnR5XFxcIjpcXFwib2c6ZGVzY3JpcHRpb25cXFwiLFxcXCJjb250ZW50XFxcIjpcXFwiMS4g5oyB5LmF5bGC5oqA5pyv6Kej5Yaz5pa55qGI77yaIEpEQkMg5oqA5pyv77yaQ29ubmVjdGlvbiwgUHJlcGFyZWRTdGF0ZW1lbnQsIFJlc3VsdFNldCBTcHJpbmcg55qEIEpEQkNUZW1wbGF0Ze+8mlNwcmluZyDkuK3lr7kgSkRCQyDnmoTnroDljZXlsIHoo4UgQXBhY2hlIOeahCBEQlV0aWxz77ya5ZKMIFNwcmluZyDnmoQgSkRCQ1RlbXBsYXRlIOW+iOWDj++8jOS5n+aYr+WvuSBKREJDIOeahOeugOWNleWwgeijhSDku6XkuIrov5nkupvpg73kuI3mmK/moYbmnrbvvJpKRC4uLlxcXCJ9XSxbXFxcIm1ldGFcXFwiLHtcXFwicHJvcGVydHlcXFwiOlxcXCJvZzp0eXBlXFxcIixcXFwiY29udGVudFxcXCI6XFxcImFydGljbGVcXFwifV0sW1xcXCJtZXRhXFxcIix7XFxcInByb3BlcnR5XFxcIjpcXFwib2c6bG9jYWxlXFxcIixcXFwiY29udGVudFxcXCI6XFxcInpoLUNOXFxcIn1dLFtcXFwibWV0YVxcXCIse1xcXCJwcm9wZXJ0eVxcXCI6XFxcIm9nOnVwZGF0ZWRfdGltZVxcXCIsXFxcImNvbnRlbnRcXFwiOlxcXCIyMDI0LTA1LTA0VDA5OjUxOjMxLjAwMFpcXFwifV0sW1xcXCJtZXRhXFxcIix7XFxcInByb3BlcnR5XFxcIjpcXFwiYXJ0aWNsZTpwdWJsaXNoZWRfdGltZVxcXCIsXFxcImNvbnRlbnRcXFwiOlxcXCIyMDIwLTEwLTI2VDAwOjAwOjAwLjAwMFpcXFwifV0sW1xcXCJtZXRhXFxcIix7XFxcInByb3BlcnR5XFxcIjpcXFwiYXJ0aWNsZTptb2RpZmllZF90aW1lXFxcIixcXFwiY29udGVudFxcXCI6XFxcIjIwMjQtMDUtMDRUMDk6NTE6MzEuMDAwWlxcXCJ9XSxbXFxcInNjcmlwdFxcXCIse1xcXCJ0eXBlXFxcIjpcXFwiYXBwbGljYXRpb24vbGQranNvblxcXCJ9LFxcXCJ7XFxcXFxcXCJAY29udGV4dFxcXFxcXFwiOlxcXFxcXFwiaHR0cHM6Ly9zY2hlbWEub3JnXFxcXFxcXCIsXFxcXFxcXCJAdHlwZVxcXFxcXFwiOlxcXFxcXFwiQXJ0aWNsZVxcXFxcXFwiLFxcXFxcXFwiaGVhZGxpbmVcXFxcXFxcIjpcXFxcXFxcIuaMgeS5heWxguaKgOacr1xcXFxcXFwiLFxcXFxcXFwiaW1hZ2VcXFxcXFxcIjpbXFxcXFxcXCJcXFxcXFxcIl0sXFxcXFxcXCJkYXRlUHVibGlzaGVkXFxcXFxcXCI6XFxcXFxcXCIyMDIwLTEwLTI2VDAwOjAwOjAwLjAwMFpcXFxcXFxcIixcXFxcXFxcImRhdGVNb2RpZmllZFxcXFxcXFwiOlxcXFxcXFwiMjAyNC0wNS0wNFQwOTo1MTozMS4wMDBaXFxcXFxcXCIsXFxcXFxcXCJhdXRob3JcXFxcXFxcIjpbe1xcXFxcXFwiQHR5cGVcXFxcXFxcIjpcXFxcXFxcIlBlcnNvblxcXFxcXFwiLFxcXFxcXFwibmFtZVxcXFxcXFwiOlxcXFxcXFwi6I2S5rWBXFxcXFxcXCIsXFxcXFxcXCJ1cmxcXFxcXFxcIjpcXFxcXFxcImh0dHBzOi8vY2h1YS1uLmNvbVxcXFxcXFwiLFxcXFxcXFwiZW1haWxcXFxcXFxcIjpcXFxcXFxcImNodWFfbkBxcS5jb21cXFxcXFxcIn1dfVxcXCJdXX0sXFxcImhlYWRlcnNcXFwiOlt7XFxcImxldmVsXFxcIjoyLFxcXCJ0aXRsZVxcXCI6XFxcIjEuIOaMgeS5heWxguaKgOacr+ino+WGs+aWueahiO+8mlxcXCIsXFxcInNsdWdcXFwiOlxcXCJfMS3mjIHkuYXlsYLmioDmnK/op6PlhrPmlrnmoYhcXFwiLFxcXCJsaW5rXFxcIjpcXFwiI18xLeaMgeS5heWxguaKgOacr+ino+WGs+aWueahiFxcXCIsXFxcImNoaWxkcmVuXFxcIjpbXX0se1xcXCJsZXZlbFxcXCI6MixcXFwidGl0bGVcXFwiOlxcXCIyLiDljp/lp4sgSkRCQyDlvIDlj5HlrZjlnKjnmoTpl67popjvvJpcXFwiLFxcXCJzbHVnXFxcIjpcXFwiXzIt5Y6f5aeLLWpkYmMt5byA5Y+R5a2Y5Zyo55qE6Zeu6aKYXFxcIixcXFwibGlua1xcXCI6XFxcIiNfMi3ljp/lp4stamRiYy3lvIDlj5HlrZjlnKjnmoTpl67pophcXFwiLFxcXCJjaGlsZHJlblxcXCI6W119LHtcXFwibGV2ZWxcXFwiOjIsXFxcInRpdGxlXFxcIjpcXFwiMy4gTXlCYXRpc1xcXCIsXFxcInNsdWdcXFwiOlxcXCJfMy1teWJhdGlzXFxcIixcXFwibGlua1xcXCI6XFxcIiNfMy1teWJhdGlzXFxcIixcXFwiY2hpbGRyZW5cXFwiOltdfV0sXFxcImdpdFxcXCI6e1xcXCJjcmVhdGVkVGltZVxcXCI6MTYyNjA4NjA0NjAwMCxcXFwidXBkYXRlZFRpbWVcXFwiOjE3MTQ4MTYyOTEwMDAsXFxcImNvbnRyaWJ1dG9yc1xcXCI6W3tcXFwibmFtZVxcXCI6XFxcImNodWEtblxcXCIsXFxcImVtYWlsXFxcIjpcXFwiY2h1YV9uQHllYWgubmV0XFxcIixcXFwiY29tbWl0c1xcXCI6NH1dfSxcXFwicmVhZGluZ1RpbWVcXFwiOntcXFwibWludXRlc1xcXCI6MS45OSxcXFwid29yZHNcXFwiOjU5N30sXFxcImZpbGVQYXRoUmVsYXRpdmVcXFwiOlxcXCJKYXZhV2ViL015QmF0aXMv5oyB5LmF5bGC5oqA5pyvLm1kXFxcIixcXFwibG9jYWxpemVkRGF0ZVxcXCI6XFxcIjIwMjDlubQxMOaciDI25pelXFxcIixcXFwiZXhjZXJwdFxcXCI6XFxcIjxoMj4xLiDmjIHkuYXlsYLmioDmnK/op6PlhrPmlrnmoYjvvJo8L2gyPlxcXFxuPG9sPlxcXFxuPGxpPkpEQkMg5oqA5pyv77yaQ29ubmVjdGlvbiwgUHJlcGFyZWRTdGF0ZW1lbnQsIFJlc3VsdFNldDwvbGk+XFxcXG48bGk+U3ByaW5nIOeahCBKREJDVGVtcGxhdGXvvJpTcHJpbmcg5Lit5a+5IEpEQkMg55qE566A5Y2V5bCB6KOFPC9saT5cXFxcbjxsaT5BcGFjaGUg55qEIERCVXRpbHPvvJrlkowgU3ByaW5nIOeahCBKREJDVGVtcGxhdGUg5b6I5YOP77yM5Lmf5piv5a+5IEpEQkMg55qE566A5Y2V5bCB6KOFPC9saT5cXFxcbjxsaT7ku6XkuIrov5nkupvpg73kuI3mmK/moYbmnrbvvJpKREJDIOaYr+inhOiMg++8jFNwcmluZyDnmoQgSkRCQ1RlbXBsYXRlIOWSjCBBcGFjaGUg55qEIERCVXRpbHMg6YO95Y+q5piv5bel5YW357G744CCPC9saT5cXFxcbjwvb2w+XFxcXG48aDI+Mi4g5Y6f5aeLIEpEQkMg5byA5Y+R5a2Y5Zyo55qE6Zeu6aKY77yaPC9oMj5cXFwiLFxcXCJhdXRvRGVzY1xcXCI6dHJ1ZX1cIilcbmV4cG9ydCB7IGNvbXAsIGRhdGEgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///68684\n')},81021:(__unused_webpack_module,exports)=>{eval("var __webpack_unused_export__;\n\n__webpack_unused_export__ = ({ value: true });\n// runtime helper for setting properties on components\n// in a tree-shakable way\nexports.A = (sfc, props) => {\n    const target = sfc.__vccOpts || sfc;\n    for (const [key, val] of props) {\n        target[key] = val;\n    }\n    return target;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODEwMjEuanMiLCJtYXBwaW5ncyI6IjtBQUFhO0FBQ2IsNkJBQTZDLEVBQUUsYUFBYSxDQUFDO0FBQzdEO0FBQ0E7QUFDQSxTQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm90ZWJvb2svLi9ub2RlX21vZHVsZXMvLnBucG0vdnVlLWxvYWRlckAxNy40LjJfdnVlQDMuNS4xM193ZWJwYWNrQDUuOTcuMS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qcz8yNmM5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gcnVudGltZSBoZWxwZXIgZm9yIHNldHRpbmcgcHJvcGVydGllcyBvbiBjb21wb25lbnRzXG4vLyBpbiBhIHRyZWUtc2hha2FibGUgd2F5XG5leHBvcnRzLmRlZmF1bHQgPSAoc2ZjLCBwcm9wcykgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IHNmYy5fX3ZjY09wdHMgfHwgc2ZjO1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBwcm9wcykge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbDtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///81021\n")}}]);