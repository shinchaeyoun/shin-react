/* eslint-disable */
import {
  configureStore,
  createSlice
} from '@reduxjs/toolkit';

import { ReactComponent as Tools } from './assets/images/menu.svg';


let categorys = createSlice({
  name: 'categorys',
  initialState: [
    {
      name: 'all',
      link: '/',
      icon: <Tools width='18px' height='18px'/>
    },
    {
      name: 'API',
      link: '/api',
      icon: <Tools width='18px' height='18px'/>
    },
    {
      name: 'Browser Extensions',
      link: '/browser-extensions',
      icon: <Tools width='18px' height='18px'/>
    },
    {
      name: 'CSS Frameworks',
      link: '/css-frameworks',
      icon: <Tools width='18px' height='18px'/>
    },
    {
      name: 'Career',
      link: '/career',
      icon: <Tools width='18px' height='18px'/>
    },
    {
      name: 'Charts',
      link: '/charts',
      icon: <Tools width='18px' height='18px'/>
    },
    {
      name: 'Cheatsheets',
      link: '/cheatsheets',
      icon: <Tools width='18px' height='18px'/>
    },
    {
      name: 'Code Automation',
      link: '/code-automation',
      icon: <Tools width='18px' height='18px'/>
    },
    {
      name: 'Content & Writing',
      link: '/content-and-writing',
      icon: <Tools width='18px' height='18px'/>
    },
    {
      name: 'Design Mockup',
      link: '/design-mockup',
      icon: <Tools width='18px' height='18px'/>
    },
    {
      name: 'Design Resources',
      link: '/design-resources',
      icon: <Tools width='18px' height='18px'/>
    },
    {
      name: 'Design Tools',
      link: '/design-tools',
      icon: <Tools width='18px' height='18px'/>
    },
    {
      name: 'Developer Productivity',
      link: '/developer-productivity',
      icon: <Tools width='18px' height='18px'/>
    },
    {
      name: 'Developer Resources',
      link: '/developer-resources',
      icon: <Tools width='18px' height='18px'/>
    },
    {
      name: 'Developer Tools',
      link: '/developer-tools',
      icon: <Tools width='18px' height='18px'/>
    },
    {
      name: 'Education',
      link: '/education',
      icon: <Tools width='18px' height='18px'/>
    },
    {
      name: 'Email Builders',
      link: '/email-builders',
      icon: <Tools width='18px' height='18px'/>
    },
    {
      name: 'Email Tools',
      link: '/email-tools',
      icon: <Tools width='18px' height='18px'/>
    },
    {
      name: 'Entertainment',
      link: '/entertainment',
      icon: <Tools width='18px' height='18px'/>
    },
    {
      name: 'Freebies',
      link: '/freebies',
      icon: <Tools width='18px' height='18px'/>
    },
    {
      name: 'Icons',
      link: '/icons',
      icon: <Tools width='18px' height='18px'/>
    },
    {
      name: 'Illustrations',
      link: '/illustrations',
      icon: <Tools width='18px' height='18px'/>
    },
    {
      name: 'JS Plugins',
      link: '/js-plugins',
      icon: <Tools width='18px' height='18px'/>
    },
    {
      name: 'Loaders & Spinners',
      link: '/loaders-and-spinners',
      icon: <Tools width='18px' height='18px'/>
    },
    {
      name: 'Marketing Resources',
      link: '/marketing-resources',
      icon: <Tools width='18px' height='18px'/>
    },
    {
      name: 'Misc',
      link: '/misc',
      icon: <Tools width='18px' height='18px'/>
    },
    {
      name: 'Nocode',
      link: '/nocode',
      icon: <Tools width='18px' height='18px'/>
    },
    {
      name: 'Productivity',
      link: '/productivity',
      icon: <Tools width='18px' height='18px'/>
    },
    {
      name: 'SEO',
      link: '/seo',
      icon: <Tools width='18px' height='18px'/>
    },
    {
      name: 'Stock Assets',
      link: '/stock-assets',
      icon: <Tools width='18px' height='18px'/>
    },
    {
      name: 'Wireframe',
      link: '/wireframe',
      icon: <Tools width='18px' height='18px'/>
    },
    {
      name: 'productivity',
      link: '/productivity',
      icon: <Tools width='18px' height='18px'/>
    },
    {
      name: 'Editors Choice',
      link: '/editors-choice',
      icon: <Tools width='18px' height='18px'/>
    },
  ],
  reducers: {
    
  }
});

