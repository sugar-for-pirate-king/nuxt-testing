import { mount } from '@vue/test-utils'
import PagesIndex from '~/pages/index.vue' 
import Vue from 'vue'

describe('Root page spec', () => {
  test("returns hello world message", () => {
    const wrapper = mount(PagesIndex, {
      stubs: ['ListComponent']
    })
    expect(wrapper.text()).toContain('Hello, world')
  })

  test('not ro returns secret text', () => {
    const wrapper = mount(PagesIndex, {
      stubs: ['ListComponent']
    })
    expect(wrapper.text()).not.toContain('This is secret text')
  })

  test('returns expected list items', () => {
    const wrapper = mount(PagesIndex, {
      data() {
        return {
          lists: [
            'Username', 
            'Email'
          ]
        }
      },
      stubs: ['ListComponent']
    })
    const lists = ['Username', 'Email']
    lists.forEach(listItem  => {
      expect(wrapper.text()).toContain(listItem)
    })
  })

  test('returns employee name', async () => {
    const wrapper = mount(PagesIndex, {
      stubs: ['ListComponent']
    })
    const fetchEmployeeButton = wrapper.find('#fetch-employee')
    const sinon = require('sinon');
    const mockEmployee = {
      employee_name: 'Budi'
    }
    wrapper.vm.fetchEmployee = sinon.fake.returns(mockEmployee) 
    fetchEmployeeButton.trigger('click')
    await Vue.nextTick()
    expect(wrapper.text()).toContain('Employee name: Budi')
  })
})