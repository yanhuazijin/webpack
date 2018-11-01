import components from './mobile.components';
let {
  ActionBar,
  ActivityIndicator,
  Button,
  DropMenu,
  Icon,
  ImageReader,
  imageProcessor,
  ImageViewer,
  NoticeBar,
  Stepper,
  Steps,
  Swiper,
  SwiperItem,
  TabBar,
  Tabs,
  Tag,
  Amount,
  Captcha,
  Cashier,
  Chart,
  Landscape,
  ResultPage,
  ActionSheet,
  DatePicker,
  Dialog,
  Picker,
  Popup,
  PopupTitleBar,
  Selector,
  TabPicker,
  Tip,
  Toast,
  Agree,
  CheckGroup,
  CheckBox,
  CheckList,
  Codebox,
  Field,
  FieldItem,
  InputItem,
  NumberKeyboard,
  Radio,
  Switch,
  ScrollView,
  ScrollViewRefresh,
  ScrollViewMore
} = components;

// 集合组件暴露
export {
  ActionBar,
  ActivityIndicator,
  Button,
  DropMenu,
  Icon,
  ImageReader,
  imageProcessor,
  ImageViewer,
  NoticeBar,
  Stepper,
  Steps,
  Swiper,
  SwiperItem,
  TabBar,
  Tabs,
  Tag,
  Amount,
  Captcha,
  Cashier,
  Chart,
  Landscape,
  ResultPage,
  ActionSheet,
  DatePicker,
  Dialog,
  Picker,
  Popup,
  PopupTitleBar,
  Selector,
  TabPicker,
  Tip,
  Toast,
  Agree,
  CheckGroup,
  CheckBox,
  CheckList,
  Codebox,
  Field,
  FieldItem,
  InputItem,
  NumberKeyboard,
  Radio,
  Switch,
  ScrollView,
  ScrollViewRefresh,
  ScrollViewMore
}

// 定义插件安装方法
const install = function(vx) {
  if (!vx || install.installed) {
    return
  }
  const componentsNames = Object.keys(components)
  componentsNames.forEach(name => {
    const component = components[name]
    component.name && vx.component(component.name, component)
  })

  // 全局服务注入
  vx.prototype.$toast = components.Toast
  vx.prototype.$dialog = components.Dialog
  vx.prototype.$sheet = components.ActionSheet
}

if (typeof window !== 'undefined' && window.vx) {
  install(window.vx)
}

export default {install}
