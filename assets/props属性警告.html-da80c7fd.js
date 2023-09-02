import{_ as t,r,o,c as v,a as e,d as l,w as s,b as n,e as d}from"./app-95a90fc2.js";const u={},c=e("meta",{name:"referrer",content:"no-referrer"},null,-1),p=e("h1",{id:"在组件中-v-model-props-属性时-报错了怎么解决",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#在组件中-v-model-props-属性时-报错了怎么解决","aria-hidden":"true"},"#"),n(" 在组件中，v-model props 属性时，报错了怎么解决")],-1),m=e("p",null,"目录",-1),h={class:"table-of-contents"},b=d('<h2 id="当v-model-propsval-时-警告" tabindex="-1"><a class="header-anchor" href="#当v-model-propsval-时-警告" aria-hidden="true">#</a> 当v-model=&quot;propsVal&quot;时,警告</h2><div class="custom-container warning"><p class="custom-container-title">警告信息</p><p>  [Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a <strong>data</strong> or <strong>computed</strong> property <strong>based on the prop&#39;s value</strong>. Prop being mutated: &quot;propsVal&quot;</p></div><p>之所以会警告，是因为破坏了<strong>单向数据流</strong>，建议看看官方文档：</p>',3),_={href:"https://v2.cn.vuejs.org/v2/guide/components-props.html#%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81",target:"_blank",rel:"noopener noreferrer"},g={href:"https://cn.vuejs.org/guide/components/props.html#one-way-data-flow",target:"_blank",rel:"noopener noreferrer"},V=d(`<p>假定在组件中,使用<strong>v-model = &quot;modelVal&quot;</strong>，根据官方提示信息和官方文档，可以有方法一和方法二：</p><h2 id="方法一-利用data" tabindex="-1"><a class="header-anchor" href="#方法一-利用data" aria-hidden="true">#</a> 方法一：利用data</h2><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>  // 缺点：当propsVal改变时，modelVal并不会随propsVal的改变而改变
    props: [&quot;propsVal&quot;],
    data(){
		return {
			modelVal : this.propsVal
		}
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法二-利用计算属性" tabindex="-1"><a class="header-anchor" href="#方法二-利用计算属性" aria-hidden="true">#</a> 方法二：利用计算属性</h2><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>  // 缺点：同方法一
    props: [&quot;propsVal&quot;],
    computed: {
        modelVal: {
            function () {
                return this.propsVal
            }
        }
        // 或者
        //modelVal: {
        //    get: function () {
        //        return this.propsVal
        //    },
        //    set: function (val) {  //要提供setter,不然报错
        //        console.log(val)
        //    }
        //}
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法三-利用watch" tabindex="-1"><a class="header-anchor" href="#方法三-利用watch" aria-hidden="true">#</a> 方法三：利用watch</h2><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>  // 对方法一的改进，modelVal可以跟着propsVal改变
    props: [&quot;propsVal&quot;],
    watch: {
        propsVal:function(newVal,oldVal){
            console.log(val,oldVal)
            this.modelVal = val //监听propsVal值，改变data里的modelVal
        }
    }
    data(){
		return {
			modelVal : this.propsVal
		}
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如，进一步封装elementUI等第三方UI组件库时，在使用**v-model = “modelVal”**时，不要破坏单向数据流。</p>`,8);function f(w,x){const a=r("router-link"),i=r("ExternalLinkIcon");return o(),v("div",null,[c,p,m,e("nav",h,[e("ul",null,[e("li",null,[l(a,{to:"#当v-model-propsval-时-警告"},{default:s(()=>[n('当v-model="propsVal"时,警告')]),_:1})]),e("li",null,[l(a,{to:"#方法一-利用data"},{default:s(()=>[n("方法一：利用data")]),_:1})]),e("li",null,[l(a,{to:"#方法二-利用计算属性"},{default:s(()=>[n("方法二：利用计算属性")]),_:1})]),e("li",null,[l(a,{to:"#方法三-利用watch"},{default:s(()=>[n("方法三：利用watch")]),_:1})])])]),b,e("ul",null,[e("li",null,[n("vue2: "),e("a",_,[n("Prop — Vue.js (vuejs.org) 单向数据流"),l(i)])]),e("li",null,[n("vue3: "),e("a",g,[n("Props | Vue.js (vuejs.org) 单向数据流"),l(i)])])]),V])}const E=t(u,[["render",f],["__file","props属性警告.html.vue"]]);export{E as default};
