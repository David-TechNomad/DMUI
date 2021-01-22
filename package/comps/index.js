import './styles/index.scss'

import Tag from './components/tag/index'
import LoadMore from './components/loadmore/index'
import Search from './components/search/index'
import Loading from './components/loading/index'
import Step from './components/step/index'
import Input from './components/input/index'
import Textarea from './components/textarea/index'
import Select from './components/select/index'
import Switch from './components/switch/index'
import Skeleton from './components/skeleton/index'
import Navbar from './components/navbar/index'
import Actionsheet from './components/actionsheet/index'
import Popup from './components/popup/index'
import Lazy from './components/lazy/index'
import KeyBoard from './components/keyboard/index'
import Table from './components/table/index'
import Progress from './components/progress/index'
import Carousel from './components/carousel/index'
import CarouselItem from './components/carousel-item/index'
import DatePicker from './components/date-picker/index.js';
import DMTabs from './components/tabs/index.js';
import TabPane from './components/tab-pane/index.js';
import Button from './components/button/index'
import Tabbar from './components/tabbar/index'
import Radio from './components/radio/index'
import Checkbox from './components/checkbox/index'
import Grid from './components/grid/index'
import Modal from './components/modal/index'
import SpModal from './components/spmodal/index'
import CellGroup from './components/cell/index'
import Flexbox from './components/flexbox/index'
import SeamlessScroll from './components/seamlessscroll/index'

import GlobalModal from './components/globalmodal/index'
import Toast from './components/toast/index'
import Scrollbar from './components/scrollbar/index.js';

const components = {
  Button,
  ButtonGroup: Button.group,
  Tag,
  LoadMore,
  Search,
  Modal,
  SpModal,
  Loading,
  Step,
  Input,
  Textarea,
  Select,
  Switch,
  Skeleton,
  TabbarItem: Tabbar.item,
  Tabbar,
  Navbar,
  Actionsheet,
  Popup,
  Lazy,
  KeyBoard,
  Radio,
  RadioGroup: Radio.group,
  Checkbox,
  CheckboxGroup: Checkbox.group,
  Grid,
  Grids: Grid.group,
  CellItem: CellGroup.item,
  CellGroup,
  FlexboxItem: Flexbox.item,
  Flexbox,
  SeamlessScrollItem: SeamlessScroll.item,
  SeamlessScroll,
  Table,
  Progress,
  Carousel,
  CarouselItem,
  DatePicker,
  Scrollbar,
  DMTabs,
  TabPane,
}

const install = function (Vue) {
  if (install.installed) return
  // components.map(component => Vue.component(component.name, component))
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })

  Vue.prototype.$modal = GlobalModal
  Vue.prototype.$toast = Toast
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  install,
  ...components
}

export default API
