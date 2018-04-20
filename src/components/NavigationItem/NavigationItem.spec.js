import { shallow, mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';

import {
  PATH_TYPE_NONE,
  PATH_TYPE_ELEMENT,
  PATH_TYPE_ROUTE,
  PATH_TYPE_EXTERNAL,
} from '../../config';
import NavigationItem from './NavigationItem';

const textItem = {
  name: 'Contact',
  meta: {
    pathType: PATH_TYPE_NONE,
  },
};

const elementItem = {
  name: 'Contact',
  element: 'contact',
  meta: {
    pathType: PATH_TYPE_ELEMENT,
    path: '/#contact',
  },
};

const routeItem = {
  name: 'About',
  route: 'about',
  meta: {
    pathType: PATH_TYPE_ROUTE,
    path: '/about',
  },
};

const externalItem = {
  name: 'Github',
  external: 'http://github.com',
  meta: {
    pathType: PATH_TYPE_EXTERNAL,
    path: 'http://github.com',
  },
};

describe('NavigationItem ', () => {
  context('for a label item', () => {
    it('renders a span containing the item name', () => {
      const wrapper = shallow(NavigationItem, {
        propsData: {
          item: textItem,
        },
      });

      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  context('for an external item', () => {
    it('renders a hyperlink with a correct value, location and blank target', () => {
      const wrapper = shallow(NavigationItem, {
        propsData: {
          item: externalItem,
        },
      });

      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  context('without router', () => {
    context('for an element item', () => {
      let wrapper;

      beforeEach(() => {
        wrapper = shallow(NavigationItem, {
          propsData: {
            item: elementItem,
          },
        });
      });

      it('renders a hyperlink with a correct location and text', () => {
        expect(wrapper.html()).toMatchSnapshot();
      });

      it('assigns link class to the hyperlink', () => {
        expect(wrapper.find('a').classes()).toContain('NavigationItem__link');
      });
    });

    context('for a route item', () => {
      let wrapper;

      beforeEach(() => {
        wrapper = shallow(NavigationItem, {
          propsData: {
            item: routeItem,
          },
        });
      });

      it('renders a hyperlink with a correct location and text', () => {
        expect(wrapper.html()).toMatchSnapshot();
      });

      it('assigns link class to the hyperlink', () => {
        expect(wrapper.find('a').classes()).toContain('NavigationItem__link');
      });
    });
  });

  context('with router', () => {
    let localVue;
    let router;

    beforeAll(() => {
      localVue = createLocalVue();
      localVue.use(VueRouter);
      router = new VueRouter({});
    });

    context('for an element item', () => {
      let wrapper;

      beforeEach(() => {
        wrapper = mount(NavigationItem, {
          localVue,
          router,
          propsData: {
            item: elementItem,
          },
        });
      });

      it('renders a hyperlink with a correct location and text', () => {
        expect(wrapper.html()).toMatchSnapshot();
      });

      it('assigns router-link class to the hyperlink', () => {
        expect(wrapper.find('a').classes()).toContain(
          'NavigationItem__router-link'
        );
      });
    });

    context('for a route item', () => {
      let wrapper;

      beforeEach(() => {
        wrapper = mount(NavigationItem, {
          localVue,
          router,
          propsData: {
            item: routeItem,
          },
        });
      });

      it('renders a hyperlink with a correct location and text', () => {
        expect(wrapper.html()).toMatchSnapshot();
      });

      it('assigns router-link class to the hyperlink', () => {
        expect(wrapper.find('a').classes()).toContain(
          'NavigationItem__router-link'
        );
      });
    });
  });
});
