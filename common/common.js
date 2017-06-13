var title = new Vue({
	el: '#title',
	data: {
		message: 'SURAJUNG:PORTFOLIO'
	}
})
// desc-item 이름을 가진 컴포넌트를 정의합니다
Vue.component('desc-item', {
  template: '<li>조성창의 포트폴리오입니다.(<a href="http://hdoc79.tistory.com/" target="_blank">blog</a>)</li>'
})
//Vue.instance
var nav1 = new Vue({
  el: '#nav1',
  methods: {
    scroll: function () {
		goToByScroll()
    }
  },
  data: {
    items: [
      { message: '싸이홈' },
      { message: '스쿱' }
    ]
  }
})
var nav2 = new Vue({
  el: '#nav2',
  methods: {
    scroll: function () {
		this.goToByScroll()
    }
  },
  data: {
    items: [
      { message: '맘켓' },
      { message: 'Genie' }
    ]
  }
})
Vue.component('preview-component', {
	template: '<dl><dt>'+nav1.items.push({ message })+'</dt><dd class="btnTop"></dd><dd class="siteThum"></dd><dd><ul><li></li></ul></dd></dl>'
})
// 루트 인스턴스 생성
new Vue({
  el: '#portfolid-preview'
})