/**
 * Created by YOU on 2018/6/11.
 */
function Vue(el, data, template) {
  if (this.constructor !== Vue) {
    throw new Error('Vue cannot be invoked without \'new\'')
  }
  this.$el = el
  this.data = data
}

function Compiler(_this, options) {
  _this.name = 'CG';
  _this.age = 24
}

function ViewModel(options) {
  new Compiler(this, options)
}