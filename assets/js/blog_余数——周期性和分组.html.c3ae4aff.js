"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[15062],{41031:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  comp: () => (/* reexport */ _html),\n  data: () => (/* binding */ data)\n});\n\n// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+runtime-core@3.5.13/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js\nvar runtime_core_esm_bundler = __webpack_require__(6254);\n;// ./node_modules/.pnpm/vue-loader@17.4.2_vue@3.5.13_webpack@5.97.1/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/@vuepress+bundler-webpack@2.0.0-rc.18/node_modules/@vuepress/bundler-webpack/dist/vuepress-ssr-loader.cjs!./node_modules/.pnpm/vue-loader@17.4.2_vue@3.5.13_webpack@5.97.1/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./book/.vuepress/.temp/pages/blog/余数——周期性和分组.html.vue?vue&type=template&id=2bfe2850\n\n\nfunction render(_ctx, _cache) {\n  return ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", null, [\n    _cache[0] || (_cache[0] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("p", null, "余数，作除法运算时剩下的数。尽管从小学起我们就反复练习加、减、乘、除的计算，但有关余数的计算只在学习除法时略见其影，事实上，无论在数学还是编程中，余数都起着非常重要的作用。因为我们将意识到，“余数就是分组”，而且它的神奇性在于，将较大的数字除一次就能分组。", -1 /* HOISTED */)),\n    (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)(" more "),\n    _cache[1] || (_cache[1] = (0,runtime_core_esm_bundler/* createStaticVNode */.Fv)("<h2 id=\\"_1-星期数问题\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#_1-星期数问题\\"><span>1. 星期数问题</span></a></h2><p>以这样一个常见的问题为例：</p><blockquote><p>今天是星期日，那么 1 亿天以后是星期几？</p></blockquote><p>对于这个问题，我们显然知道，一周有 7 天，那么“7”是星期数的周期，从<u>今天</u>起每过 7 天，便循环到<u>和今天</u>相同的星期数。如果今天是星期日，则 7 天后、14 天后、21 天后......这种“7 的整数倍”天后都是星期日。由此我们便可引入除法运算，看 1 亿天里有几个 7 天，也就是周期的重复出现了多少次，以便将这个重复性影响剔除，方便我们解决问题。</p><p>显然，有</p><p>$$ 10^8 \\\\div 7 =14285714 \\\\cdots 2 $$</p><p>这表示，1 亿（$10^8$）里面有 14285714 个星期数周期，将它们忽略，日子便相当于只前进了 2 天，因此从今天的星期日开始往后数 2 天，便是星期二，故而 1 亿天以后必然是星期 2。</p><h2 id=\\"_2-更进一步——隐藏的周期性分组\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#_2-更进一步——隐藏的周期性分组\\"><span>2. 更进一步——隐藏的周期性分组</span></a></h2><p>在星期数的问题上，如果数字更大呢？比如：</p><blockquote><p>今天是星期日，那么$10^{100}$天以后是星期几？</p></blockquote><p>我们固然可以套用之前的方法解决这个类似的问题，但是说实在的$10^{100}$这个数太大了，计算机计算起来都相当费力，我们需要更进一步的思考。</p><p>我们并不急于求出$10^{100}$，而可以像$1,10,100,1000,10000\\\\cdots$这样，依次增加 0 的个数，观察其规律：</p><table><thead><tr><th style=\\"text-align:center;\\">数字</th><th style=\\"text-align:center;\\">0 的个数</th><th style=\\"text-align:center;\\">除法计算</th><th style=\\"text-align:center;\\">星期数</th></tr></thead><tbody><tr><td style=\\"text-align:center;\\">$1$</td><td style=\\"text-align:center;\\">0</td><td style=\\"text-align:center;\\">$1 \\\\div 7 = 0 \\\\cdots 1$</td><td style=\\"text-align:center;\\">1</td></tr><tr><td style=\\"text-align:center;\\">$10$</td><td style=\\"text-align:center;\\">1</td><td style=\\"text-align:center;\\">$10 \\\\div 7 = 1 \\\\cdots 3$</td><td style=\\"text-align:center;\\">3</td></tr><tr><td style=\\"text-align:center;\\">$10^2$</td><td style=\\"text-align:center;\\">2</td><td style=\\"text-align:center;\\">$10^2 \\\\div 7 = 14 \\\\cdots 2$</td><td style=\\"text-align:center;\\">2</td></tr><tr><td style=\\"text-align:center;\\">$10^3$</td><td style=\\"text-align:center;\\">3</td><td style=\\"text-align:center;\\">$10^3 \\\\div 7 = 142 \\\\cdots 6$</td><td style=\\"text-align:center;\\">6</td></tr><tr><td style=\\"text-align:center;\\">$10^4$</td><td style=\\"text-align:center;\\">4</td><td style=\\"text-align:center;\\">$10^4 \\\\mod 7 = 4$</td><td style=\\"text-align:center;\\">4</td></tr><tr><td style=\\"text-align:center;\\">$10^5$</td><td style=\\"text-align:center;\\">5</td><td style=\\"text-align:center;\\">$10^5 \\\\mod 7 = 5$</td><td style=\\"text-align:center;\\">5</td></tr><tr><td style=\\"text-align:center;\\">$10^6$</td><td style=\\"text-align:center;\\">6</td><td style=\\"text-align:center;\\">$10^6 \\\\mod 7 = 1$</td><td style=\\"text-align:center;\\">1</td></tr><tr><td style=\\"text-align:center;\\">$10^7$</td><td style=\\"text-align:center;\\">7</td><td style=\\"text-align:center;\\">$10^7 \\\\mod 7 = 3$</td><td style=\\"text-align:center;\\">3</td></tr><tr><td style=\\"text-align:center;\\">$10^8$</td><td style=\\"text-align:center;\\">8</td><td style=\\"text-align:center;\\">$10^8 \\\\mod 7 = 2$</td><td style=\\"text-align:center;\\">2</td></tr><tr><td style=\\"text-align:center;\\">$10^9$</td><td style=\\"text-align:center;\\">9</td><td style=\\"text-align:center;\\">$10^9 \\\\mod 7 = 6$</td><td style=\\"text-align:center;\\">6</td></tr><tr><td style=\\"text-align:center;\\">$10^{10}$</td><td style=\\"text-align:center;\\">10</td><td style=\\"text-align:center;\\">$10^{10} \\\\mod 7 = 4$</td><td style=\\"text-align:center;\\">4</td></tr><tr><td style=\\"text-align:center;\\">$10^{11}$</td><td style=\\"text-align:center;\\">11</td><td style=\\"text-align:center;\\">$10^{11} \\\\mod 7 = 5$</td><td style=\\"text-align:center;\\">5</td></tr><tr><td style=\\"text-align:center;\\">$10^{12}$</td><td style=\\"text-align:center;\\">12</td><td style=\\"text-align:center;\\">$10^{12} \\\\mod 7 = 1$</td><td style=\\"text-align:center;\\">1</td></tr><tr><td style=\\"text-align:center;\\">$10^{13}$</td><td style=\\"text-align:center;\\">13</td><td style=\\"text-align:center;\\">$10^{13} \\\\mod 7 = 3$</td><td style=\\"text-align:center;\\">3</td></tr></tbody></table>", 13)),\n    _cache[2] || (_cache[2] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("p", null, [\n      (0,runtime_core_esm_bundler/* createTextVNode */.eW)("我们发现，余数以$1,3,2,6,4,5\\\\cdots$的顺序循环，即星期数在这个层面上也处于循环之中，循环周期为 6，故而$10"),\n      (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("sup", { "94": "" }, "{100}$与$10"),\n      (0,runtime_core_esm_bundler/* createTextVNode */.eW)(",10"),\n      (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("sup", { "82": "" }, "{88},10"),\n      (0,runtime_core_esm_bundler/* createTextVNode */.eW)("\\\\cdots$的星期数相同，我们将指数位置处的 100 对 6 作除法：")\n    ], -1 /* HOISTED */)),\n    _cache[3] || (_cache[3] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("p", null, "$$ 100 \\\\div 6 = 16 \\\\cdots 4 $$", -1 /* HOISTED */)),\n    _cache[4] || (_cache[4] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("p", null, [\n      (0,runtime_core_esm_bundler/* createTextVNode */.eW)("因此$10"),\n      (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("sup", { "4": "" }, "{100}$与$10"),\n      (0,runtime_core_esm_bundler/* createTextVNode */.eW)("$的星期数相同，而在上表中我们已经通过$10^4 \\\\mod 7 = 4$知道了$10^{4}$为星期 4，因此我们已经找到了答案。")\n    ], -1 /* HOISTED */)),\n    _cache[5] || (_cache[5] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("h2", {\n      id: "_3-乘方尾数的周期性-异曲同工",\n      tabindex: "-1"\n    }, [\n      (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("a", {\n        class: "header-anchor",\n        href: "#_3-乘方尾数的周期性-异曲同工"\n      }, [\n        (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", null, "3. 乘方尾数的周期性（异曲同工）")\n      ])\n    ], -1 /* HOISTED */)),\n    _cache[6] || (_cache[6] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("p", null, "上面我们用星期数的案例为例描述了余数的作用，其实还有一个典型的问题与之类似：", -1 /* HOISTED */)),\n    _cache[7] || (_cache[7] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("blockquote", null, [\n      (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("p", null, "$1234567^{987654321}$的个位数是什么？")\n    ], -1 /* HOISTED */)),\n    _cache[8] || (_cache[8] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("p", null, "$1234567^{987654321}$的数值显然同样大到难以计算，我们可以采用同样的做法解决这个问题，此外，由于我们只关注个位数字，因此可将高位数字忽略掉。具体计算方法这里不再赘述，答案为 7。", -1 /* HOISTED */))\n  ]))\n}\n// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@17.4.2_vue@3.5.13_webpack@5.97.1/node_modules/vue-loader/dist/exportHelper.js\nvar exportHelper = __webpack_require__(81021);\n;// ./book/.vuepress/.temp/pages/blog/余数——周期性和分组.html.vue\n\nconst script = {}\n\n;\nconst __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(script, [[\'render\',render]])\n\n/* harmony default export */ const _html = (__exports__);\n;// ./book/.vuepress/.temp/pages/blog/余数——周期性和分组.html.js\n\nconst data = JSON.parse("{\\"path\\":\\"/blog/%E4%BD%99%E6%95%B0%E2%80%94%E2%80%94%E5%91%A8%E6%9C%9F%E6%80%A7%E5%92%8C%E5%88%86%E7%BB%84.html\\",\\"title\\":\\"余数——周期性和分组\\",\\"lang\\":\\"zh-CN\\",\\"frontmatter\\":{\\"title\\":\\"余数——周期性和分组\\",\\"date\\":\\"2021-06-17T09:16:36.000Z\\",\\"category\\":[\\"数学\\"],\\"tag\\":\\"coding\\",\\"description\\":\\"余数，作除法运算时剩下的数。尽管从小学起我们就反复练习加、减、乘、除的计算，但有关余数的计算只在学习除法时略见其影，事实上，无论在数学还是编程中，余数都起着非常重要的作用。因为我们将意识到，“余数就是分组”，而且它的神奇性在于，将较大的数字除一次就能分组。\\",\\"head\\":[[\\"meta\\",{\\"property\\":\\"og:url\\",\\"content\\":\\"https://chua-n.com/blog/%E4%BD%99%E6%95%B0%E2%80%94%E2%80%94%E5%91%A8%E6%9C%9F%E6%80%A7%E5%92%8C%E5%88%86%E7%BB%84.html\\"}],[\\"meta\\",{\\"property\\":\\"og:site_name\\",\\"content\\":\\"荒流的笔趣屋\\"}],[\\"meta\\",{\\"property\\":\\"og:title\\",\\"content\\":\\"余数——周期性和分组\\"}],[\\"meta\\",{\\"property\\":\\"og:description\\",\\"content\\":\\"余数，作除法运算时剩下的数。尽管从小学起我们就反复练习加、减、乘、除的计算，但有关余数的计算只在学习除法时略见其影，事实上，无论在数学还是编程中，余数都起着非常重要的作用。因为我们将意识到，“余数就是分组”，而且它的神奇性在于，将较大的数字除一次就能分组。\\"}],[\\"meta\\",{\\"property\\":\\"og:type\\",\\"content\\":\\"article\\"}],[\\"meta\\",{\\"property\\":\\"og:locale\\",\\"content\\":\\"zh-CN\\"}],[\\"meta\\",{\\"property\\":\\"og:updated_time\\",\\"content\\":\\"2024-05-19T01:55:51.000Z\\"}],[\\"meta\\",{\\"property\\":\\"article:tag\\",\\"content\\":\\"coding\\"}],[\\"meta\\",{\\"property\\":\\"article:published_time\\",\\"content\\":\\"2021-06-17T09:16:36.000Z\\"}],[\\"meta\\",{\\"property\\":\\"article:modified_time\\",\\"content\\":\\"2024-05-19T01:55:51.000Z\\"}],[\\"script\\",{\\"type\\":\\"application/ld+json\\"},\\"{\\\\\\"@context\\\\\\":\\\\\\"https://schema.org\\\\\\",\\\\\\"@type\\\\\\":\\\\\\"Article\\\\\\",\\\\\\"headline\\\\\\":\\\\\\"余数——周期性和分组\\\\\\",\\\\\\"image\\\\\\":[\\\\\\"\\\\\\"],\\\\\\"datePublished\\\\\\":\\\\\\"2021-06-17T09:16:36.000Z\\\\\\",\\\\\\"dateModified\\\\\\":\\\\\\"2024-05-19T01:55:51.000Z\\\\\\",\\\\\\"author\\\\\\":[{\\\\\\"@type\\\\\\":\\\\\\"Person\\\\\\",\\\\\\"name\\\\\\":\\\\\\"荒流\\\\\\",\\\\\\"url\\\\\\":\\\\\\"https://chua-n.com\\\\\\",\\\\\\"email\\\\\\":\\\\\\"chua_n@qq.com\\\\\\"}]}\\"]]},\\"headers\\":[{\\"level\\":2,\\"title\\":\\"1. 星期数问题\\",\\"slug\\":\\"_1-星期数问题\\",\\"link\\":\\"#_1-星期数问题\\",\\"children\\":[]},{\\"level\\":2,\\"title\\":\\"2. 更进一步——隐藏的周期性分组\\",\\"slug\\":\\"_2-更进一步——隐藏的周期性分组\\",\\"link\\":\\"#_2-更进一步——隐藏的周期性分组\\",\\"children\\":[]},{\\"level\\":2,\\"title\\":\\"3. 乘方尾数的周期性（异曲同工）\\",\\"slug\\":\\"_3-乘方尾数的周期性-异曲同工\\",\\"link\\":\\"#_3-乘方尾数的周期性-异曲同工\\",\\"children\\":[]}],\\"git\\":{\\"createdTime\\":1708318128000,\\"updatedTime\\":1716083751000,\\"contributors\\":[{\\"name\\":\\"chua-n\\",\\"email\\":\\"chua_n@yeah.net\\",\\"commits\\":4}]},\\"readingTime\\":{\\"minutes\\":3.11,\\"words\\":932},\\"filePathRelative\\":\\"blog/余数——周期性和分组.md\\",\\"localizedDate\\":\\"2021年6月17日\\",\\"excerpt\\":\\"<p>余数，作除法运算时剩下的数。尽管从小学起我们就反复练习加、减、乘、除的计算，但有关余数的计算只在学习除法时略见其影，事实上，无论在数学还是编程中，余数都起着非常重要的作用。因为我们将意识到，“余数就是分组”，而且它的神奇性在于，将较大的数字除一次就能分组。</p>\\\\n\\",\\"autoDesc\\":true}")\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDEwMzEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OzREQUFVLHdEQStISjs4QkEvSFMsd0RBQXVJLFdBQXBJLGtJQUFnSTtJQUNsSixpRUFBYTs4QkFEYjs4QkFvSEEsd0RBQWlLO01BcEhqSyxxREFvSEcsbUVBQWdFO01BQUEsd0RBQTJCLFNBQXRCLElBQUUsRUFBQyxFQUFFLElBQUMsWUFBVTtNQXBIeEYscURBb0g4RixLQUFHO01BQUEsd0RBQXdCLFNBQW5CLElBQUUsRUFBQyxFQUFFLElBQUMsU0FBTztNQXBIbkgscURBb0h5SCx1Q0FBb0M7OzhCQUM3Six3REFFTSxXQUZILGtDQUVEOzhCQUNGLHdEQUF1RztNQXhIdkcscURBd0hHLE9BQUs7TUFBQSx3REFBMEIsU0FBckIsR0FBQyxFQUFDLEVBQUUsSUFBQyxZQUFVO01BeEg1QixxREF3SGtDLG9FQUFpRTs7OEJBQ25HLHdEQUFpSTtNQUE3SCxFQUFFLEVBQUMsa0JBQWtCO01BQUMsUUFBUSxFQUFDLElBQUk7O01BQUMsd0RBQW9GO1FBQWpGLEtBQUssRUFBQyxlQUFlO1FBQUMsSUFBSSxFQUFDLG1CQUFtQjs7UUFBQyx3REFBOEIsY0FBeEIsbUJBQWlCOzs7OEJBQ2pILHdEQUE2QyxXQUExQyx3Q0FBc0M7OEJBQ3pDLHdEQUVhO01BRGIsd0RBQW9DLFdBQWpDLCtCQUE2Qjs7OEJBRWhDLHdEQUEwRyxXQUF2RyxxR0FBbUc7Ozs7OztBQzlIMUI7QUFDNUU7O0FBRUEsQ0FBd0o7QUFDeEosaUNBQWlDLCtCQUFlLG9CQUFvQixNQUFNOztBQUUxRSw0Q0FBZTs7QUNOMkc7QUFDMUgsMEJBQTBCLGdMQUFnTCxrUkFBa1IsZ0tBQWdLLGFBQWEscURBQXFELGFBQWEscURBQXFELGFBQWEsaUxBQWlMLGFBQWEsaURBQWlELGFBQWEsaURBQWlELGFBQWEsMEVBQTBFLGFBQWEsb0RBQW9ELGFBQWEsaUZBQWlGLGFBQWEsZ0ZBQWdGLGVBQWUsaUNBQWlDLElBQUkscVFBQXFRLGdJQUFnSSxFQUFFLEtBQUssZUFBZSxnR0FBZ0csRUFBRSwySEFBMkgsRUFBRSx5SEFBeUgsV0FBVywrRUFBK0UsZ0VBQWdFLEVBQUUsa0JBQWtCLCtCQUErQiwyUEFBMlA7QUFDdm1GIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm90ZWJvb2svLi9ib29rLy52dWVwcmVzcy8udGVtcC9wYWdlcy9ibG9nL+S9meaVsOKAlOKAlOWRqOacn+aAp+WSjOWIhue7hC5odG1sLnZ1ZT83NjBiIiwid2VicGFjazovL25vdGVib29rLy4vYm9vay8udnVlcHJlc3MvLnRlbXAvcGFnZXMvYmxvZy/kvZnmlbDigJTigJTlkajmnJ/mgKflkozliIbnu4QuaHRtbC52dWU/ZDQ3NiIsIndlYnBhY2s6Ly9ub3RlYm9vay8uL2Jvb2svLnZ1ZXByZXNzLy50ZW1wL3BhZ2VzL2Jsb2cv5L2Z5pWw4oCU4oCU5ZGo5pyf5oCn5ZKM5YiG57uELmh0bWwuanM/NjMyYyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+PGRpdj48cD7kvZnmlbDvvIzkvZzpmaTms5Xov5Dnrpfml7bliankuIvnmoTmlbDjgILlsL3nrqHku47lsI/lrabotbfmiJHku6zlsLHlj43lpI3nu4PkuaDliqDjgIHlh4/jgIHkuZjjgIHpmaTnmoTorqHnrpfvvIzkvYbmnInlhbPkvZnmlbDnmoTorqHnrpflj6rlnKjlrabkuaDpmaTms5Xml7bnlaXop4HlhbblvbHvvIzkuovlrp7kuIrvvIzml6DorrrlnKjmlbDlrabov5jmmK/nvJbnqIvkuK3vvIzkvZnmlbDpg73otbfnnYDpnZ7luLjph43opoHnmoTkvZznlKjjgILlm6DkuLrmiJHku6zlsIbmhI/or4bliLDvvIzigJzkvZnmlbDlsLHmmK/liIbnu4TigJ3vvIzogIzkuJTlroPnmoTnpZ7lpYfmgKflnKjkuo7vvIzlsIbovoPlpKfnmoTmlbDlrZfpmaTkuIDmrKHlsLHog73liIbnu4TjgII8L3A+XG48IS0tIG1vcmUgLS0+XG48aDIgaWQ9XCJfMS3mmJ/mnJ/mlbDpl67pophcIiB0YWJpbmRleD1cIi0xXCI+PGEgY2xhc3M9XCJoZWFkZXItYW5jaG9yXCIgaHJlZj1cIiNfMS3mmJ/mnJ/mlbDpl67pophcIj48c3Bhbj4xLiDmmJ/mnJ/mlbDpl67popg8L3NwYW4+PC9hPjwvaDI+XG48cD7ku6Xov5nmoLfkuIDkuKrluLjop4HnmoTpl67popjkuLrkvovvvJo8L3A+XG48YmxvY2txdW90ZT5cbjxwPuS7iuWkqeaYr+aYn+acn+aXpe+8jOmCo+S5iCAxIOS6v+WkqeS7peWQjuaYr+aYn+acn+WHoO+8nzwvcD5cbjwvYmxvY2txdW90ZT5cbjxwPuWvueS6jui/meS4qumXrumimO+8jOaIkeS7rOaYvueEtuefpemBk++8jOS4gOWRqOaciSA3IOWkqe+8jOmCo+S5iOKAnDfigJ3mmK/mmJ/mnJ/mlbDnmoTlkajmnJ/vvIzku448dT7ku4rlpKk8L3U+6LW35q+P6L+HIDcg5aSp77yM5L6/5b6q546v5YiwPHU+5ZKM5LuK5aSpPC91PuebuOWQjOeahOaYn+acn+aVsOOAguWmguaenOS7iuWkqeaYr+aYn+acn+aXpe+8jOWImSA3IOWkqeWQjuOAgTE0IOWkqeWQjuOAgTIxIOWkqeWQji4uLi4uLui/meenjeKAnDcg55qE5pW05pWw5YCN4oCd5aSp5ZCO6YO95piv5pif5pyf5pel44CC55Sx5q2k5oiR5Lus5L6/5Y+v5byV5YWl6Zmk5rOV6L+Q566X77yM55yLIDEg5Lq/5aSp6YeM5pyJ5Yeg5LiqIDcg5aSp77yM5Lmf5bCx5piv5ZGo5pyf55qE6YeN5aSN5Ye6546w5LqG5aSa5bCR5qyh77yM5Lul5L6/5bCG6L+Z5Liq6YeN5aSN5oCn5b2x5ZON5YmU6Zmk77yM5pa55L6/5oiR5Lus6Kej5Yaz6Zeu6aKY44CCPC9wPlxuPHA+5pi+54S277yM5pyJPC9wPlxuPHA+JCRcbjEwXjggXFxkaXYgNyA9MTQyODU3MTQgXFxjZG90cyAyXG4kJDwvcD5cbjxwPui/meihqOekuu+8jDEg5Lq/77yIJDEwXjgk77yJ6YeM6Z2i5pyJIDE0Mjg1NzE0IOS4quaYn+acn+aVsOWRqOacn++8jOWwhuWug+S7rOW/veeVpe+8jOaXpeWtkOS+v+ebuOW9k+S6juWPquWJjei/m+S6hiAyIOWkqe+8jOWboOatpOS7juS7iuWkqeeahOaYn+acn+aXpeW8gOWni+W+gOWQjuaVsCAyIOWkqe+8jOS+v+aYr+aYn+acn+S6jO+8jOaVheiAjCAxIOS6v+WkqeS7peWQjuW/heeEtuaYr+aYn+acnyAy44CCPC9wPlxuPGgyIGlkPVwiXzIt5pu06L+b5LiA5q2l4oCU4oCU6ZqQ6JeP55qE5ZGo5pyf5oCn5YiG57uEXCIgdGFiaW5kZXg9XCItMVwiPjxhIGNsYXNzPVwiaGVhZGVyLWFuY2hvclwiIGhyZWY9XCIjXzIt5pu06L+b5LiA5q2l4oCU4oCU6ZqQ6JeP55qE5ZGo5pyf5oCn5YiG57uEXCI+PHNwYW4+Mi4g5pu06L+b5LiA5q2l4oCU4oCU6ZqQ6JeP55qE5ZGo5pyf5oCn5YiG57uEPC9zcGFuPjwvYT48L2gyPlxuPHA+5Zyo5pif5pyf5pWw55qE6Zeu6aKY5LiK77yM5aaC5p6c5pWw5a2X5pu05aSn5ZGi77yf5q+U5aaC77yaPC9wPlxuPGJsb2NrcXVvdGU+XG48cD7ku4rlpKnmmK/mmJ/mnJ/ml6XvvIzpgqPkuYgkMTBeezEwMH0k5aSp5Lul5ZCO5piv5pif5pyf5Yeg77yfPC9wPlxuPC9ibG9ja3F1b3RlPlxuPHA+5oiR5Lus5Zu654S25Y+v5Lul5aWX55So5LmL5YmN55qE5pa55rOV6Kej5Yaz6L+Z5Liq57G75Ly855qE6Zeu6aKY77yM5L2G5piv6K+05a6e5Zyo55qEJDEwXnsxMDB9JOi/meS4quaVsOWkquWkp+S6hu+8jOiuoeeul+acuuiuoeeul+i1t+adpemDveebuOW9k+i0ueWKm++8jOaIkeS7rOmcgOimgeabtOi/m+S4gOatpeeahOaAneiAg+OAgjwvcD5cbjxwPuaIkeS7rOW5tuS4jeaApeS6juaxguWHuiQxMF57MTAwfSTvvIzogIzlj6/ku6Xlg48kMSwxMCwxMDAsMTAwMCwxMDAwMFxcY2RvdHMk6L+Z5qC377yM5L6d5qyh5aKe5YqgIDAg55qE5Liq5pWw77yM6KeC5a+f5YW26KeE5b6L77yaPC9wPlxuPHRhYmxlPlxuPHRoZWFkPlxuPHRyPlxuPHRoIHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXJcIj7mlbDlrZc8L3RoPlxuPHRoIHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXJcIj4wIOeahOS4quaVsDwvdGg+XG48dGggc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlclwiPumZpOazleiuoeeulzwvdGg+XG48dGggc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlclwiPuaYn+acn+aVsDwvdGg+XG48L3RyPlxuPC90aGVhZD5cbjx0Ym9keT5cbjx0cj5cbjx0ZCBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyXCI+JDEkPC90ZD5cbjx0ZCBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyXCI+MDwvdGQ+XG48dGQgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlclwiPiQxIFxcZGl2IDcgPSAwIFxcY2RvdHMgMSQ8L3RkPlxuPHRkIHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXJcIj4xPC90ZD5cbjwvdHI+XG48dHI+XG48dGQgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlclwiPiQxMCQ8L3RkPlxuPHRkIHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXJcIj4xPC90ZD5cbjx0ZCBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyXCI+JDEwIFxcZGl2IDcgPSAxIFxcY2RvdHMgMyQ8L3RkPlxuPHRkIHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXJcIj4zPC90ZD5cbjwvdHI+XG48dHI+XG48dGQgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlclwiPiQxMF4yJDwvdGQ+XG48dGQgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlclwiPjI8L3RkPlxuPHRkIHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXJcIj4kMTBeMiBcXGRpdiA3ID0gMTQgXFxjZG90cyAyJDwvdGQ+XG48dGQgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlclwiPjI8L3RkPlxuPC90cj5cbjx0cj5cbjx0ZCBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyXCI+JDEwXjMkPC90ZD5cbjx0ZCBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyXCI+MzwvdGQ+XG48dGQgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlclwiPiQxMF4zIFxcZGl2IDcgPSAxNDIgXFxjZG90cyA2JDwvdGQ+XG48dGQgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlclwiPjY8L3RkPlxuPC90cj5cbjx0cj5cbjx0ZCBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyXCI+JDEwXjQkPC90ZD5cbjx0ZCBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyXCI+NDwvdGQ+XG48dGQgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlclwiPiQxMF40IFxcbW9kIDcgPSA0JDwvdGQ+XG48dGQgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlclwiPjQ8L3RkPlxuPC90cj5cbjx0cj5cbjx0ZCBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyXCI+JDEwXjUkPC90ZD5cbjx0ZCBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyXCI+NTwvdGQ+XG48dGQgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlclwiPiQxMF41IFxcbW9kIDcgPSA1JDwvdGQ+XG48dGQgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlclwiPjU8L3RkPlxuPC90cj5cbjx0cj5cbjx0ZCBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyXCI+JDEwXjYkPC90ZD5cbjx0ZCBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyXCI+NjwvdGQ+XG48dGQgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlclwiPiQxMF42IFxcbW9kIDcgPSAxJDwvdGQ+XG48dGQgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlclwiPjE8L3RkPlxuPC90cj5cbjx0cj5cbjx0ZCBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyXCI+JDEwXjckPC90ZD5cbjx0ZCBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyXCI+NzwvdGQ+XG48dGQgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlclwiPiQxMF43IFxcbW9kIDcgPSAzJDwvdGQ+XG48dGQgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlclwiPjM8L3RkPlxuPC90cj5cbjx0cj5cbjx0ZCBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyXCI+JDEwXjgkPC90ZD5cbjx0ZCBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyXCI+ODwvdGQ+XG48dGQgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlclwiPiQxMF44IFxcbW9kIDcgPSAyJDwvdGQ+XG48dGQgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlclwiPjI8L3RkPlxuPC90cj5cbjx0cj5cbjx0ZCBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyXCI+JDEwXjkkPC90ZD5cbjx0ZCBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyXCI+OTwvdGQ+XG48dGQgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlclwiPiQxMF45IFxcbW9kIDcgPSA2JDwvdGQ+XG48dGQgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlclwiPjY8L3RkPlxuPC90cj5cbjx0cj5cbjx0ZCBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyXCI+JDEwXnsxMH0kPC90ZD5cbjx0ZCBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyXCI+MTA8L3RkPlxuPHRkIHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXJcIj4kMTBeezEwfSBcXG1vZCA3ID0gNCQ8L3RkPlxuPHRkIHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXJcIj40PC90ZD5cbjwvdHI+XG48dHI+XG48dGQgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlclwiPiQxMF57MTF9JDwvdGQ+XG48dGQgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlclwiPjExPC90ZD5cbjx0ZCBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyXCI+JDEwXnsxMX0gXFxtb2QgNyA9IDUkPC90ZD5cbjx0ZCBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyXCI+NTwvdGQ+XG48L3RyPlxuPHRyPlxuPHRkIHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXJcIj4kMTBeezEyfSQ8L3RkPlxuPHRkIHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXJcIj4xMjwvdGQ+XG48dGQgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlclwiPiQxMF57MTJ9IFxcbW9kIDcgPSAxJDwvdGQ+XG48dGQgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlclwiPjE8L3RkPlxuPC90cj5cbjx0cj5cbjx0ZCBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyXCI+JDEwXnsxM30kPC90ZD5cbjx0ZCBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyXCI+MTM8L3RkPlxuPHRkIHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXJcIj4kMTBeezEzfSBcXG1vZCA3ID0gMyQ8L3RkPlxuPHRkIHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXJcIj4zPC90ZD5cbjwvdHI+XG48L3Rib2R5PlxuPC90YWJsZT5cbjxwPuaIkeS7rOWPkeeOsO+8jOS9meaVsOS7pSQxLDMsMiw2LDQsNVxcY2RvdHMk55qE6aG65bqP5b6q546v77yM5Y2z5pif5pyf5pWw5Zyo6L+Z5Liq5bGC6Z2i5LiK5Lmf5aSE5LqO5b6q546v5LmL5Lit77yM5b6q546v5ZGo5pyf5Li6IDbvvIzmlYXogIwkMTA8c3VwIDk0PVwiXCI+ezEwMH0k5LiOJDEwPC9zdXA+LDEwPHN1cCA4Mj1cIlwiPns4OH0sMTA8L3N1cD5cXGNkb3RzJOeahOaYn+acn+aVsOebuOWQjO+8jOaIkeS7rOWwhuaMh+aVsOS9jee9ruWkhOeahCAxMDAg5a+5IDYg5L2c6Zmk5rOV77yaPC9wPlxuPHA+JCRcbjEwMCBcXGRpdiA2ID0gMTYgXFxjZG90cyA0XG4kJDwvcD5cbjxwPuWboOatpCQxMDxzdXAgND1cIlwiPnsxMDB9JOS4jiQxMDwvc3VwPiTnmoTmmJ/mnJ/mlbDnm7jlkIzvvIzogIzlnKjkuIrooajkuK3miJHku6zlt7Lnu4/pgJrov4ckMTBeNCBcXG1vZCA3ID0gNCTnn6XpgZPkuoYkMTBeezR9JOS4uuaYn+acnyA077yM5Zug5q2k5oiR5Lus5bey57uP5om+5Yiw5LqG562U5qGI44CCPC9wPlxuPGgyIGlkPVwiXzMt5LmY5pa55bC+5pWw55qE5ZGo5pyf5oCnLeW8guabsuWQjOW3pVwiIHRhYmluZGV4PVwiLTFcIj48YSBjbGFzcz1cImhlYWRlci1hbmNob3JcIiBocmVmPVwiI18zLeS5mOaWueWwvuaVsOeahOWRqOacn+aApy3lvILmm7LlkIzlt6VcIj48c3Bhbj4zLiDkuZjmlrnlsL7mlbDnmoTlkajmnJ/mgKfvvIjlvILmm7LlkIzlt6XvvIk8L3NwYW4+PC9hPjwvaDI+XG48cD7kuIrpnaLmiJHku6znlKjmmJ/mnJ/mlbDnmoTmoYjkvovkuLrkvovmj4/ov7DkuobkvZnmlbDnmoTkvZznlKjvvIzlhbblrp7ov5jmnInkuIDkuKrlhbjlnovnmoTpl67popjkuI7kuYvnsbvkvLzvvJo8L3A+XG48YmxvY2txdW90ZT5cbjxwPiQxMjM0NTY3Xns5ODc2NTQzMjF9JOeahOS4quS9jeaVsOaYr+S7gOS5iO+8nzwvcD5cbjwvYmxvY2txdW90ZT5cbjxwPiQxMjM0NTY3Xns5ODc2NTQzMjF9JOeahOaVsOWAvOaYvueEtuWQjOagt+Wkp+WIsOmavuS7peiuoeeul++8jOaIkeS7rOWPr+S7pemHh+eUqOWQjOagt+eahOWBmuazleino+WGs+i/meS4qumXrumimO+8jOatpOWklu+8jOeUseS6juaIkeS7rOWPquWFs+azqOS4quS9jeaVsOWtl++8jOWboOatpOWPr+WwhumrmOS9jeaVsOWtl+W/veeVpeaOieOAguWFt+S9k+iuoeeul+aWueazlei/memHjOS4jeWGjei1mOi/sO+8jOetlOahiOS4uiA344CCPC9wPlxuPC9kaXY+PC90ZW1wbGF0ZT5cblxuXG4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi/kvZnmlbDigJTigJTlkajmnJ/mgKflkozliIbnu4QuaHRtbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmJmZTI4NTBcIlxuY29uc3Qgc2NyaXB0ID0ge31cblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Z1ZS1sb2FkZXJAMTcuNC4yX3Z1ZUAzLjUuMTNfd2VicGFja0A1Ljk3LjEvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdXSlcblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgY29tcCBmcm9tIFwiL2hvbWUvcnVubmVyL3dvcmsvY2h1YS1uLmdpdGh1Yi5pby9jaHVhLW4uZ2l0aHViLmlvL2Jvb2svLnZ1ZXByZXNzLy50ZW1wL3BhZ2VzL2Jsb2cv5L2Z5pWw4oCU4oCU5ZGo5pyf5oCn5ZKM5YiG57uELmh0bWwudnVlXCJcbmNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKFwie1xcXCJwYXRoXFxcIjpcXFwiL2Jsb2cvJUU0JUJEJTk5JUU2JTk1JUIwJUUyJTgwJTk0JUUyJTgwJTk0JUU1JTkxJUE4JUU2JTlDJTlGJUU2JTgwJUE3JUU1JTkyJThDJUU1JTg4JTg2JUU3JUJCJTg0Lmh0bWxcXFwiLFxcXCJ0aXRsZVxcXCI6XFxcIuS9meaVsOKAlOKAlOWRqOacn+aAp+WSjOWIhue7hFxcXCIsXFxcImxhbmdcXFwiOlxcXCJ6aC1DTlxcXCIsXFxcImZyb250bWF0dGVyXFxcIjp7XFxcInRpdGxlXFxcIjpcXFwi5L2Z5pWw4oCU4oCU5ZGo5pyf5oCn5ZKM5YiG57uEXFxcIixcXFwiZGF0ZVxcXCI6XFxcIjIwMjEtMDYtMTdUMDk6MTY6MzYuMDAwWlxcXCIsXFxcImNhdGVnb3J5XFxcIjpbXFxcIuaVsOWtplxcXCJdLFxcXCJ0YWdcXFwiOlxcXCJjb2RpbmdcXFwiLFxcXCJkZXNjcmlwdGlvblxcXCI6XFxcIuS9meaVsO+8jOS9nOmZpOazlei/kOeul+aXtuWJqeS4i+eahOaVsOOAguWwveeuoeS7juWwj+Wtpui1t+aIkeS7rOWwseWPjeWkjee7g+S5oOWKoOOAgeWHj+OAgeS5mOOAgemZpOeahOiuoeeul++8jOS9huacieWFs+S9meaVsOeahOiuoeeul+WPquWcqOWtpuS5oOmZpOazleaXtueVpeingeWFtuW9se+8jOS6i+WunuS4iu+8jOaXoOiuuuWcqOaVsOWtpui/mOaYr+e8lueoi+S4re+8jOS9meaVsOmDvei1t+edgOmdnuW4uOmHjeimgeeahOS9nOeUqOOAguWboOS4uuaIkeS7rOWwhuaEj+ivhuWIsO+8jOKAnOS9meaVsOWwseaYr+WIhue7hOKAne+8jOiAjOS4lOWug+eahOelnuWlh+aAp+WcqOS6ju+8jOWwhui+g+Wkp+eahOaVsOWtl+mZpOS4gOasoeWwseiDveWIhue7hOOAglxcXCIsXFxcImhlYWRcXFwiOltbXFxcIm1ldGFcXFwiLHtcXFwicHJvcGVydHlcXFwiOlxcXCJvZzp1cmxcXFwiLFxcXCJjb250ZW50XFxcIjpcXFwiaHR0cHM6Ly9jaHVhLW4uY29tL2Jsb2cvJUU0JUJEJTk5JUU2JTk1JUIwJUUyJTgwJTk0JUUyJTgwJTk0JUU1JTkxJUE4JUU2JTlDJTlGJUU2JTgwJUE3JUU1JTkyJThDJUU1JTg4JTg2JUU3JUJCJTg0Lmh0bWxcXFwifV0sW1xcXCJtZXRhXFxcIix7XFxcInByb3BlcnR5XFxcIjpcXFwib2c6c2l0ZV9uYW1lXFxcIixcXFwiY29udGVudFxcXCI6XFxcIuiNkua1geeahOeslOi2o+Wxi1xcXCJ9XSxbXFxcIm1ldGFcXFwiLHtcXFwicHJvcGVydHlcXFwiOlxcXCJvZzp0aXRsZVxcXCIsXFxcImNvbnRlbnRcXFwiOlxcXCLkvZnmlbDigJTigJTlkajmnJ/mgKflkozliIbnu4RcXFwifV0sW1xcXCJtZXRhXFxcIix7XFxcInByb3BlcnR5XFxcIjpcXFwib2c6ZGVzY3JpcHRpb25cXFwiLFxcXCJjb250ZW50XFxcIjpcXFwi5L2Z5pWw77yM5L2c6Zmk5rOV6L+Q566X5pe25Ymp5LiL55qE5pWw44CC5bC9566h5LuO5bCP5a2m6LW35oiR5Lus5bCx5Y+N5aSN57uD5Lmg5Yqg44CB5YeP44CB5LmY44CB6Zmk55qE6K6h566X77yM5L2G5pyJ5YWz5L2Z5pWw55qE6K6h566X5Y+q5Zyo5a2m5Lmg6Zmk5rOV5pe255Wl6KeB5YW25b2x77yM5LqL5a6e5LiK77yM5peg6K665Zyo5pWw5a2m6L+Y5piv57yW56iL5Lit77yM5L2Z5pWw6YO96LW3552A6Z2e5bi46YeN6KaB55qE5L2c55So44CC5Zug5Li65oiR5Lus5bCG5oSP6K+G5Yiw77yM4oCc5L2Z5pWw5bCx5piv5YiG57uE4oCd77yM6ICM5LiU5a6D55qE56We5aWH5oCn5Zyo5LqO77yM5bCG6L6D5aSn55qE5pWw5a2X6Zmk5LiA5qyh5bCx6IO95YiG57uE44CCXFxcIn1dLFtcXFwibWV0YVxcXCIse1xcXCJwcm9wZXJ0eVxcXCI6XFxcIm9nOnR5cGVcXFwiLFxcXCJjb250ZW50XFxcIjpcXFwiYXJ0aWNsZVxcXCJ9XSxbXFxcIm1ldGFcXFwiLHtcXFwicHJvcGVydHlcXFwiOlxcXCJvZzpsb2NhbGVcXFwiLFxcXCJjb250ZW50XFxcIjpcXFwiemgtQ05cXFwifV0sW1xcXCJtZXRhXFxcIix7XFxcInByb3BlcnR5XFxcIjpcXFwib2c6dXBkYXRlZF90aW1lXFxcIixcXFwiY29udGVudFxcXCI6XFxcIjIwMjQtMDUtMTlUMDE6NTU6NTEuMDAwWlxcXCJ9XSxbXFxcIm1ldGFcXFwiLHtcXFwicHJvcGVydHlcXFwiOlxcXCJhcnRpY2xlOnRhZ1xcXCIsXFxcImNvbnRlbnRcXFwiOlxcXCJjb2RpbmdcXFwifV0sW1xcXCJtZXRhXFxcIix7XFxcInByb3BlcnR5XFxcIjpcXFwiYXJ0aWNsZTpwdWJsaXNoZWRfdGltZVxcXCIsXFxcImNvbnRlbnRcXFwiOlxcXCIyMDIxLTA2LTE3VDA5OjE2OjM2LjAwMFpcXFwifV0sW1xcXCJtZXRhXFxcIix7XFxcInByb3BlcnR5XFxcIjpcXFwiYXJ0aWNsZTptb2RpZmllZF90aW1lXFxcIixcXFwiY29udGVudFxcXCI6XFxcIjIwMjQtMDUtMTlUMDE6NTU6NTEuMDAwWlxcXCJ9XSxbXFxcInNjcmlwdFxcXCIse1xcXCJ0eXBlXFxcIjpcXFwiYXBwbGljYXRpb24vbGQranNvblxcXCJ9LFxcXCJ7XFxcXFxcXCJAY29udGV4dFxcXFxcXFwiOlxcXFxcXFwiaHR0cHM6Ly9zY2hlbWEub3JnXFxcXFxcXCIsXFxcXFxcXCJAdHlwZVxcXFxcXFwiOlxcXFxcXFwiQXJ0aWNsZVxcXFxcXFwiLFxcXFxcXFwiaGVhZGxpbmVcXFxcXFxcIjpcXFxcXFxcIuS9meaVsOKAlOKAlOWRqOacn+aAp+WSjOWIhue7hFxcXFxcXFwiLFxcXFxcXFwiaW1hZ2VcXFxcXFxcIjpbXFxcXFxcXCJcXFxcXFxcIl0sXFxcXFxcXCJkYXRlUHVibGlzaGVkXFxcXFxcXCI6XFxcXFxcXCIyMDIxLTA2LTE3VDA5OjE2OjM2LjAwMFpcXFxcXFxcIixcXFxcXFxcImRhdGVNb2RpZmllZFxcXFxcXFwiOlxcXFxcXFwiMjAyNC0wNS0xOVQwMTo1NTo1MS4wMDBaXFxcXFxcXCIsXFxcXFxcXCJhdXRob3JcXFxcXFxcIjpbe1xcXFxcXFwiQHR5cGVcXFxcXFxcIjpcXFxcXFxcIlBlcnNvblxcXFxcXFwiLFxcXFxcXFwibmFtZVxcXFxcXFwiOlxcXFxcXFwi6I2S5rWBXFxcXFxcXCIsXFxcXFxcXCJ1cmxcXFxcXFxcIjpcXFxcXFxcImh0dHBzOi8vY2h1YS1uLmNvbVxcXFxcXFwiLFxcXFxcXFwiZW1haWxcXFxcXFxcIjpcXFxcXFxcImNodWFfbkBxcS5jb21cXFxcXFxcIn1dfVxcXCJdXX0sXFxcImhlYWRlcnNcXFwiOlt7XFxcImxldmVsXFxcIjoyLFxcXCJ0aXRsZVxcXCI6XFxcIjEuIOaYn+acn+aVsOmXrumimFxcXCIsXFxcInNsdWdcXFwiOlxcXCJfMS3mmJ/mnJ/mlbDpl67pophcXFwiLFxcXCJsaW5rXFxcIjpcXFwiI18xLeaYn+acn+aVsOmXrumimFxcXCIsXFxcImNoaWxkcmVuXFxcIjpbXX0se1xcXCJsZXZlbFxcXCI6MixcXFwidGl0bGVcXFwiOlxcXCIyLiDmm7Tov5vkuIDmraXigJTigJTpmpDol4/nmoTlkajmnJ/mgKfliIbnu4RcXFwiLFxcXCJzbHVnXFxcIjpcXFwiXzIt5pu06L+b5LiA5q2l4oCU4oCU6ZqQ6JeP55qE5ZGo5pyf5oCn5YiG57uEXFxcIixcXFwibGlua1xcXCI6XFxcIiNfMi3mm7Tov5vkuIDmraXigJTigJTpmpDol4/nmoTlkajmnJ/mgKfliIbnu4RcXFwiLFxcXCJjaGlsZHJlblxcXCI6W119LHtcXFwibGV2ZWxcXFwiOjIsXFxcInRpdGxlXFxcIjpcXFwiMy4g5LmY5pa55bC+5pWw55qE5ZGo5pyf5oCn77yI5byC5puy5ZCM5bel77yJXFxcIixcXFwic2x1Z1xcXCI6XFxcIl8zLeS5mOaWueWwvuaVsOeahOWRqOacn+aApy3lvILmm7LlkIzlt6VcXFwiLFxcXCJsaW5rXFxcIjpcXFwiI18zLeS5mOaWueWwvuaVsOeahOWRqOacn+aApy3lvILmm7LlkIzlt6VcXFwiLFxcXCJjaGlsZHJlblxcXCI6W119XSxcXFwiZ2l0XFxcIjp7XFxcImNyZWF0ZWRUaW1lXFxcIjoxNzA4MzE4MTI4MDAwLFxcXCJ1cGRhdGVkVGltZVxcXCI6MTcxNjA4Mzc1MTAwMCxcXFwiY29udHJpYnV0b3JzXFxcIjpbe1xcXCJuYW1lXFxcIjpcXFwiY2h1YS1uXFxcIixcXFwiZW1haWxcXFwiOlxcXCJjaHVhX25AeWVhaC5uZXRcXFwiLFxcXCJjb21taXRzXFxcIjo0fV19LFxcXCJyZWFkaW5nVGltZVxcXCI6e1xcXCJtaW51dGVzXFxcIjozLjExLFxcXCJ3b3Jkc1xcXCI6OTMyfSxcXFwiZmlsZVBhdGhSZWxhdGl2ZVxcXCI6XFxcImJsb2cv5L2Z5pWw4oCU4oCU5ZGo5pyf5oCn5ZKM5YiG57uELm1kXFxcIixcXFwibG9jYWxpemVkRGF0ZVxcXCI6XFxcIjIwMjHlubQ25pyIMTfml6VcXFwiLFxcXCJleGNlcnB0XFxcIjpcXFwiPHA+5L2Z5pWw77yM5L2c6Zmk5rOV6L+Q566X5pe25Ymp5LiL55qE5pWw44CC5bC9566h5LuO5bCP5a2m6LW35oiR5Lus5bCx5Y+N5aSN57uD5Lmg5Yqg44CB5YeP44CB5LmY44CB6Zmk55qE6K6h566X77yM5L2G5pyJ5YWz5L2Z5pWw55qE6K6h566X5Y+q5Zyo5a2m5Lmg6Zmk5rOV5pe255Wl6KeB5YW25b2x77yM5LqL5a6e5LiK77yM5peg6K665Zyo5pWw5a2m6L+Y5piv57yW56iL5Lit77yM5L2Z5pWw6YO96LW3552A6Z2e5bi46YeN6KaB55qE5L2c55So44CC5Zug5Li65oiR5Lus5bCG5oSP6K+G5Yiw77yM4oCc5L2Z5pWw5bCx5piv5YiG57uE4oCd77yM6ICM5LiU5a6D55qE56We5aWH5oCn5Zyo5LqO77yM5bCG6L6D5aSn55qE5pWw5a2X6Zmk5LiA5qyh5bCx6IO95YiG57uE44CCPC9wPlxcXFxuXFxcIixcXFwiYXV0b0Rlc2NcXFwiOnRydWV9XCIpXG5leHBvcnQgeyBjb21wLCBkYXRhIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///41031\n')},81021:(__unused_webpack_module,exports)=>{eval("var __webpack_unused_export__;\n\n__webpack_unused_export__ = ({ value: true });\n// runtime helper for setting properties on components\n// in a tree-shakable way\nexports.A = (sfc, props) => {\n    const target = sfc.__vccOpts || sfc;\n    for (const [key, val] of props) {\n        target[key] = val;\n    }\n    return target;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODEwMjEuanMiLCJtYXBwaW5ncyI6IjtBQUFhO0FBQ2IsNkJBQTZDLEVBQUUsYUFBYSxDQUFDO0FBQzdEO0FBQ0E7QUFDQSxTQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm90ZWJvb2svLi9ub2RlX21vZHVsZXMvLnBucG0vdnVlLWxvYWRlckAxNy40LjJfdnVlQDMuNS4xM193ZWJwYWNrQDUuOTcuMS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qcz8yNmM5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gcnVudGltZSBoZWxwZXIgZm9yIHNldHRpbmcgcHJvcGVydGllcyBvbiBjb21wb25lbnRzXG4vLyBpbiBhIHRyZWUtc2hha2FibGUgd2F5XG5leHBvcnRzLmRlZmF1bHQgPSAoc2ZjLCBwcm9wcykgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IHNmYy5fX3ZjY09wdHMgfHwgc2ZjO1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBwcm9wcykge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbDtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///81021\n")}}]);