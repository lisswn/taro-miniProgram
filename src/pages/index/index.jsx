import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'
import {connect} from "@tarojs/redux"

@connect(({home}) => ({
  ...home
}))

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () {
    this.props.dispatch({
      type: 'home/getHomeInfo',
      payload: {
        aaa: 'xxx'
      }
    })
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const {homeInfo} = this.props
    console.log(homeInfo)
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
