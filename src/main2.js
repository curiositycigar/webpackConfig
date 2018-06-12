/**
 * Created by YOU on 2018/6/11.
 */
window.setTimeout(function () {
  // 懒加载
  import('./util').then((data) => {
    console.log(data)
  })
}, 3000)