let toolsItmes = createSlice({
  name: 'toolsItmes',
  initialState: [
    {
      name: '/api',
      category: '/api',
    },
    {
      name: '/browser-extensions',
      category: '/browser-extensions',
    },
    {
      name: '/css-frameworks',
      category: '/css-frameworks',
    },
    {
      name: '/career',
      category: '/career',
    },
    {
      name: '/charts',
      category: '/charts',
    },
    {
      name: '/cheatsheets',
      category: '/cheatsheets',
    },
    {
      name: '/code-automation',
      category: '/code-automation',
    },
    {
      name: '/content-and-writing',
      category: '/content-and-writing',
    },
    {
      name: '/design-mockup',
      category: '/design-mockup',
    },
    {
      name: '/design-resources',
      category: '/design-resources',
    },
    {
      name: '/design-tools',
      category: '/design-tools',
    },
    {
      name: '/developer-productivity',
      category: '/developer-productivity',
    },
    {
      name: '/developer-resources',
      category: '/developer-resources',
    },
    {
      name: '/developer-tools',
      category: '/developer-tools',
    },
    {
      name: '/education',
      category: '/education',
    },
    {
      name: '/email-builders',
      category: '/email-builders',
    },
    {
      name: '/email-tools',
      category: '/email-tools',
    },
    {
      name: '/entertainment',
      category: '/entertainment',
    },
    {
      name: '/freebies',
      category: '/freebies',
    },
    {
      name: '/icons',
      category: '/icons',
    },
    {
      name: '/illustrations',
      category: '/illustrations',
    },
    {
      name: '/js-plugins',
      category: '/js-plugins',
    },
    {
      name: '/loaders-and-spinners',
      category: '/loaders-and-spinners',
    },
    {
      name: '/marketing-resources',
      category: '/marketing-resources',
    },
    {
      name: '/misc',
      category: '/misc',
    },
    {
      name: '/nocode',
      category: '/nocode',
    },
    {
      name: '/productivity',
      category: '/productivity',
    },
    {
      name: '/seo',
      category: '/seo',
    },
    {
      name: '/stock-assets',
      category: '/stock-assets',
    },
    {
      name: '/wireframe',
      category: '/wireframe',
    },
    {
      name: '/productivity',
      category: '/productivity',
    },
    {
      name: '/editors-choice',
      category: '/editors-choice',
    },
    {
      name: '/api',
      category: '/api',
    },
    {
      name: '/browser-extensions',
      category: '/browser-extensions',
    },
    {
      name: '/css-frameworks',
      category: '/css-frameworks',
    },
    {
      name: '/career',
      category: '/career',
    },
    {
      name: '/charts',
      category: '/charts',
    },
    {
      name: '/cheatsheets',
      category: '/cheatsheets',
    },
    {
      name: '/code-automation',
      category: '/code-automation',
    },
    {
      name: '/content-and-writing',
      category: '/content-and-writing',
    },
    {
      name: '/design-mockup',
      category: '/design-mockup',
    },
    {
      name: '/design-resources',
      category: '/design-resources',
    },
    {
      name: '/design-tools',
      category: '/design-tools',
    },
    {
      name: '/developer-productivity',
      category: '/developer-productivity',
    },
    {
      name: '/developer-resources',
      category: '/developer-resources',
    },
    {
      name: '/developer-tools',
      category: '/developer-tools',
    },
    {
      name: '/education',
      category: '/education',
    },
    {
      name: '/email-builders',
      category: '/email-builders',
    },
    {
      name: '/email-tools',
      category: '/email-tools',
    },
    {
      name: '/entertainment',
      category: '/entertainment',
    },
    {
      name: '/freebies',
      category: '/freebies',
    },
    {
      name: '/icons',
      category: '/icons',
    },
    {
      name: '/illustrations',
      category: '/illustrations',
    },
    {
      name: '/js-plugins',
      category: '/js-plugins',
    },
    {
      name: '/loaders-and-spinners',
      category: '/loaders-and-spinners',
    },
    {
      name: '/marketing-resources',
      category: '/marketing-resources',
    },
    {
      name: '/misc',
      category: '/misc',
    },
    {
      name: '/nocode',
      category: '/nocode',
    },
    {
      name: '/productivity',
      category: '/productivity',
    },
    {
      name: '/seo',
      category: '/seo',
    },
    {
      name: '/stock-assets',
      category: '/stock-assets',
    },
    {
      name: '/wireframe',
      category: '/wireframe',
    },
    {
      name: '/productivity',
      category: '/productivity',
    },
    {
      name: '/editors-choice',
      category: '/editors-choice',
    },
    {
      name: '/api',
      category: '/api',
    },
    {
      name: '/browser-extensions',
      category: '/browser-extensions',
    },
    {
      name: '/css-frameworks',
      category: '/css-frameworks',
    },
    {
      name: '/career',
      category: '/career',
    },
    {
      name: '/charts',
      category: '/charts',
    },
    {
      name: '/cheatsheets',
      category: '/cheatsheets',
    },
    {
      name: '/code-automation',
      category: '/code-automation',
    },
    {
      name: '/content-and-writing',
      category: '/content-and-writing',
    },
    {
      name: '/design-mockup',
      category: '/design-mockup',
    },
    {
      name: '/design-resources',
      category: '/design-resources',
    },
    {
      name: '/design-tools',
      category: '/design-tools',
    },
    {
      name: '/developer-productivity',
      category: '/developer-productivity',
    },
    {
      name: '/developer-resources',
      category: '/developer-resources',
    },
    {
      name: '/developer-tools',
      category: '/developer-tools',
    },
    {
      name: '/education',
      category: '/education',
    },
    {
      name: '/email-builders',
      category: '/email-builders',
    },
    {
      name: '/email-tools',
      category: '/email-tools',
    },
    {
      name: '/entertainment',
      category: '/entertainment',
    },
    {
      name: '/freebies',
      category: '/freebies',
    },
    {
      name: '/icons',
      category: '/icons',
    },
    {
      name: '/illustrations',
      category: '/illustrations',
    },
    {
      name: '/js-plugins',
      category: '/js-plugins',
    },
    {
      name: '/loaders-and-spinners',
      category: '/loaders-and-spinners',
    },
    {
      name: '/marketing-resources',
      category: '/marketing-resources',
    },
    {
      name: '/misc',
      category: '/misc',
    },
    {
      name: '/nocode',
      category: '/nocode',
    },
    {
      name: '/productivity',
      category: '/productivity',
    },
    {
      name: '/seo',
      category: '/seo',
    },
    {
      name: '/stock-assets',
      category: '/stock-assets',
    },
    {
      name: '/wireframe',
      category: '/wireframe',
    },
    {
      name: '/productivity',
      category: '/productivity',
    },
    {
      name: '/editors-choice',
      category: '/editors-choice',
    },
    {
      name: '/api',
      category: '/api',
    },
    {
      name: '/browser-extensions',
      category: '/browser-extensions',
    },
    {
      name: '/css-frameworks',
      category: '/css-frameworks',
    },
    {
      name: '/career',
      category: '/career',
    },
    {
      name: '/charts',
      category: '/charts',
    },
    {
      name: '/cheatsheets',
      category: '/cheatsheets',
    },
    {
      name: '/code-automation',
      category: '/code-automation',
    },
    {
      name: '/content-and-writing',
      category: '/content-and-writing',
    },
    {
      name: '/design-mockup',
      category: '/design-mockup',
    },
    {
      name: '/design-resources',
      category: '/design-resources',
    },
    {
      name: '/design-tools',
      category: '/design-tools',
    },
    {
      name: '/developer-productivity',
      category: '/developer-productivity',
    },
    {
      name: '/developer-resources',
      category: '/developer-resources',
    },
    {
      name: '/developer-tools',
      category: '/developer-tools',
    },
    {
      name: '/education',
      category: '/education',
    },
    {
      name: '/email-builders',
      category: '/email-builders',
    },
    {
      name: '/email-tools',
      category: '/email-tools',
    },
    {
      name: '/entertainment',
      category: '/entertainment',
    },
    {
      name: '/freebies',
      category: '/freebies',
    },
    {
      name: '/icons',
      category: '/icons',
    },
    {
      name: '/illustrations',
      category: '/illustrations',
    },
    {
      name: '/js-plugins',
      category: '/js-plugins',
    },
    {
      name: '/loaders-and-spinners',
      category: '/loaders-and-spinners',
    },
    {
      name: '/marketing-resources',
      category: '/marketing-resources',
    },
    {
      name: '/stock-assets',
      category: '/stock-assets',
    },
    {
      name: '/wireframe',
      category: '/wireframe',
    },
    {
      name: '/productivity',
      category: '/productivity',
    },
    {
      name: '/editors-choice',
      category: '/editors-choice',
    },
    {
      name: '/api',
      category: '/api',
    },
    {
      name: '/content-and-writing',
      category: '/content-and-writing',
    },
    {
      name: '/design-mockup',
      category: '/design-mockup',
    },
    {
      name: '/design-resources',
      category: '/design-resources',
    },
    {
      name: '/design-tools',
      category: '/design-tools',
    },
    {
      name: '/design-tools',
      category: '/design-tools',
    },
    {
      name: '/design-tools',
      category: '/design-tools',
    },
    {
      name: '/design-tools',
      category: '/design-tools',
    },
    {
      name: '/design-tools',
      category: '/design-tools',
    },
    {
      name: '/developer-productivity',
      category: '/developer-productivity',
    },
    {
      name: '/developer-resources',
      category: '/developer-resources',
    },
    {
      name: '/developer-tools',
      category: '/developer-tools',
    },
    {
      name: '/education',
      category: '/education',
    },
    {
      name: '/email-builders',
      category: '/email-builders',
    },
    {
      name: '/email-tools',
      category: '/email-tools',
    },
    {
      name: '/entertainment',
      category: '/entertainment',
    },
    {
      name: '/freebies',
      category: '/freebies',
    },
    {
      name: '/icons',
      category: '/icons',
    },
    {
      name: '/illustrations',
      category: '/illustrations',
    },
    {
      name: '/js-plugins',
      category: '/js-plugins',
    },
    {
      name: '/loaders-and-spinners',
      category: '/loaders-and-spinners',
    },
    {
      name: '/marketing-resources',
      category: '/marketing-resources',
    },
    {
      name: '/misc',
      category: '/misc',
    },
    {
      name: '/nocode',
      category: '/nocode',
    },
    {
      name: '/productivity',
      category: '/productivity',
    },
    {
      name: '/seo',
      category: '/seo',
    },
    {
      name: '/stock-assets',
      category: '/stock-assets',
    },
    {
      name: '/wireframe',
      category: '/wireframe',
    },
    {
      name: '/productivity',
      category: '/productivity',
    },
    {
      name: '/editors-choice',
      category: '/editors-choice',
    },
  ]
})


export default configureStore({
  reducer: {
    categorys: categorys.reducer,
    toolsItmes: toolsItmes.reducer
  }
});


// export let { gotoContentTop,changeTopArr } = categorys.actions;