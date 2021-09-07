import MsgBox from './MsgBox.vue'
import Vue from 'vue'

const vm = new Vue({
  render: h => h(MsgBox)
}).$mount()

const box: MsgBox = vm.$children[0];
let handle: ReturnType<typeof setTimeout>;

function showBox() {
  document.body.appendChild(vm.$el)
  if (handle) clearInterval(handle)
  handle = setTimeout(() => {
    document.body.removeChild(vm.$el)
  }, 1500)
}

export default {
  /**
   * 成功弹窗（绿）
   * @param msg 输入框信息
   * @param setBG 是否设置背景颜色（首页不用设，标识页要设）
   */
  success(msg: string, setBg: boolean = true) {
    box.$data.boxData = {
      color: '#008000',
      picSrc: require('@/assets/images/msg-box/succeed.png'),
      showMsg: msg,
      bgColor: setBg ? '#B5FFB5' : '',
    }
    showBox();
  },
  /**
   * 失败弹窗（红）
   * @param msg 输入框信息
   * @param setBG 是否设置背景颜色（首页不用设，标识页要设）
   */
  error(msg: string, setBg: boolean = true) {
    box.$data.boxData = {
      color: '#8B0000',
      picSrc: require('@/assets/images/msg-box/error.png'),
      showMsg: msg,
      bgColor: setBg ? '#FFB5B5' : '',
    }
    showBox();
  },
  /**
   * 提示弹窗（土黄）
   * @param msg 输入框信息
   */
  tip(msg: string) {
    box.$data.boxData = {
      color: '#B05800',
      picSrc: require('@/assets/images/msg-box/tip.png'),
      showMsg: msg,
    }
    showBox();
  }
}