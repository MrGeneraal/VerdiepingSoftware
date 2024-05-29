import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import HelloWorld from '../src/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders the initial message', () => {
    const wrapper = mount(HelloWorld);
    expect(wrapper.find('h1').text()).toBe('Welcome to Your Vue.js App');
  });

  it('has a button that increments the counter', async () => {
    const wrapper = mount(HelloWorld);
    
    expect(wrapper.find('p').text()).toBe("You've clicked the button 0 times.");

    const button = wrapper.find('button');
    await button.trigger('click');
    
    expect(wrapper.find('p').text()).toBe("You've clicked the button 1 times.");

    await button.trigger('click');
    
    expect(wrapper.find('p').text()).toBe("You've clicked the button 2 times.");
  });
});
