import {
  ActionBar,
  ActivityIndicator,
  Button,
  DropMenu,
  Icon,
  ImageReader,
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
} from 'mand-mobile';

import imageProcessor from 'mand-mobile/lib/image-reader/image-processor' // 图片处理插件

let mobileComponents = {
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
};

function reName(components) {
  for(let value of Object.values(components)){
    if(typeof value === 'object' && value.name){
      value.name = value.name.replace('md', 'ui')
    }
  }
}
reName(mobileComponents)

export default mobileComponents


