import { createApp, h } from 'vue'
import {
  Avatar,
  Layout,
  Button,
  Breadcrumb,
  Spin,
  Result,
  Card,
  Divider,
  Col,
  Row,
  Drawer,
  Table,
  Form,
  InputNumber,
  Tag,
  PageHeader,
  Menu,
  Space,
  Image,
  Radio,
  Checkbox
} from 'ant-design-vue'
import router from './router'
import App from './App.vue'

const app = createApp({
  render: () => h(App)
})
app.config.productionTip = false
app.use(Avatar)
app.use(Layout)
app.use(Button)
app.use(Breadcrumb)
app.use(Spin)
app.use(Result)
app.use(Card)
app.use(Divider)
app.use(Col)
app.use(Row)
app.use(Drawer)
app.use(Table)
app.use(Form)
app.use(InputNumber)
app.use(Tag)
app.use(PageHeader)
app.use(Menu)
app.use(Space)
app.use(Image)
app.use(router)
app.use(Radio)
app.use(Checkbox)
app.mount('#app')
