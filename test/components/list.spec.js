import { mount } from '@vue/test-utils'
import List from '~/components/list.vue'

describe('List component spec', () => {
  test('returns expected list', () => {
    const wrapper = mount(List, {
      propsData: {
        items: [
          'Username',
          'Emails'
        ]
      }
    })
    const items = ['Username', 'Emails']
    items.forEach(item => {
      expect(wrapper.text()).toContain(item)
    })
  })
})